const { BadRequestError, UnauthenticatedError } = require('../errors/error');
const { validationResult } = require('express-validator');
const Developer = require('../models/developers');
const DevSkill = require('../models/helping_tables/developer_skill');
const Skill = require('../models/helping_tables/skills');
const User = require('../models/users');
const { where } = require('sequelize');

const createDevProfile = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(400)
      .json({ errors: error.array().map((error) => error.msg) });
  }
  console.log(req.user);
  if (!req.user) {
    throw new UnauthenticatedError('Authentication Invalid');
  }
  if (req.user.category == 'Client') {
    throw new UnauthenticatedError('Invalid Authorization');
  }
  const user = await User.findByPk(req.user.userId);
  if (!user) {
    throw new UnauthenticatedError('User does not exist');
  }
  const { name, bio, qualification, instituteName, experience, skill } =
    req.body;
  const developer = await Developer.findByPk(req.user.userId);
  if (developer) {
    throw new BadRequestError('Developer already exists');
  }
  await Developer.create({
    dev_id: req.user.userId,
    dev_name: name,
    bio: bio,
    qualification: qualification,
    institute_name: instituteName,
    experience_year: experience,
  });
  for (const skillItem of skill) {
    await DevSkill.create({ dev_id: req.user.userId, skill_id: skillItem });
  }
  return res.status(200).json({ msg: 'Developer Profile Created' });
};

const getDevProfile = async (req, res) => {
  if (!req.user) {
    throw new UnauthenticatedError('Authentication Invalid');
  }
  if (req.user.category == 'Client') {
    throw new UnauthenticatedError('Invalid Authorization');
  }
  const user = await User.findByPk(req.user.userId);
  if (!user) {
    throw new UnauthenticatedError('User does not exist');
  }
  console.log(req.user.use);
  const developerInfo = await Developer.findByPk(req.user.userId);
  if (!developerInfo) {
    return res.status(404).json({ msg: 'Developer Profile does not exist' });
  }
  const developerSkills = await DevSkill.findAll({
    where: { dev_id: req.user.userId },
    include: { model: Skill, attributes: ['skill_name'], required: true },
  });
  const developerProfile = {
    dev_id: developerInfo.dev_id,
    dev_name: developerInfo.dev_name,
    bio: developerInfo.bio,
    qualification: developerInfo.qualification,
    institute_name: developerInfo.institute_name,
    experience_year: developerInfo.experience_year,
    skills: developerSkills.map((skill) => skill.Skill.skill_name),
  };
  return res.status(200).json(developerProfile);
};

module.exports = { createDevProfile, getDevProfile };

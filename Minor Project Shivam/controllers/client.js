const { BadRequestError, UnauthenticatedError } = require('../errors/error');
const { validationResult } = require('express-validator');
const Client = require('../models/client');
const User = require('../models/users');
const Project = require('../models/project');

const createClientProfile = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty) {
    return res
      .status(400)
      .json({ errors: error.array().map((error) => error.msg) });
  }
  if (!req.user) {
    throw new UnauthenticatedError('Authentication Invalid');
  }
  if (req.user.category == 'Developer') {
    throw new UnauthenticatedError('Invalid Authorization');
  }
  const user = await User.findByPk(req.user.userId);
  if (!user) {
    throw new UnauthenticatedError('User does not exist');
  }
  const { name, bio, dev_testimonial, projects } = req.body;
  const client = await Client.findByPk(req.user.userId);
  if (client) {
    throw new BadRequestError('Client already exist');
  }
  await Client.create({
    client_name: name,
    bio: bio,
    dev_testimonial: dev_testimonial,
  });
  for (const project of projects) {
    await Project.create({
      project_name: project.project_name,
      project_description: project.project_description,
      wage: project.wage,
      client_id: req.user.userId,
    });
  }
  return res.status(200).json({ msg: 'Client Profile Created' });
};

const getClientProfile = async (req, res) => {
  if (!req.user) {
    throw new UnauthenticatedError('Authentication Invalid');
  }
  if (req.user.category == 'Developer') {
    throw new UnauthenticatedError('Invalid Authorization');
  }
  const user = await User.findByPk(req.user.userId);
  if (!user) {
    throw new UnauthenticatedError('User does not exist');
  }
  const clientInfo = await Client.findByPk(req.user.userId);
  if (!clientInfo) {
    return res.status(404).json({ msg: 'Developer Profile does not exist' });
  }
  const clientProjects = await Project.findAll({
    where: { client_id: req.user.userId },
  });
  const clientProfile = {
    client_id: clientInfo.client_id,
    client_name: clientInfo.client_name,
    bio: clientInfo.bio,
    dev_testimonial: clientInfo.dev_testimonial,
    project: clientProjects,
  };
  return res.status(200).json(clientProfile);
};

module.exports = { createClientProfile, getClientProfile };

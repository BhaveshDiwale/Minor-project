const skillTable = require('../models/helping_tables/skills');
const devSkillRelationTable = require('../models/helping_tables/developer_skill');
const projectSkillRelationTable = require('../models/helping_tables/project_skill');
const userTable = require('../models/users');
const reviewTable = require('../models/reviews');
const projectTable = require('../models/project');
const deveoperTable = require('../models/developers');
const clientTable = require('../models/client');

const createTable = async () => {
  await userTable.sync();
  await skillTable.sync();
  // await reviewTable.sync();
  await deveoperTable.sync();
  await clientTable.sync();
  await projectTable.sync();
  await devSkillRelationTable.sync();
  await projectSkillRelationTable.sync();
};

module.exports = createTable;

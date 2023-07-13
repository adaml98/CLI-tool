const logger = require("../logger")("commands:start");

module.exports = function psql() {
  logger.highlight(" PSQL CLI COMMANDS ");
  console.log(`
\\l          - show databases
\\c db_name  - connect to db
\\dt         - show tables
\\dt+        - show tables and more info
\\d tb_name  - display more information about a specific table in a database
\\?          - show other commands
\\q          - exit CLI
:q          - Return to psql cli from database/table/query view
`);
};

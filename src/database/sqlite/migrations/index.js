const sqliteConection = require('../../sqlite')
const createUsers = require('./CreateUsers')

async function migrationRun() {
    const schemas = [
        createUsers      //* tabelas do banco de dados(só tem essa)
    ].join('')

    sqliteConection()
        .then(db => db.exec(schemas))
        .catch(error => console.error(error))
}

module.exports = migrationRun
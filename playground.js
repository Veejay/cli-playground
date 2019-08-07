const Table = require('cli-table3')
const colors = require('colors//safe')
const table = new Table({
    head: [
        colors.blue.bold('VERB'),
        colors.green.bold('ROUTE'),
        colors.red.bold('CONTROLLER'),
        colors.yellow.bold('LEGACY')],
    colWidths: [6, 60, 60, 8]
})

table.push(
    [colors.bgBlue.white.bold('POST'), '/getLegacyLawyersFromUsersLegacyWhat/:blah', 'getLegacyLawyersFromUsers', 'YES']
    
)
table.push(
    [colors.bgBlue.white.bold('POST'), '/getDecisionsByQPCAssociatedLawyers', 'decisions/decisions.js', 'YES']

)

console.log(table.toString())
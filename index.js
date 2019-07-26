const minimist = require('minimist')

module.exports = () => {
  const args = minimist(process.argv.slice(2))

  let cmd = args._[0] || 'help'

  if (args.version || args.v) {
    cmd = 'version'
  }

  if (args.help || args.h) {
    cmd = 'help'
  }

  if (args.generate || args.g) {
    cmd = 'generate'
  }

  switch (cmd) {
    case 'today':
      require('./cmds/today')(args)
      break

    case 'generate':
      require('./cmds/generate')(args)
      break

    case 'help':
      require('./cmds/help')(args)
      break
    
    case 'forecast':
        require('./cmds/forecast')(args)
        break
    
    default:
      console.error(`"${cmd}" is not a valid command!`)
      break
  }
}
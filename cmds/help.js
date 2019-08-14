const menus = {
  main: `
    react-pod-cli [command] <options>

    generate .............. generate a React component pod. By default you get a functional component with no Redux.
    version ............ show package version
    help ............... show help menu for a command`,

  generate: `
    react-pod-cli generate <options>

    --redux, -r ..... specify if redux is required
    --class -cls ..... indicate that a class component is needed`,
  
  version: `
    react-pod-cli version

    --version, -v ..... show package version
  `
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}
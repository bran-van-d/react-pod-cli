module.exports = (args) => {
  var fs = require('fs');
  console.log(args)
  const ComponentName = args._[1];
  const componentDirectory = `components/${ComponentName}`;

  fs.mkdirSync(componentDirectory);

  const ReactFunctionalComponent = `import React from 'react';

const ${ComponentName} = (props) => {
  return <div> ${ComponentName} </div>
}

export default ${ComponentName}
`

  const ReactStyledComponent = `import React from 'react';
import styled from 'styled-components';

const Container = styled.div\`
  text-align: center;
\`

export default ${ComponentName}
`

  const ReactJestTest = `import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe(\`<${ComponentName} />\`, () => {
    it('one should equal one', () => {
        expect(1 === 1)
    });
});
`
  fs.appendFile(`${componentDirectory}/${ComponentName}.js`, ReactFunctionalComponent, function (err) {
    if (err) throw err;
    console.log(`${ComponentName} React Component Created!`);
  });

  fs.appendFile(`${componentDirectory}/${ComponentName}-styles.js`, ReactStyledComponent, function (err) {
    if (err) throw err;
    console.log(`${ComponentName} Style Sheet Created!`);
  });

  fs.appendFile(`${componentDirectory}/${ComponentName}-tests.js`, ReactJestTest, function (err) {
    if (err) throw err;
    console.log(`${ComponentName} Test File Created!`);
  });
}
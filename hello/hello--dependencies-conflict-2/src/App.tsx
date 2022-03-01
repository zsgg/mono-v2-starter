import * as React from 'react';

const App = () => {
    return <div>hello world {React.version}</div>;
};

export default App;

console.log(`hello--dependencies-conflict-2`, React.version);

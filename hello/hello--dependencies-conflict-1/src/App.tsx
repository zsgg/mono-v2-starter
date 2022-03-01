import * as React from 'react';
import App2 from 'hello--dependencies-conflict-2';

const App = () => {
    return (
        <div>
            hello world {React.version}
            <App2 />
        </div>
    );
};

export default App;

console.log(`app`, <App />);
console.log(`hello--dependencies-conflict-1`, React.version);

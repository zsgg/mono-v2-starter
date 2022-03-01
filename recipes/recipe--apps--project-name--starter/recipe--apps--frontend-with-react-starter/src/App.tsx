import styled from '@emotion/styled';
import { hot } from 'react-hot-loader/root';

import { a, A } from 'recipe--packages--util-starter';

const Hello = styled.div`
    background: red;
`;

const zsgg = () => {
    console.log(`< hello zsgg >`);
};
zsgg();

const App = () => {
    return (
        <Hello>
            hello {a} {A.a1}
        </Hello>
    );
};

export default hot(App);

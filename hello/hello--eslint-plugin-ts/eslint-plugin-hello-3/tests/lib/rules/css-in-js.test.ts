import { create } from '@lib/rules/css-in-js';
import path from 'path';
import { ruleTester } from '../../RuleUtils';

// @ts-ignore
ruleTester.run('styled naming', create, {
    invalid: [
        {
            code: `const a = styled.div();`,
            errors: [{ message: `css in js 의 styled 는 카멜케이스만 허용됩니다` }],
        },
        {
            code: 'const a = styled.div``;',
            errors: [{ message: `css in js 의 styled 는 카멜케이스만 허용됩니다` }],
        },
    ],
    valid: [{ code: 'const A = styled.div``;' }, { code: 'export default styled.div``;' }, { code: 'const B = styled.div();' }],
});

// @ts-ignore
ruleTester.run('emotion import', create, {
    invalid: [
        {
            code: `import styled from '@emotion/styled';`,
            errors: [{ message: `emotion 은 직접 사용하지 말고 ui-system 의 emotion 을 사용하여 구현해주세요` }],
            filename: path.join('a', 'b', 'c.ts'),
            options: [{ emotionNotDirectPackage: ['a'] }],
        },
    ],
    valid: [{ code: `import styled from '@other/styled';` }, { code: 'export default styled.div``;' }, { code: 'const B = styled.div();' }],
});

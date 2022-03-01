import './sideEffect';

const a = (): string => {
    return '';
    // return Promise.resolve('');
};

const c = { current: 0 };
c.current += 11;

export default c;

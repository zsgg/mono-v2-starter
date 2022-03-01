import { useState } from 'react';

const SampleKey = () => {
    const [l, sl] = useState([]);
    return (
        <div>
            <button onClick={() => sl((p) => [p.length + 1, ...p])}>
                prepend
            </button>
            <button onClick={() => sl((p) => [...p, p.length + 1])}>
                append
            </button>
            <hr />
            {l.map((v, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Num n={v} key={index} />
            ))}
        </div>
    );
};

export default SampleKey;

const Num = ({ n }) => {
    const [sn, ssn] = useState(Math.floor(Math.random() * 100));
    return (
        <div>
            <span>
                {n} {sn}
                <button onClick={() => ssn((p) => p + 1)}>up</button>
            </span>
        </div>
    );
};

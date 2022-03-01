const { calcEquation } = require('./solution.0');

it('should 1', function () {
    expect(
        calcEquation(
            [
                ['a', 'b'],
                ['b', 'c'],
            ],
            [2.0, 3.0],
            [
                ['a', 'c'],
                ['b', 'a'],
                ['a', 'e'],
                ['a', 'a'],
                ['x', 'x'],
            ],
        ),
    ).toStrictEqual([6.0, 0.5, -1.0, 1.0, -1.0]);
});
it('should 2', function () {
    expect(
        calcEquation(
            [
                ['a', 'b'],
                ['b', 'c'],
                ['bc', 'cd'],
            ],
            [1.5, 2.5, 5.0],
            [
                ['a', 'c'],
                ['c', 'b'],
                ['bc', 'cd'],
                ['cd', 'bc'],
            ],
        ),
    ).toStrictEqual([3.75, 0.4, 5.0, 0.2]);
});
it('should 3', function () {
    expect(
        calcEquation(
            [['a', 'b']],
            [0.5],
            [
                ['a', 'b'],
                ['b', 'a'],
                ['a', 'c'],
                ['x', 'y'],
            ],
        ),
    ).toStrictEqual([0.5, 2.0, -1.0, -1.0]);
});

import {func} from './library';

test('func for 10 should produce 20', () => {
    expect(func(10)).toBe(20);
});
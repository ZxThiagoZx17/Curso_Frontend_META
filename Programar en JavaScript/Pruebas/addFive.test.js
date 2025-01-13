const {default: TestRunner} =  require("jest-runner");
const addFive = require('./addFive');

test('Retorna el numero +5', () => {
    expect(addFive(1)).toBe(6);
})
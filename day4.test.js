const { cardPoints, getNumbers } = require('./Day4');

describe('cardPoints', () => {
  it('should return 0 for any input', () => {
    const result = cardPoints('any input');

    expect(result).toBe(0);
  });
});

describe('getNumbers', () => {
  it('should return 0 for any input', () => {
    const result = cgetNumbers('any input');

    expect(result).toBe(0);
  });
});
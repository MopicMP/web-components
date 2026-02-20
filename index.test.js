const { components, batch } = require('./index');

describe('web-components', () => {
  test('should process string input', () => {
    expect(components('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => components(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = components('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});

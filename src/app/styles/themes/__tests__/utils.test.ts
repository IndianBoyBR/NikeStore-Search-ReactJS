import * as utils from '../utils';

describe('theme utils', () => {
  it('should get storage item', () => {
    utils.saveTheme('light');
    expect(utils.getThemeFromStorage()).toBe('light');
  });

  it('should check light theme', () => {
    expect(utils.isSystemLight).toBeUndefined();
  });
});

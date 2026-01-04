// @ts-check
import { eslint } from '@charming-swamp/eslint';

export default eslint({
  typescript: true,
  stylistic: true,
  rules: {
    'node/prefer-global/process': 'off',
    'style/comma-dangle': ['error', 'never'],
    'style/arrow-parens': ['error', 'as-needed'],
    'style/indent': ['error', 'tab', { SwitchCase: 1 }]
  }
});

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert']],
    'subject-case': [2, 'always', ['sentence-case', 'lower-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
  },
}

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat', 'fix', 'docs', 'refactor', 'test',
      'chore', 'perf', 'ci', 'build', 'revert',   
    ]],
    'scope-enum': [2, 'always', [
      'api', 'web', 'db', 'infra', 'docs',        
    ]],
    'scope-empty': [2, 'always'],                  
    'header-max-length': [2, 'always', 72],
    'subject-full-stop': [2, 'never', '.'],
    'subject-case': [2, 'never', ['upper-case', 'pascal-case']], 
  },
};
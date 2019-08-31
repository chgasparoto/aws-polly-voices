const tasks = t => t.join(' && ') 

module.exports = {
  hooks: {
    'pre-commit': tasks([
      'npm run lin',
      'npm run test'
    ])
  }
}
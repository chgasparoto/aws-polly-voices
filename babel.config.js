module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/typescript'
  ],
  plugins: [
    'add-module-exports',
    '@babel/proposal-object-rest-spread'
  ]
}

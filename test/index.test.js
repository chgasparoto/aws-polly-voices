const Voices = require('../src/index').Voices

const mockVoices = [{}]

describe('Voices', () => {
  test('should return an array of available languages', () => {
    const voices = new Voices(mockVoices)
    const langs = voices.languages()
    expect(langs).toBeArray()
  })
})
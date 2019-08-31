/* eslint-env jest */
const Voices = require('../src/index').Voices

const mockVoices = [{
  Gender: 'Female',
  Name: 'Lotte',
  LanguageName: 'Dutch',
  Id: 'Lotte',
  LanguageCode: 'nl-NL'
},
{
  Gender: 'Male',
  Name: 'Ruben',
  LanguageName: 'Dutch',
  Id: 'Ruben',
  LanguageCode: 'nl-NL'
},
{
  Gender: 'Female',
  Name: 'Vitória',
  LanguageName: 'Brazilian Portuguese',
  Id: 'Vitoria',
  LanguageCode: 'pt-BR'
},
{
  Gender: 'Male',
  Name: 'Ricardo',
  LanguageName: 'Brazilian Portuguese',
  Id: 'Ricardo',
  LanguageCode: 'pt-BR'
},
{
  Gender: 'Male',
  Name: 'Matthew',
  LanguageName: 'US English',
  Id: 'Matthew',
  LanguageCode: 'en-US'
},
{
  Gender: 'Male',
  Name: 'Justin',
  LanguageName: 'US English',
  Id: 'Justin',
  LanguageCode: 'en-US'
}]

let voices
const voiceObjectKeys = ['Gender', 'Name', 'LanguageName', 'Id', 'LanguageCode']

describe('Voices', () => {
  beforeEach(() => {
    voices = new Voices(mockVoices)
  })

  test('it should return an array of available languages', () => {
    const langs = voices.languages()
    expect(langs).toBeArray()
  })

  test('it should return voice data by given language', () => {
    const portuguese = voices.byLang('portuguese')
    expect(portuguese.val).toBeArray()
    expect(portuguese.val[0]).toBeObject()
    expect(portuguese.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(portuguese.id).toBeString()
  })

  test('it should return voice data by given language code', () => {
    const portuguese = voices.byLangCode('pt-br')
    expect(portuguese.val).toBeArray()
    expect(portuguese.val[0]).toBeObject()
    expect(portuguese.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(portuguese.id).toBeString()
  })

  test('it should return voice data by given gender', () => {
    const portuguese = voices.byGender('female')
    expect(portuguese.val).toBeArray()
    expect(portuguese.val[0]).toBeObject()
    expect(portuguese.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(portuguese.id).toBeString()
  })

  test('it should return voice data by given id', () => {
    const portuguese = voices.byId('Vitoria')
    expect(portuguese.val).toBeArray()
    expect(portuguese.val[0]).toBeObject()
    expect(portuguese.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(portuguese.id).toBeString()
  })

  test('it should return ENGLISH voice data', () => {
    const spy = jest.spyOn(voices, 'byLang')
    const portuguese = voices.english()

    expect(portuguese.val).toBeArray()
    expect(portuguese.val[0]).toBeObject()
    expect(portuguese.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(portuguese.id).toBeString()

    expect(spy).toHaveBeenCalledWith('English')

    spy.mockRestore()
  })

  test('it should return PORTUGUESE voice data', () => {
    const spy = jest.spyOn(voices, 'byLang')
    const portuguese = voices.portuguese()

    expect(portuguese.val).toBeArray()
    expect(portuguese.val[0]).toBeObject()
    expect(portuguese.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(portuguese.id).toBeString()

    expect(spy).toHaveBeenCalledWith('Portuguese')

    spy.mockRestore()
  })

  test('it should return BRAZILIAN voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const brazilian = voices.brazilian()

    expect(brazilian.val).toBeArray()
    expect(brazilian.val[0]).toBeObject()
    expect(brazilian.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(brazilian.id).toBeString()

    expect(spy).toHaveBeenCalledWith('pt-BR')

    spy.mockRestore()
  })

  test('it should return AMERICAN voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const american = voices.american()

    expect(american.val).toBeArray()
    expect(american.val[0]).toBeObject()
    expect(american.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(american.id).toBeString()

    expect(spy).toHaveBeenCalledWith('en-US')

    spy.mockRestore()
  })

  test('it should return DUTCH voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const dutch = voices.dutch()

    expect(dutch.val).toBeArray()
    expect(dutch.val[0]).toBeObject()
    expect(dutch.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(dutch.id).toBeString()

    expect(spy).toHaveBeenCalledWith('nl-NL')

    spy.mockRestore()
  })

  test('it should return MALE voice data', () => {
    const spy = jest.spyOn(voices, 'byGender')
    const male = voices.male()

    expect(male.val).toBeArray()
    expect(male.val[0]).toBeObject()
    expect(male.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(male.id).toBeString()

    expect(spy).toHaveBeenCalledWith('male')

    spy.mockRestore()
  })

  test('it should return FEMALE voice data', () => {
    const spy = jest.spyOn(voices, 'byGender')
    const female = voices.female()

    expect(female.val).toBeArray()
    expect(female.val[0]).toBeObject()
    expect(female.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(female.id).toBeString()

    expect(spy).toHaveBeenCalledWith('female')

    spy.mockRestore()
  })

  test('it should return voice id by given id', () => {
    const vitoria = voices.byId('Vitoria').id
    expect(vitoria).toBeString()
    expect(vitoria).toBe('Vitoria')
  })

  test('it should throw an error if voice id was not found', () => {
    expect(() => voices.byId('Robot').id).toThrow('Voice ID not found')
  })
})

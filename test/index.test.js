/* eslint-env jest */
import Voices from '../src/index'

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
},
{
  Gender: 'Female',
  Name: 'Zeina',
  LanguageName: 'Arabic',
  Id: 'Zeina',
  LanguageCode: 'arb'
}]

const voices = new Voices(mockVoices)
const voiceObjectKeys = ['Gender', 'Name', 'LanguageName', 'Id', 'LanguageCode']

describe('Voices', () => {
  beforeEach(() => {
    voices.reset()
  })

  test('it should instanciate a new Voices class with default voices array', () => {
    const defaultVoices = new Voices()
    expect(defaultVoices.val).toBeArray()
    expect(defaultVoices.val[0]).toBeObject()
    expect(defaultVoices.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(defaultVoices.id).toBeString()
  })

  test('it should return an array of available languages', () => {
    const langs = voices.languages()
    expect(langs).toBeArray()
    expect(langs.length).not.toBe(0)
  })

  test('it should return an array of available languages if given an invalid key', () => {
    const invalid = voices.languages('this key is invalid')
    const valid = voices.languages()
    expect(invalid).toBeArray()
    expect(invalid).toStrictEqual(valid)
  })

  test('it should return an array for each voiceObjectKeys', () => {
    voiceObjectKeys.forEach(key => {
      expect(voices.languages(key)).toBeArray()
    })
  })

  test('it should reset the voices after filter it', () => {
    const portuguese = voices.byLang('portuguese')
    expect(portuguese.val).not.toBe(mockVoices)

    portuguese.reset()
    expect(portuguese.val).toBe(mockVoices)
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

  test('it should return ARABIC voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const arabic = voices.arabic()

    expect(arabic.val).toBeArray()
    expect(arabic.val[0]).toBeObject()
    expect(arabic.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(arabic.id).toBeString()

    expect(spy).toHaveBeenCalledWith('arb')

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

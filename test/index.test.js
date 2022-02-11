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
  Name: 'Marlene',
  LanguageName: 'German',
  Id: 'Marlene',
  LanguageCode: 'de-DE'
},
{
  Gender: 'Female',
  Name: 'Mizuki',
  LanguageName: 'Japanese',
  Id: 'Mizuki',
  LanguageCode: 'ja-JP'
},
{
  Gender: 'Male',
  Name: 'Takumi',
  LanguageName: 'Japanese',
  Id: 'Takumi',
  LanguageCode: 'ja-JP'

},
{
  Gender: 'Male',
  Name: 'Jan',
  LanguageName: 'Norweigan',
  Id: 'Jan',
  LanguageCode: 'nb-NO'
},
{
  Gender: 'Female',
  Name: 'Chantal',
  LanguageName: 'Canadian French',
  Id: 'Chantal',
  LanguageCode: 'fr-CA'
},
{
  Gender: 'Female',
  Name: 'Mia',
  LanguageName: 'Mexican Spanish',
  Id: 'Mia',
  LanguageCode: 'es-MX'

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
  Name: 'Joaquim',
  LanguageName: 'European Portuguese',
  Id: 'Joaquim',
  LanguageCode: 'pt-PT'
},
{
  Gender: 'Male',
  Name: 'Matthew',
  LanguageName: 'US English',
  Id: 'Matthew',
  LanguageCode: 'en-US'
},
{
  Gender: 'Female',
  Name: 'Greta',
  LanguageName: 'Russian',
  Id: 'Greta',
  LanguageCode: 'ru-RU'
},
{
  Gender: 'Female',
  Name: 'Astrid',
  LanguageName: 'Swedish',
  Id: 'Astrid',
  LanguageCode: 'sv-SE'
},
{
  Gender: 'Female',
  Name: 'Filiz',
  LanguageName: 'Turkish',
  Id: 'Filiz',
  LanguageCode: 'tr-TR'
},
{
  Gender: 'Male',
  Name: 'Justin',
  LanguageName: 'US English',
  Id: 'Justin',
  LanguageCode: 'en-US'
},
{
  Gender: 'Male',
  Name: 'Giorgio',
  LanguageName: 'Italian',
  Id: 'Giorgio',
  LanguageCode: 'it-IT'
},
{
  Gender: 'Male',
  Name: 'Justin',
  LanguageName: 'GB English',
  Id: 'Justin',
  LanguageCode: 'en-GB'
},
{
  Gender: 'Female',
  Name: 'Nicole',
  LanguageName: 'Australian English',
  Id: 'Nicole',
  LanguageCode: 'en-AU'
},
{
  Gender: 'Male',
  Name: 'Russell',
  LanguageName: 'Australian English',
  Id: 'Russell',
  LanguageCode: 'en-AU'
},
{
  Gender: 'Female',
  Name: 'Maja',
  LanguageName: 'Polish',
  Id: 'Maja',
  LanguageCode: 'pl-PL'
},
{
  Gender: 'Male',
  Name: 'Enrique',
  LanguageName: 'Spanish',
  Id: 'Enrique',
  LanguageCode: 'es-ES'
},
{
  Gender: 'Female',
  Name: 'Zeina',
  LanguageName: 'Arabic',
  Id: 'Zeina',
  LanguageCode: 'arb'

},
{
  Gender: 'Female',
  Name: 'Dóra',
  LanguageName: 'Icelandic',
  Id: 'Dora',
  LanguageCode: 'is-IS'
},
{
  Gender: 'Male',
  Name: 'Karl',
  LanguageName: 'Icelandic',
  Id: 'Karl',
  LanguageCode: 'is-IS'
},
{
  Gender: 'Male',
  Name: 'Miguel',
  LanguageName: 'US Spanish',
  Id: 'Miguel',
  LanguageCode: 'es-US'
},
{
  Gender: 'Female',
  Name: 'Aditi',
  LanguageName: 'IN English',
  Id: 'Aditi',
  LanguageCode: 'en-IN'
},
{
  Gender: 'Female',
  Name: 'Céline',
  LanguageName: 'French',
  Id: 'Celine',
  LanguageCode: 'fr-FR'
},
{
  Gender: 'Male',
  Name: 'Mathieu',
  LanguageName: 'French',
  Id: 'Mathieu',
  LanguageCode: 'fr-FR'
},
{
  Gender: 'Male',
  Name: 'Asbjorn',
  LanguageName: 'Danish',
  Id: 'Asbjorn',
  LanguageCode: 'da-DK'
},
{
  Gender: 'Female',
  Name: 'Gwyneth',
  LanguageName: 'Welsh',
  Id: 'Gwyneth',
  LanguageCode: 'cy-GB'
},
{
  Gender: 'Female',
  Name: 'Conchita',
  LanguageName: 'Castilian Spanish',
  Id: 'Conchita',
  LanguageCode: 'es-ES'
},
{
  Gender: 'Female',
  Name: 'Lucia',
  LanguageName: 'Castilian Spanish',
  Id: 'Lucia',
  LanguageCode: 'es-ES'
},
{
  Gender: 'Male',
  Name: 'Enrique',
  LanguageName: 'Castilian Spanish',
  Id: 'Enrique',
  LanguageCode: 'es-ES'
},
{
  Gender: 'Male',
  Name: 'Geraint',
  LanguageName: 'Welsh English',
  Id: 'Geraint',
  LanguageCode: 'en-GB-WLS'
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
    const femaleVoice = voices.byGender('female')
    expect(femaleVoice.val).toBeArray()
    expect(femaleVoice.val[0]).toBeObject()
    expect(femaleVoice.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(femaleVoice.id).toBeString()
  })

  test('it should return voice data by given id', () => {
    const voiceById = voices.byId('Vitoria')
    expect(voiceById.val).toBeArray()
    expect(voiceById.val[0]).toBeObject()
    expect(voiceById.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(voiceById.id).toBeString()
  })

  test('it should return ENGLISH voice data', () => {
    const spy = jest.spyOn(voices, 'byLang')
    const english = voices.english()

    expect(english.val).toBeArray()
    expect(english.val[0]).toBeObject()
    expect(english.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(english.id).toBeString()

    expect(spy).toHaveBeenCalledWith('English')

    spy.mockRestore()
  })

  test('it should return AUSTRALIAN ENGLISH voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const australian = voices.australian()

    expect(australian.val).toBeArray()
    expect(australian.val[0]).toBeObject()
    expect(australian.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(australian.id).toBeString()

    expect(spy).toHaveBeenCalledWith('en-AU')

    spy.mockRestore()
  })

  test('it should return RUSSIAN voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const russian = voices.russian()

    expect(russian.val).toBeArray()
    expect(russian.val[0]).toBeObject()
    expect(russian.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(russian.id).toBeString()

    expect(spy).toHaveBeenCalledWith('ru-RU')

    spy.mockRestore()
  })

  test('it should return SWEDISH voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const swedish = voices.swedish()

    expect(swedish.val).toBeArray()
    expect(swedish.val[0]).toBeObject()
    expect(swedish.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(swedish.id).toBeString()

    expect(spy).toHaveBeenCalledWith('sv-SE')

    spy.mockRestore()
  })

  test('it should return TURKISH voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const turkish = voices.turkish()

    expect(turkish.val).toBeArray()
    expect(turkish.val[0]).toBeObject()
    expect(turkish.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(turkish.id).toBeString()

    expect(spy).toHaveBeenCalledWith('tr-TR')

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

  test('it should return EUROPEAN PORTUGUESE voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const europeanPortuguese = voices.europeanPortuguese()

    expect(europeanPortuguese.val).toBeArray()
    expect(europeanPortuguese.val[0]).toBeObject()
    expect(europeanPortuguese.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(europeanPortuguese.id).toBeString()

    expect(spy).toHaveBeenCalledWith('pt-PT')

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

  test('it should return CANADIAN FRENCH voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const canadianFrench = voices.canadianFrench()

    expect(canadianFrench.val).toBeArray()
    expect(canadianFrench.val[0]).toBeObject()
    expect(canadianFrench.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(canadianFrench.id).toBeString()

    expect(spy).toHaveBeenCalledWith('fr-CA')

    spy.mockRestore()
  })

  test('it should return GERMAN voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const german = voices.german()

    expect(german.val).toBeArray()
    expect(german.val[0]).toBeObject()
    expect(german.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(german.id).toBeString()

    expect(spy).toHaveBeenCalledWith('de-DE')

    spy.mockRestore()
  })

  test('it should return JAPANESE voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const japanese = voices.japanese()

    expect(japanese.val).toBeArray()
    expect(japanese.val[0]).toBeObject()
    expect(japanese.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(japanese.id).toBeString()

    expect(spy).toHaveBeenCalledWith('ja-JP')

    spy.mockRestore()
  })

  test('it should return DANISH voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const danish = voices.danish()

    expect(danish.val).toBeArray()
    expect(danish.val[0]).toBeObject()
    expect(danish.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(danish.id).toBeString()

    expect(spy).toHaveBeenCalledWith('da-DK')

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

  test('it should return WELSH voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const welsh = voices.welsh()

    expect(welsh.val).toBeArray()
    expect(welsh.val[0]).toBeObject()
    expect(welsh.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(welsh.id).toBeString()

    expect(spy).toHaveBeenCalledWith('cy-GB')

    spy.mockRestore()
  })

  test('it should return NORWEGIAN voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const norwegian = voices.norwegian()

    expect(norwegian.val).toBeArray()
    expect(norwegian.val[0]).toBeObject()
    expect(norwegian.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(norwegian.id).toBeString()

    expect(spy).toHaveBeenCalledWith('nb-NO')

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

  test('it should return ITALIAN voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const italian = voices.italian()

    expect(italian.val).toBeArray()
    expect(italian.val[0]).toBeObject()
    expect(italian.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(italian.id).toBeString()

    expect(spy).toHaveBeenCalledWith('it-IT')

    spy.mockRestore()
  })

  test('it should return BRITISH ENGLISH voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const british = voices.british()

    expect(british.val).toBeArray()
    expect(british.val[0]).toBeObject()
    expect(british.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(british.id).toBeString()

    expect(spy).toHaveBeenCalledWith('en-GB')

    spy.mockRestore()
  })

  test('it should return MEXICAN SPANISH voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const mexican = voices.mexican()

    expect(mexican.val).toBeArray()
    expect(mexican.val[0]).toBeObject()
    expect(mexican.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(mexican.id).toBeString()

    expect(spy).toHaveBeenCalledWith('es-MX')

    spy.mockRestore()
  })

  test('it should return POLISH voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const polish = voices.polish()

    expect(polish.val).toBeArray()
    expect(polish.val[0]).toBeObject()
    expect(polish.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(polish.id).toBeString()

    expect(spy).toHaveBeenCalledWith('pl-PL')

    spy.mockRestore()
  })

  test('it should return SPANISH voice data', () => {
    const spy = jest.spyOn(voices, 'byLang')
    const spanish = voices.spanish()

    expect(spanish.val).toBeArray()
    expect(spanish.val[0]).toBeObject()
    expect(spanish.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(spanish.id).toBeString()

    expect(spy).toHaveBeenCalledWith('Spanish')
  })

  test('it should return ARABIC voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const arabic = voices.arabic()

    expect(arabic.val).toBeArray()
    expect(arabic.val[0]).toBeObject()
    expect(arabic.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(arabic.id).toBeString()

    expect(spy).toHaveBeenCalledWith('arb')
  })

  test('it should return CASTILIAN SPANISH voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const castilian = voices.castilian()

    expect(castilian.val).toBeArray()
    expect(castilian.val[0]).toBeObject()
    expect(castilian.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(castilian.id).toBeString()

    expect(spy).toHaveBeenCalledWith('es-ES')
  })

  test('it should return ICELANDIC voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const icelandic = voices.icelandic()

    expect(icelandic.val).toBeArray()
    expect(icelandic.val[0]).toBeObject()
    expect(icelandic.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(icelandic.id).toBeString()

    expect(spy).toHaveBeenCalledWith('is-IS')

    spy.mockRestore()
  })

  test('it should return AMERICAN SPANISH voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const americanSpanish = voices.americanSpanish()

    expect(americanSpanish.val).toBeArray()
    expect(americanSpanish.val[0]).toBeObject()
    expect(americanSpanish.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(americanSpanish.id).toBeString()

    expect(spy).toHaveBeenCalledWith('es-US')
  })

  test('it should return INDIAN ENGLISH voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const indianEnglish = voices.indianEnglish()

    expect(indianEnglish.val).toBeArray()
    expect(indianEnglish.val[0]).toBeObject()
    expect(indianEnglish.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(indianEnglish.id).toBeString()

    expect(spy).toHaveBeenCalledWith('en-IN')

    spy.mockRestore()
  })

  test('it should return FRENCH voice data', () => {
    const spy = jest.spyOn(voices, 'byLang')
    const french = voices.french()

    expect(french.val).toBeArray()
    expect(french.val[0]).toBeObject()
    expect(french.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(french.id).toBeString()

    expect(spy).toHaveBeenCalledWith('French')

    spy.mockRestore()
  })

  test('it should return WELSH ENGLISH voice data', () => {
    const spy = jest.spyOn(voices, 'byLangCode')
    const welshEnglish = voices.welshEnglish()

    expect(welshEnglish.val).toBeArray()
    expect(welshEnglish.val[0]).toBeObject()
    expect(welshEnglish.val[0]).toContainAllKeys(voiceObjectKeys)
    expect(welshEnglish.id).toBeString()

    expect(spy).toHaveBeenCalledWith('en-GB-WLS')

    spy.mockRestore()
  })
})

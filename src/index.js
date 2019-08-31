const { Voices: voicesArray } = require('./voices')

class Voices {
  constructor (voices) {
    this.voices = voices
  }

  languages (field = 'LanguageName') {
    const keys = ['Gender', 'Name', 'LanguageName', 'Id', 'LanguageCode']
    const key = keys.includes(field) ? keys[field] : field

    return [...new Set(this.voices.map(voice => voice[key]))].sort()
  }

  byLang (lang) {
    this.voices = this.voices.filter(voice => {
      const language = voice.LanguageName.toLowerCase()
      return language.includes(lang.toLowerCase())
    })
    return this
  }

  byLangCode (langCode) {
    this.voices = this.voices.filter(voice => voice.LanguageCode.toLowerCase() === langCode.toLowerCase())
    return this
  }

  byGender (gender) {
    this.voices = this.voices.filter(voice => voice.Gender.toLowerCase() === gender.toLowerCase())
    return this
  }

  byId (id) {
    this.voices = this.voices.filter(voice => voice.Id === id)
    return this
  }

  english () {
    return this.byLang('English')
  }

  portuguese () {
    return this.byLang('Portuguese')
  }

  american () {
    return this.byLangCode('en-US')
  }

  brazilian () {
    return this.byLangCode('pt-BR')
  }

  dutch () {
    return this.byLangCode('nl-NL')
  }

  female () {
    return this.byGender('female')
  }

  male () {
    return this.byGender('male')
  }

  get val () {
    return this.voices
  }

  get id () {
    if (!this.voices.length) {
      throw new Error('Voice ID not found')
    }

    let random = 0

    if (this.voices.length > 1) {
      random = Math.floor(Math.random() * this.voices.length)
    }

    return this.voices[random].Id
  }
}

const voices = module.exports = new Voices(voicesArray)
voices.Voices = Voices

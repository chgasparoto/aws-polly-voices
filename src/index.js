import { Voices as voicesArray } from './voices.json'

export default class Voices {
  constructor (voices = voicesArray) {
    this.voices = voices
    this.original = voices
  }

  reset () {
    this.voices = this.original
    return this
  }

  languages (field = 'LanguageName') {
    const keys = ['Gender', 'Name', 'LanguageName', 'Id', 'LanguageCode']
    const index = keys.findIndex(element => element === field)
    const key = index !== -1 ? index : 2

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

  british () {
    return this.byLangCode('en-GB')
  }

  dutch () {
    return this.byLangCode('nl-NL')
  }

  russian () {
    return this.byLangCode('ru-RU')
  }

  turkish () {
    return this.byLangCode('tr-TR')
  }

  german () {
    return this.byLangCode('de-DE')
  }

  polish () {
    return this.byLangCode('pl-PL')
  }

  mexican () {
    return this.byLangCode('es-MX')
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

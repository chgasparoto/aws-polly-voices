'use strict'

const voicesArray = require('./voices.json').Voices

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

class Voices {
  constructor (voices) {
    this.voices = voices
  }

  languages () {
    return [...new Set(this.voices.map(voice => voice.LanguageName))].sort()
  }

  byLang (lang) {
    this.voices = this.voices.filter(language => language.LanguageName.includes(capitalize(lang)))
    return this
  }

  byLangCode (langCode) {
    this.voices = this.voices.filter(voice => voice.LanguageCode.includes((langCode)))
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

  brazilian () {
    return this.byLangCode('BR')
  }

  dutch () {
    return this.byLangCode('NL')
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
    let random = 0

    if (this.voices.length > 1) {
      random = Math.floor(Math.random() * this.voices.length)
    }

    return this.voices[random].Id
  }
}

const voices = module.exports = new Voices(voicesArray)
voices.Voices = Voices
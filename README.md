# AWS Polly Voices

A lightweight library to get the VoiceID programmatically without install or call the heavyweight aws-sdk for nodejs. https://docs.aws.amazon.com/polly/latest/dg/voicelist.html

[![travis build](https://img.shields.io/travis/chgasparoto/aws-polly-voices.svg?style=flat-square)](https://travis-ci.org/chgasparoto/aws-polly-voices)
[![codecov coverage](https://img.shields.io/codecov/c/github/chgasparoto/aws-polly-voices.svg?style=flat-square)](https://codecov.io/gh/chgasparoto/aws-polly-voices)
[![version](https://img.shields.io/npm/v/aws-polly-voices.svg?style=flat-square)](https://www.npmjs.com/package/aws-polly-voices)
[![downloads](https://img.shields.io/npm/dt/aws-polly-voices.svg?style=flat-square)](https://www.npmjs.com/package/aws-polly-voices)
[![style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![quality](https://img.shields.io/lgtm/grade/javascript/g/middyjs/middy.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/chgasparoto/aws-polly-voices/overview/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/chgasparoto/aws-polly-voices/blob/master/LICENSE)

## Getting Started

### Prerequisites

```sh
node -v
node: >= v8.16.1
```

## Installing

#### Using npm
```sh
npm install --save aws-polly-voices
npm i aws-polly-voices
```

#### Using Yarn
```sh
yarn add aws-polly-voices
```

## How to use

#### Importing with Commonjs style

```javascript
const Voices = require('aws-polly-voices')
const voices = new Voices()
```

#### Importing with ES6 modules style

```javascript
import Voices from 'aws-polly-voices'
const voices = new Voices()
```

#### Examples

#### With SINGLE VoiceId
```javascript
const Voices = require('aws-polly-voices')
const voices = new Voices()

const brazilianFemaleVoice = voices.brazilian().female()

// Returns the array with the voice(s) data.
// Depending on the selected language this array can have more than one element.
const voiceData = brazilianFemaleVoice.val

console.log(voiceData)
/**
 [{
  Gender: 'Female',
  Name: 'Vitória',
  LanguageName: 'Brazilian Portuguese',
  Id: 'Vitoria',
  LanguageCode: 'pt-BR'
 }]
 */

// Get the VoiceId.
// If there is only one element in voiceData array then it will return that voiceId.
// Otherwise it will return a random voiceId based on the criteria (chained methods and/or filters).
// See the next example for clarity.
const voiceId = brazilianFemaleVoice.id // Vitoria
```

#### With MULTIPLE VoiceId
```javascript
const Voices = require('aws-polly-voices')
const voices = new Voices()

const englishMaleVoices = voices.english().male()

const voiceData = englishMaleVoices.val
console.log(voiceData)
/**
 [{
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
 */

const voiceId = englishMaleVoices.id // random value: [Matthew, Justin]
const matthew = voiceData[0].Id // Matthew
const justin = voiceData[1].Id // Justin
```

#### Full API reference
Most of the methods are chainable.

```javascript
const Voices = require('aws-polly-voices')
const voices = new Voices()

// available languages by name
// this parameter can be: ['Gender', 'Name', 'LanguageName', 'Id', 'LanguageCode']
// defaults to: LanguageName
const allLanguages = voices.languages()

// available Voice Id
const allVoicesId = voices.languages('Id')

// by language: english
const english = voices.english() || voices.byLang('english')

// by language code: nl-NL
const dutch = voices.dutch() || voice.byLangCode('nl-NL')

// by gender: male || female
const portuguese = voices.portuguese().male() || voices.brazilian().female()

// by voice id
const vitoria = voices.byId('Vitoria')

// reseting the filter
voices.reset()
const portuguese = voices.portuguese().male()

// Helpers for specific languages
const english = voices.english()
const portuguese = voices.portuguese()
const dutch = voices.dutch()
const russian = voices.russian()
const german = voices.german()
const polish = voices.polish()
const turkish = voices.turkish()

// Helpers for specific language and country
const american = voice.american()
const brazilian = voice.brazilian()
const europeanPortuguese = voice.europeanPortuguese()
const british = voices.british()

```

## Running the tests

To run the tests, go to the terminal and enter:

- All tests: `npm run test`
- Watch: `npm run test:watch`

## TODO
- [x] 100% unit test coverage
- [x] Documentation (this file)
- [x] CI/CD with `sematinc-release` integrating with `Travis`, `Github` and `NPM registry`
- [ ] Add support for Typescript
- [x] Implement a helper for `Portugal Portuguese`
- [ ] Implement a helper for `Welsh English`
- [ ] Implement a helper for `Spanish`
- [ ] Implement a helper for `US Spanish`
- [ ] Implement a helper for `Castilian Spanish`
- [ ] Implement a helper for `Mexican Spanish`
- [ ] Implement a helper for `Icelandic`
- [ ] Implement a helper for `Arabic`
- [ ] Implement a helper for `Chinese Mandarin`
- [ ] Implement a helper for `Welsh`
- [ ] Implement a helper for `Swedish`
- [ ] Implement a helper for `Indian English`
- [ ] Implement a helper for `Canadian French`
- [ ] Implement a helper for `Australian English`
- [ ] Implement a helper for `Romanian`
- [x] Implement a helper for `Turkish`
- [ ] Implement a helper for `French`
- [ ] Implement a helper for `Danish`
- [ ] Implement a helper for `Japanese`
- [ ] Implement a helper for `Norwegian`
- [ ] Implement a helper for `Korean`

## Contributing

If you want to collaborate, please feel free. I appreciate any help :)

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/chgasparoto/aws-polly-voices/tags).

## Authors

* **Cleber Gasparoto** - [Profile](https://github.com/chgasparoto)

See also the list of [contributors](https://github.com/chgasparoto/aws-polly-voices/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

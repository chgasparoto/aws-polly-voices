# AWS Polly Voices
:package: Helper module to get AWS polly voices in an idiomatic way :baby_chick:

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
node: v6.0.0
```

## Installing

#### Using npm
```sh
npm install --save aws-polly-voices
```

#### Using Yarn
```sh
yarn add aws-polly-voices
```

## How to use

#### Importing with Commonjs style

```javascript
const voices = require('aws-polly-voices')
```

#### Importing with ES6 modules style

```javascript
import voices from 'aws-polly-voices'
```

#### Examples

#### With SINGLE VoiceId
```javascript
const voices = require('aws-polly-voices')
const brazilianFemaleVoice = voices.brazilian().female()

// Returns the array with the voice(s), depending on the selected language this array can be bigger
// than one element.
const voiceData = brabrazilianFemaleVoice.val

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

// Get the VoiceId. If there is only one element in voiceData array then it will return that
// voiceId otherwise will return a random voiceId based on the criterias.
const voiceId = brazilianFemaleVoice.id // Vitoria
```

#### With MULTIPLE VoiceId
```javascript
const voices = require('aws-polly-voices')
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
Most of methods are chainable.

```javascript
const voices = require('aws-polly-voices')

// available languages by name
const allLanguages = voices.languages()

// by language: english
const english = voices.english() || voices.byLang('english')

// by language code: nl-NL
const dutch = voices.dutch() || voice.byLangCode('nl-NL')

// by gender: male || female
const portuguese = voices.portuguese().male() || voices.brazilian().male()

// by voice id
const vitoria = voices.byId('Vitoria')
```

## Running the tests

To run the tests go to the terminal and enter `npm run test`

## TODO
- [x] 100% unit test coverage
- [x] Documentation (this file)
- [x] CI/CD with `sematinc-release` integrating with `Travis`, `Github` and `NPM registry`

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
export default Voices;

declare interface IVoice {
    Gender: string;
    Name: string;
    LanguageName: string;
    Id: string;
    LanguageCode: string;
  }  

declare class Voices {

    voices: Array<IVoice>;
    original: Array<IVoice>;

    constructor(voices : Array<IVoice>);

    reset() : Voices;

    languages(field : string) : Array<IVoice>;

    byLang(lang : string) : Voices;

    byLangCode(langCode : string) : Voices;

    byGender(gender : string) : Voices;

    byId(id : string) : Voices;

    english() : Voices;
    
    portuguese() : Voices;

    french() : Voices;

    american() : Voices;

    canadianFrench() : Voices;

    americanSpanish() : Voices;

    brazilian() : Voices;

    europeanPortuguese() : Voices;

    british () : Voices;

    dutch () : Voices;

    russian () : Voices;

    turkish () : Voices;

    german () : Voices;

    mexican () : Voices;

    japanese () : Voices;

    danish () : Voices;

    polish () : Voices;

    arabic () : Voices;

    indianEnglish () : Voices;

    norwegian () : Voices;

    swedish () : Voices;

    icelandic () : Voices;

    castilian () : Voices;

    female () : Voices;

    male () : Voices;

    get val() : Array<IVoice>;

    get id() : string;
}


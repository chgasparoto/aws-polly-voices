export default Voices;

declare interface IVoice {
  Gender: string;
  Name: string;
  LanguageName: string;
  Id: string;
  LanguageCode: string;
}  

declare class Voices {

    static voices : Array<IVoice>;
    static original : Array<IVoice>;

    constructor(voices : Array<IVoice>);

    reset() : this;

    languages(field : string) : Array<IVoice>;

    byLang(lang : string) : this;

    byLangCode(langCode : string) : this;

    byGender(gender : string) : this;

    byId(id : string) : this;

    english() : this;
    
    portuguese() : this;

    french() : this;

    american() : this;

    canadianFrench() : this;

    americanSpanish() : this;

    brazilian() : this;

    europeanPortuguese() : this;

    british () : this;

    dutch () : this;

    russian () : this;

    turkish () : this;

    german () : this;

    mexican () : this;

    japanese () : this;

    danish () : this;

    polish () : this;

    arabic () : this;

    indianEnglish () : this;

    welsh () : this;

    norwegian () : this;

    swedish () : this;

    icelandic () : this;

    castilian () : this;

    female () : this;

    male () : this;

    get val() : Array<IVoice>;

    get id() : string;
}


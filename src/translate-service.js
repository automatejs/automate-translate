import { TranslateLoaderService } from './translate-loader';

@automate.service({
    namespace: 'automate',
    key: 'translateService',
    inject: {
        '$loader': TranslateLoaderService
    }
})
export class TranslateService extends automate.Service {
    constructor() {
        super();
        // available languages
        this.availableLanguageKeys = [];
        // current language
        this.currentLanguageKey = '';
        // translation resource
        this.translationTable = {};
        // current language event
        this.languageChanged = new automate.Message();
        this.initialize();
    }

    initialize() {
        var langKey = this.resolveBrowserLanguage();

        if (langKey) {
            this.availableLanguageKeys.push(langKey);
            this.setLocale(langKey);
        }
    }

    resolveBrowserLanguage() {
        var nav = navigator,
            browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
            i,
            language;

        // support for HTML 5.1 "navigator.languages"
        if (automate.isArray(nav.languages)) {
            for (i = 0; i < nav.languages.length; i++) {
                language = nav.languages[i];
                if (language && language.length) {
                    return language;
                }
            }
        }

        // support for other well known properties in browsers
        for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
            language = nav[browserLanguagePropertyKeys[i]];
            if (language && language.length) {
                return language;
            }
        }

        return null;
    }

    getLocale() {
        return this.currentLanguageKey;
    }

    setLocale(langKey) {
        var langKeys = this.getAvailableLanguageKeys();

        if (langKeys.indexOf(langKey) === -1) {
            throw new Error(langKey + 'is not supported');
        }

        this.currentLanguageKey = langKey;

        this.$loader.load(langKey).then(res => {
            this.registerTranslation(langKey, res.data);
            automate.events.refreshView.fire();
        });
    }

    setAvailableLanguageKeys(langKeys) {
        this.availableLanguageKeys = langKeys;
    }

    getAvailableLanguageKeys() {
        return this.availableLanguageKeys;
    }

    getTranslationTable(langKey) {
        if (this.translationTable[langKey] == null) {
            this.translationTable[langKey] = {};
        }
        return this.translationTable[langKey];
    }

    getCurrentTranslationTable() {
        return this.getTranslationTable(this.currentLanguageKey);
    }

    registerTranslation(langKey, obj) {
        var table = this.getTranslationTable(langKey);
        automate.extend(table, obj);
    }

    instant(key) {
        var table = this.getCurrentTranslationTable();

        if (table) {
            return automate.getProperty(table, key);
        }

        return key;
    }
}
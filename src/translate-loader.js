@automate.service({
    namespace: 'automate',
    key: 'translateLoader',
    inject: {
        '$http': 'http'
    }
})
export class TranslateLoaderService extends automate.Service {
    constructor() {
        super();
        this.base = './i18n';
    }

    config(options) {
        if (!options) {
            return;
        }

        this.base = options.base;
    }

    load(langKey) {
        var url = automate.format('{0}/{1}.json', this.base, langKey);
        return this.$http.get(url);
    }
}
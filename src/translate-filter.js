import { TranslateService } from './translate-service';

@automate.filter({
    namespace: 'automate',
    key: 'translate',
    inject: {
        'service': TranslateService
    }
})
class TranslateFilter extends automate.Filter {
    constructor() {
        super();
    }

    transform(value) {
        return this.service.instant(value);
    }
}
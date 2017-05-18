import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ScrapeService {
    private url = 'http://italian-verbs.com/verbi-italiani/coniugazione.php?verbo=3832';

    constructor(private http: Http) { }

    scrapePage(): Promise<any> {
        return this.http.get(this.url)
                    .toPromise()
                    .then(response => console.log(response));
    }

}

import { Http } from "@angular/http";
import { BaseDataService } from "./base_data.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ValuesService extends BaseDataService {

    constructor(http: Http) {
        super(http)
    }

    getValues() {
        return this.http.get('api/test').map(res => res.json()) as Observable<any>;
    }
}
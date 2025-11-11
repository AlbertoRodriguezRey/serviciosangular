import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Coche } from "../models/coche";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";

@Injectable() 
export class ServiceCoches {
    constructor(private _http: HttpClient) {}
    getCochesHttpClient(): Observable<any> {
        let request = "webresources/coches";
        let url = environment.urlApiCoches + request;
        return this._http.get(url);
    }

    getCochesPromise(): Promise<any> {
        let request = "webresources/coches";
        let url = environment.urlApiCoches + request;
        let promise = new Promise((resolve) => {
            fetch(url).then(response => {
                resolve(response.json());
            })
        })
        return promise;
    }

    getCoches(): Promise<Array<Coche>> {
        let request = "webresources/coches";
        let url = environment.urlApiCoches + request;
        const coches = fetch(url).then(response => {
            return response.json();
        });
        return coches;
    }
}


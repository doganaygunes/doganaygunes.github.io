import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ServicesService {
    private mailApi = 'https://mailthis.to/seymagul.gunes@gmail.com'

    constructor(private http: HttpClient) { }

    PostMessage(input: any): Observable<any> {
        return this.http.post(this.mailApi, input, { responseType: 'text' }).pipe(map((response) => {
                if (response) {
                    return response;
                } else {
                    return null;
                }
            },
            (error: any) => {
                return error;
            })
        )
    }

}
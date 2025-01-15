import { Injectable } from '@angular/core';
import { Quote } from '../objects/quote';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class QuoteService {
    constructor(private http: HttpClient) { }
    private apiLocation: string = "/api/quotes"

    getAllQuotes(): Observable<Quote[]> {
        return this.http.get<Quote[]>(this.apiLocation);
    }
}
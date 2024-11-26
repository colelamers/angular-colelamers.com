import { ButtonInfo } from "./buttoninfo";

export interface QuoteInfo {
    quote: string;
    author: string;
}

export interface Quotes{
    specialButton?: ButtonInfo;
    quotesList: QuoteInfo[];
}
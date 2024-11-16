import { Component, inject } from '@angular/core';
import { HomeComponent } from '../home.component';
import { Quote } from '../objects/quote';
import { QuoteService } from '../services/quote.service';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {
  quotesService: QuoteService = inject(QuoteService);
  randomQuote: Quote = { quote: "", author: "" };
  quoteData!: Quote[];

  async ngOnInit(): Promise<void> {

    // Wait for the quotes to be fetched before proceeding
    const quotes = await this.quotesService.getAllQuotes().toPromise();

    // Set the quote data once the quotes are fetched
    if (quotes) {
      this.quoteData = quotes;
    } else {
      // Handle the case when quotes is undefined
      console.error('No quotes found or error retrieving quotes.');
      this.quoteData = []; // Optionally, set to an empty array
    }

    // Now call other methods
    //this.randomQuote = this.randomizeQuote();
    this.GetRandomQuote();
  }

  // Makes an HTML node and appends it to the DOM with 
  // some extra css.
  private randomizeQuote(): Quote {
    let index = Math.floor((Math.random() * this.quoteData.length));
    let currentQuote = this.quoteData[index];
    return currentQuote;
  }

  public GetRandomQuote(): void {
    if (this.randomQuote){
      this.randomQuote = this.randomizeQuote();
    }
    
    //alert('Test message :' + this.randomQuote.author + ' Count :' + this.randomQuote.quote);
  }
}

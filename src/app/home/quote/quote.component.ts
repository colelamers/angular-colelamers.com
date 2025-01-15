import { Component, inject } from '@angular/core';
import { HomeComponent } from '../home.component';
import { Quote } from '../objects/quote';
import { QuoteService } from '../services/quote.service';
import { CommonModule, NgClass } from '@angular/common';
import { Subscription } from 'rxjs';

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
  quoteData: Quote[] = [{quote: "error", author: "error"}];
  isLoading: boolean = true;
  private cachedQuotes!: string | null;
  constructor(){
    this.cachedQuotes = sessionStorage.getItem('quotes');
  }

  ngOnInit():void {
    console.log("Got Session")
    // Check if quotes are already in sessionStorage
    if (this.cachedQuotes) {
      // Use cached data
      console.log("Fetching cache")
      this.quoteData = JSON.parse(this.cachedQuotes);
      this.isLoading = false;
      this.GetRandomQuote();
    } else {
      // Fetch data from the service if not in sessionStorage
      this.quotesService.getAllQuotes().subscribe({
        next: (quotes: Quote[]) => {
          this.isLoading = false;

          if (quotes && quotes.length > 0) {
            this.quoteData = quotes;

            // Store the fetched data in sessionStorage
            sessionStorage.setItem('quotes', JSON.stringify(quotes));

            this.GetRandomQuote(); // Proceed with the random quote
          } else {
            console.error('No quotes found.');
          }
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Error retrieving quotes:', err);
        }
      });
    }
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
    
  }
}

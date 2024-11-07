import { Component, inject } from '@angular/core';
import { HomeComponent } from '../home.component';
import { QuoteInfo, Quotes } from '../objects/quoteInfo';
import { SpecialButtonService } from '../services/specialbutton.service';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {

  quotesService: SpecialButtonService = inject(SpecialButtonService);
  randomQuote!: QuoteInfo;
  quoteData: Quotes[] =
    [
      {
        quotesList: []
      }
    ];

  timeLeft: number = 60;
  
  constructor() {
    this.quoteData = [this.quotesService.quotes];
    this.GetRandomQuote();
    // todo 1; i'd like a timer job here to change the quote like every ten seconds by just pressing the button. seems like it shouldn't be complicated but apparently it is
  }

  /**
  * Makes an HTML node and appends it to the DOM with 
  * some extra css.
  */
  private randomizeQuote(): QuoteInfo {
    let index = Math.floor((Math.random() * this.quoteData[0].quotesList.length));
    let currentQuote = this.quoteData[0].quotesList[index];
    return currentQuote;
  }

  public GetRandomQuote(): void {
    this.randomQuote = this.randomizeQuote();
    //alert('Test message :' + this.randomQuote.author + ' Count :' + this.randomQuote.quote);
  }
}

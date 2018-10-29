import React, { Component } from 'react';
import QuoteList from './QuoteList';

class Quotes extends Component {
  state = {
    filter: 'all',
    quotes: [
      {
        id: 'Leonardo_da_Vinci',
        author: 'Leonardo da Vinci',
        quote: 'Learning never exhausts the mind.',
        category: 'top100'
      },
      {
        id: 'Audrey_Hepburn',
        author: 'Audrey Hepburn',
        quote: "Nothing is impossible, the word itself says 'I'm possible'!",
        category: 'top100'
      },
      {
        id: 'Winston_Churchill',
        author: 'Winston Churchill',
        quote:
          'Success is not final, failure is not fatal: it is the courage to continue that counts.',
        category: 'top100'
      },
      {
        id: 'Pablo_Picasso',
        author: 'Pablo Picasso',
        quote: 'Computers are useless. They can only give you answers.',
        category: 'computers'
      },
      {
        id: 'Steve_Wozniak',
        author: 'Steve Wozniak',
        quote: "Never trust a computer you can't throw out a window.",
        category: 'computers'
      },
      {
        id: 'Norman_Ralph_Augustine',
        author: 'Norman Ralph Augustine',
        quote:
          "One of the most feared expressions in modern times is 'The computer is down.'",
        category: 'computers'
      }
    ]
  };

  setCategory = this.setCategory.bind(this);

  setCategory(event) {
    this.setState({ filter: event.target.name });
  }

  render() {
    const filteredQuotes =
      this.state.filter === 'all'
        ? this.state.quotes
        : this.state.quotes.filter(
            quote => quote.category === this.state.filter
          );

    return (
      <React.Fragment>
        <h1>Top Quotes</h1>
        <QuoteList quotes={filteredQuotes} />
        <input
          className="btn btn-primary"
          style={{ margin: '1em' }}
          type="button"
          name="all"
          value="All"
          onClick={this.setCategory}
        />
        <input
          className="btn btn-primary"
          style={{ margin: '1em' }}
          type="button"
          name="top100"
          value="Top100"
          onClick={this.setCategory}
        />
        <input
          className="btn btn-primary"
          style={{ margin: '1em' }}
          type="button"
          name="computers"
          value="Computers"
          onClick={this.setCategory}
        />
      </React.Fragment>
    );
  }
}

export default Quotes;

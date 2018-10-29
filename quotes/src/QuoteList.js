import React from 'react';
import Quote from './Quote';

function QuoteList(props) {
  return (
    <ul>
      {props.quotes.map(quote => (
        <Quote
          key={quote.id}
          id={quote.id}
          author={quote.author}
          quote={quote.quote}
        />
      ))}
    </ul>
  );
}

export default QuoteList;

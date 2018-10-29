import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class Quotes extends React.Component {
  state = {
    quotes: [
      {
        author: 'Leonardo da Vinci',
        quote: 'Learning never exhausts the mind.',
        category: 'top100'
      },
      {
        author: 'Audrey Hepburn',
        quote: "Nothing is impossible, the word itself says 'I'm possible'!",
        category: 'top100'
      },
      {
        author: 'Winston Churchill',
        quote:
          'Success is not final, failure is not fatal: it is the courage to continue that counts.',
        category: 'top100'
      },
      {
        author: 'Pablo Picasso',
        quote: 'Computers are useless. They can only give you answers.',
        category: 'computers'
      },
      {
        author: 'Steve Wozniak',
        quote: 'Never trust a computer you can't throw out a window.',
        category: 'computers'
      },
      {
        author: 'Norman Ralph Augustine',
        quote: "One of the most feared expressions in modern times is 'The computer is down.'",
        category: 'computers'
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <h1>Top Quotes</h1>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Quotes />, document.getElementById('root'));

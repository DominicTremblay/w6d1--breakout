import React from 'react';

function Quote(props) {
  return (
    <React.Fragment>
      <li>
        <a
          data-toggle="collapse"
          href={'#' + props.id}
          aria-expanded="false"
          aria-controls="collapseExample">
          {props.author}
        </a>
      </li>
      <div className="collapse" id={props.id}>
        <div className="card card-body">
          <p>{props.quote}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Quote;

import React from 'react';

function HomeMessage(props) {
  return(
    <div className="w-60-desktop">
      <div className="mt-3 flex-col-centered">
        <h1 className="general-title m-3">Welcome to my online CV / Folio</h1>
        <div className="text-content m-3">
          <p>
            This page contains a game (still in development phase) which is meant to present me in a later version.
            <br/><i>Be noticed that the first time you will load the game, it might take a long time.</i>
          </p>
          <p>If you're not interested by the game, you may find relevant informations in the other sections of the website.</p>
          <p>The website itself is still in development phase so feel free to come back and see the changes from time to time.</p>
        </div>
        <button className="button m-3 is-primary is-rounded" onClick={props.handleClick}>Launch the game</button>
      </div>
    </div>
  );
}

export default HomeMessage;
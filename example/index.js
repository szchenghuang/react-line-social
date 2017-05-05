'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Share, Friend, Like } from '../';

window.onload = () => {
  ReactDOM.render(
    <div>
      <div>
        <h3>Share</h3>
        <Share url="https://media.line.me" />
      </div>
      <div>
        <h3>Friend</h3>
        <Friend lineid="@lineteamjp" /><br />
        <Friend lineid="@lineteamjp" count /><br />
        <Friend lineid="@lineteamjp" home /><br />
        <Friend lineid="@lineteamjp" count home />
      </div>
      <div>
        <h3>Like</h3>
        <Like url="https://media.line.me" /><br />
        <Like url="https://media.line.me" share /><br />
        <Like url="https://media.line.me" lineid="@lineteamjp" />
      </div>
    </div>,
    document.querySelector( '#container' )
  );
};

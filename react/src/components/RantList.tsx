import React, { Component } from 'react';
import Rant from './elements/Rant';

export default class RantList extends Component {
  render() {
    return (
      <div className="post-list">
        <Rant
          rantBody="Hello world"
          rantCommentCount={23}
          rantLikeCount={100}
          rantTime={2}
        />
      </div>
    );
  }
}

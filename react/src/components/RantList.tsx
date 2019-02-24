import React, { Component } from 'react';
import Rant from './elements/Rant';

interface RantListProps {
  rants: any[];
  openDetail: any;
}
interface RantListState {}

export default class RantList extends Component<RantListProps, RantListState> {
  constructor(props: RantListProps) {
    super(props);
  }

  render() {
    return (
      <div className="post-list">
        {this.props.rants.map(post => {
          return (
            <Rant
              key={post.id}
              rantId={post.id}
              rantMyVote={post.myVote}
              rantBody={post.content}
              rantCommentCount={post.commentCount}
              rantLikeCount={post.votes}
              rantTime={post.displayTime}
              openDetail={this.props.openDetail}
            />
          );
        })}
      </div>
    );
  }
}

import React, { Component } from 'react';

interface RantProps {
  rantBody: string;
  rantLikeCount: number;
  rantTime: string;
  rantCommentCount: number;
  rantMyVote: number;
}

interface RantState {}

export default class Rant extends Component<RantProps, RantState> {
  constructor(props: RantProps) {
    super(props);
  }

  render() {
    return (
      <article className="post">
        <div className="post__inner">
          <div className="score">
            {/* TODO: increase counter */}
            <div
              className={
                this.props.rantMyVote === 1
                  ? 'score__up layout--center checked'
                  : 'score__up layout--center'
              }
            >
              ++
            </div>

            <div className="score__board layout--center">
              {this.props.rantLikeCount}
            </div>

            {/* TODO: decrease counter */}
            <div
              className={
                this.props.rantMyVote === -1
                  ? 'score__down layout--center checked'
                  : 'score__down layout--center'
              }
            >
              --
            </div>
          </div>

          <div className="post__body">{this.props.rantBody}</div>
        </div>
        <div className="post__footer">
          <div className="post__time">{this.props.rantTime}</div>
          <div className="post__comments">
            <svg className="icon" viewBox="0 0 31 32">
              <path
                d="M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781 
                          0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657 
                          8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0 
                          3.922-2.61 7.23-6.186 8.294z"
              />
            </svg>
            {this.props.rantCommentCount}
          </div>
        </div>
      </article>
    );
  }
}

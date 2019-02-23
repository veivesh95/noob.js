import React, { Component } from 'react';

interface RantDetailsPageProps {
  id: number;
}
interface RantDetailsPageState {
  isLoading: boolean;
}

export default class RantDetailsPage extends Component<
  RantDetailsPageProps,
  RantDetailsPageState
> {
  state: RantDetailsPageState = {
    isLoading: true
  };
}

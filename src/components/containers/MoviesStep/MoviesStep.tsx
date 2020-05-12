
import React, { Component } from 'react';
import { Logo } from '../../presentationals';

interface IProps {
  currentStep: number;
}

class MoviesStep extends Component<IProps> {
  render() {
    return (
      <div>
        <Logo />
        MoviesStep
      </div>
    );
  }
}

export default MoviesStep;

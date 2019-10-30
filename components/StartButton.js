import React from 'react';
import { Button } from 'react-native';

export default class StartButton extends React.Component {
  state = {
    gettingLocation: false
  };

  render() {
    return (
      <Button
        onPress={this.handlePress}
        title={this.state.gettingLocation ? 'STOP' : 'START'}
        color="blue"
      />
    );
  }

  handlePress = () => {
    const { _watchPosition, location } = this.props;
    this.setState(
      currentState => {
        return { gettingLocation: !currentState.gettingLocation };
      },
      () => {
        if (this.state.gettingLocation) {
          _watchPosition();
        } else {
          location.remove();
        }
      }
    );
  };
}

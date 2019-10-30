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

  handlePress = () => {};
}

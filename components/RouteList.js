import React, { Component } from 'react';
import { View } from 'react-native';
import * as api from '../api';
import RouteCard from './RouteCard';

class RouteList extends Component {
  state = {
    routes: []
  };
  render() {
    return (
      <View>
        {this.state.routes.map(route => {
          return <RouteCard key={route.route_id} route={route} />;
        })}
      </View>
    );
  }
  componentDidMount() {
    this.fetchRouteList();
  }
  async fetchRouteList() {
    try {
      const routes = await api.getRoutes();
      this.setState({ routes });
    } catch (err) {
      console.log(err);
    }
  }
}

export default RouteList;

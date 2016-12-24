import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './components/header';
import AlbumList from './components/album-list';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
          <Header headerTitle={'Albums'} />
          <AlbumList />
      </View>
    );
  }
}

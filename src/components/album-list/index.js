import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from '../album-detail';

export default class AlbumList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            albums: [],
        };
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => this.setState({ albums: res.data }));
    }

    renderAlbums() {
        return this.state.albums.map(a => <AlbumDetail album={a} key={a.title} />);
    }

    render() {
        return (
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
        );
    }
}

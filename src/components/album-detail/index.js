import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from '../card';
import CardSection from '../card-section';
import Button from '../button';

const AlbumDetail = ({ album }) => {
    const { thumbnail_image, title, artist, image, url } = album;
    const {
        thumbnailStyle,
        headerContent,
        thumbnailContainer,
        headerTextStyle,
        imageStyle,
    } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainer}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContent}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <Button buttonPressed={() => Linking.openURL(url)} >
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    imageStyle: {
        flex: 1,
        width: null,
        height: 300,
    }
};

export default AlbumDetail;

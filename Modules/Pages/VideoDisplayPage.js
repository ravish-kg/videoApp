import React, { Component } from 'react';
import { View } from 'react-native';
import Camera from '../Commons/Camera';
import CardComponent from '../Commons/CardComponent';

class VideoDisplayPage extends Component {
    constructor(props) {
        super(props);
    }

    onRecordStart = () => {
        // TODO: CALLBACK IMPLEMENT
    }

    getRecordData = (data) => {
        // TODO: CALLBACK IMPLEMENT
        console.log(data);
    }

    onRecordEnd = () => {
        // TODO: CALLBACK IMPLEMENT
    }

    render() {
        return (
            <View
                style={{
                    flexDirection: "column",
                    height: '100%',
                }}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                }}>
                    <CardComponent>
                        <Camera
                            onRecordStart={this.onRecordStart}
                            getRecordData={this.getRecordData}
                            onRecordEnd={this.onRecordEnd}
                        />
                    </CardComponent>
                </View>
            </View>
        )
    }
}

export default VideoDisplayPage;
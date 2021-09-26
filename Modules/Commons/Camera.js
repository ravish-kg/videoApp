'use strict';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";
import { Button } from 'react-native-elements';
import { padding24, borderRadius10, borderRadius25, borderRadius5, margin16, padding16, padding8, startColor, stopColor, CameraReverse, AlbumIcon, backgroundWhite } from '../constants';

export default class Camera extends Component {
    constructor() {
        super()
        this.state = {
            cameraType: RNCamera.Constants.Type.back,
            startedRecording: false,
            uri: null,
        }
    }

    render() {
        const { cameraType, startedRecording, uri } = this.state;
        const { onRecordStart } = this.props;

        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={cameraType}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    defaultVideoQuality={RNCamera.Constants.VideoQuality['480p']}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        console.log(barcodes);
                    }}
                    onCameraReady={() => console.log("Camera Ready")}
                    onRecordingStart={onRecordStart}
                />
                <View style={styles.actionContainer}>
                    <TouchableOpacity onPress={this.endVideo} style={styles.button}>
                        <AlbumIcon />
                    </TouchableOpacity>
                    {!startedRecording ? (
                        < Button
                            title="Go Live"
                            type="solid"
                            onPress={this.startRecord}
                            buttonStyle={styles.startButton}
                            titleStyle={{
                                fontWeight: 'bold'
                            }}
                        />
                    ) : (
                        <Button
                            title="Stop"
                            type="solid"
                            onPress={this.endVideo}
                            buttonStyle={styles.stopButton}
                            titleStyle={{
                                fontWeight: 'bold'
                            }}
                        />
                    )}
                    <TouchableOpacity onPress={this.changeCameraType} style={styles.button}>
                        <CameraReverse />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    changeCameraType = () => {
        const { cameraType } = this.state;

        if (cameraType === RNCamera.Constants.Type.back) {
            this.setState({
                cameraType: RNCamera.Constants.Type.front
            });
        } else {
            this.setState({
                cameraType: RNCamera.Constants.Type.back
            });
        }
    }

    startRecord = async () => {
        console.log("In start record");
        const options = { quality: 0.5, base64: true };
        this.setState({
            startedRecording: true
        });
        if (this.camera) {
            const { uri, codec = "mp4" } = await this.camera.recordAsync(options)
                .then((data) => {
                    console.log(data);
                    CameraRoll.save(data.uri);
                    this.props.getRecordData(data);
                    return data;
                })
                .catch(err => {
                    console.log(err);
                    throw error;
                });
        }
    }

    endVideo = () => {
        console.log("In end record");
        this.setState({
            startedRecording: false
        });
        this.camera.stopRecording();
        this.props.onRecordEnd();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: borderRadius10
    },
    capture: {
        flex: 0,
        backgroundColor: backgroundWhite,
        borderRadius: borderRadius5,
        padding: padding16,
        paddingHorizontal: padding16,
        alignSelf: 'center',
        margin: margin16,
    },
    button: {
        flex: 0.33,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: padding8
    },
    stopButton: {
        width: "80%",
        backgroundColor: stopColor,
        borderRadius: borderRadius25,
        padding: padding8,
        alignSelf: 'center',
        margin: 'auto'
    },
    startButton: {
        width: "80%",
        backgroundColor: startColor,
        borderRadius: borderRadius25,
        padding: padding8,
        alignSelf: 'center',
        margin: 'auto',
    },
    actionContainer: {
        flex: 0, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        padding: padding24
    }
});
import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Header from '../Commons/Header';
import { Button } from 'react-native-elements';
import { padding16, borderRadius50, borderRadius10, getStarted, welcomeHeader, RightCircle, welcomeImage, buttonBlueColor, backgroundColor } from '../constants';

class WelcomePage extends Component {
    constructor(props) {
        super(props);
    }

    onPress = (event) => {
        this.props.navigation.navigate('GoLive', { name: 'Go Live' })
    }

    render() {

        return (
            <View
                style={styles.parentView}
            >
                <View style={{
                    flex: 0.9,
                    justifyContent: 'center'
                }}>
                    <Image
                        source={welcomeImage}
                        style={styles.imageContainer}
                    />
                    <Header title={welcomeHeader} />
                </View>
                <View style={{
                    flex: 0.1,
                }}>
                    <Button
                        title={getStarted}
                        type="outline"
                        onPress={this.onPress}
                        buttonstyle={styles.buttonContainer}
                        titleStyle={{
                            fontWeight: 'bold'
                        }}
                        icon={
                            <RightCircle />
                        }
                        iconRight
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentView: {
        flexDirection: "column",
        height: "100%",
        padding: padding16,
        backgroundColor: backgroundColor
    },
    imageContainer: {
        width: 150, 
        height: 150, 
        borderRadius: borderRadius50,
        alignSelf: 'center', 
        backgroundColor: backgroundColor
    },
    buttonContainer: {
        width: "80%",
        color: buttonBlueColor,
        borderRadius: borderRadius10,
        alignSelf: 'center'
    }
});

export default WelcomePage;
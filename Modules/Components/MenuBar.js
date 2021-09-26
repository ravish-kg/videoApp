import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../Commons/Header';

class MenuBar extends Component {

    render() {

        return(
            <View style={{
                flexDirection: 'row',
                margin: 'auto',
                padding: 16
            }}>
                <Header name="Welcome to Video Demo App"></Header>
            </View>
        );
    }
}

export default MenuBar;
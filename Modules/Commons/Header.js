import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { fontSize32, padding16 } from '../constants';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title } = this.props;

        return(
           <Text style={{
               fontSize: fontSize32,
               fontWeight: 'bold',
               textAlign: 'center',
               paddingTop: padding16,
               paddingBottom: padding16
           }}>
            {title || 'Header'}
           </Text>
        );
    }
}

export default Header;
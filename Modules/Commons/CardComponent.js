import React, { Component } from 'react';
import { View } from 'react-native';
import { borderRadius10, cardBackgroundColor, margin16 } from '../constants';

class CardComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;

        return(
           <View style={{
               backgroundColor: cardBackgroundColor,
               borderRadius: borderRadius10,
               height: '100%',
               marginVertical: margin16
           }}>
            {children}
           </View>
        );
    }
}

export default CardComponent;
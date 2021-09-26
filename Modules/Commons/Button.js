import React, { Component } from 'react';
import { Button } from 'react-native-elements';

class CustomButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, onClick, type } = this.props;

        return (
            <Button
                title={title}
                type={type}
                onPress={onClick}
                style={{
                    width: "100%",
                }}
                iconRight
            />
        );
    }
}

export default CustomButton;
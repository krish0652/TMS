import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header } from "react-native-elements/dist/header/Header";
import { headerStyles } from "../../styles/components/structure/headerComponent.styles";

class HeaderComponent extends Component {
    render() {
        return (
            <View style={headerStyles.container}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={{ text: 'My Tenant', style: { color: '#fff', fontSize: 18, fontWeight: 'bold' } }}
                    rightComponent={{ icon: 'bell', color: '#fff', type: 'font-awesome' }}
                />
            </View>
        )
    }
}

export default HeaderComponent
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { headerStyles } from "../../styles/components/structure/headerComponent.styles";

class HeaderComponent extends Component {
    render() {
        return (
            <View style={headerStyles.container}>
                <View style={headerStyles.row}>
                    <View style={headerStyles.headerText}>
                        <Text style={headerStyles.headerParts}>My Tenant</Text>
                    </View>
                    <View style={headerStyles.help}>
                        <Text style={headerStyles.footerText}>
                            <FontAwesomeIcon icon="phone" />
                            <Text>+91 - XXX-XXXX-XXXX</Text>
                        </Text>
                        <Text style={headerStyles.footerText}>test@dummy.com</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default HeaderComponent
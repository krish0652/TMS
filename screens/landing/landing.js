import React, { Component } from "react";
import { ImageBackground, Text, View } from "react-native";
import LoginComponent from "../../components/session/loginComponent";
import { commonStyles } from "../../styles/common/common.styles";
import { landingStyles } from "../../styles/components/screens/landing.screen.style";

class LandingScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: 'login'
        }
    }

    render() {
        const banner = { uri: "./assets/home-interior.png" };
        return(
            <View style={[commonStyles.container, landingStyles.container]}>
                <View style={landingStyles.advContainer}>
                    <Text>1.</Text>
                    <Text>1.</Text>
                    <Text>1.</Text>
                    <Text>1.</Text>
                    <Text>1.</Text>
                    
                </View>
                <View style={landingStyles.loginContainer}>
                    <LoginComponent/>
                </View>
            </View>
        )
    }
};

export default LandingScreen;
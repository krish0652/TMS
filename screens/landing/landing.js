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
        return(
            <View style={landingStyles.container}>
                <ImageBackground source={require( "../../assets/home-interior.jpeg")} resizeMode="cover" style={landingStyles.image} imageStyle= 
{landingStyles.imageStyle}>
                    <Text style={landingStyles.header}>My Tenant</Text>
                    <LoginComponent/>
                </ImageBackground>
            </View>
        )
    }
};

export default LandingScreen;
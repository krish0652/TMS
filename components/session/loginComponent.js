import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { appColors } from "../../styles/common/appColors.styles";
import { loginStyles } from "../../styles/components/session/login.component.style";

class LoginComponent extends Component {
    render() {
        return (
            <View style={loginStyles.container}>
                <View style={loginStyles.mobileNumberContainer}>
                    <Text style={loginStyles.header}>Login / Signup</Text>
                    <Text style={loginStyles.label}>Mobile Number</Text>
                    <TextInput
                        style={loginStyles.inputText}
                        placeholder={"XXX-XXX-XXXX"}
                    />
                    <View style={loginStyles.button}>
                        <Button
                            color={'trasparent'}
                            title={"Get OTP"}
                        />
                    </View>
                    <Text style={loginStyles.disclaimar}>
                        By clicking on "get otp" button you have agreed on the terms and conditions of using the app. And have authorized TMS to use your aadhar card to verify your identity
                    </Text>
                </View>
            </View>
        )
    }
}

export default LoginComponent;
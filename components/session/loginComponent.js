import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { appColors } from "../../styles/common/appColors.styles";
import { loginStyles } from "../../styles/components/session/login.component.style";

class LoginComponent extends Component {
    render() {
        return (
            <View>
                <Text style={loginStyles.header}>Login</Text>
                <View style={loginStyles.mobileNumberContainer}>
                    <Text style={loginStyles.label}>Mobile Number</Text>
                    <TextInput
                        style={loginStyles.inputText}
                        placeholder={"XXX-XXX-XXXX"}
                    />
                    <View style={loginStyles.button}>
                        <Button
                            color={appColors.primaryBtn}
                            title={"Get OTP"}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export default LoginComponent;
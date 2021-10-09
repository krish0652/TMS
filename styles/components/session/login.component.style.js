import { StyleSheet } from "react-native";
import { appColors } from "../../common/appColors.styles";

export const loginStyles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        paddingVertical: 20,
        fontSize: 20,
        textAlign: 'center'
    },
    mobileNumberContainer: {
        paddingHorizontal: 20
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    inputText: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: appColors.lightGray,
        fontWeight: 'bold'
    },
    button: {
        marginVertical: 20
    }
})
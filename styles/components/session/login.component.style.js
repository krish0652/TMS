import { Dimensions, StyleSheet } from "react-native";
import { appColors } from "../../common/appColors.styles";

export const loginStyles = StyleSheet.create({
    container: {
    }, 
    header: {
        fontWeight: 'bold',
        paddingTop: 20,
        paddingBottom: 50,
        fontSize: 20,
        textAlign: 'center'
    },
    mobileNumberContainer: {
        paddingHorizontal: 20,
        backgroundColor: appColors.white,
        position: 'absolute',
        top: 200,
        width: '90%',
        padding: 20,
        borderRadius: 10,
        border: 1,
        borderColor: appColors.lightGray,
        marginHorizontal: 20,
        zIndex: 1,
        elevation: 7
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
        marginVertical: 20,
        borderRadius: 10,
        padding: 5,
        backgroundColor: appColors.primary
    },
    disclaimar: {
        paddingVertical: 20,
        fontSize: 10
    }
})
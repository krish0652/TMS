import { Dimensions, StyleSheet } from "react-native";
import { appColors } from "../../common/appColors.styles";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const landingStyles = StyleSheet.create({    
    container: {    
        flex: 1
    },
    loginContainer: {
        width: 300,
        alignSelf: 'flex-end',
        position: 'absolute',
        top: 10,
        marginRight: 100,
        marginTop: 40,
        height: 230,
        borderColor: appColors.lightGray,
        borderRadius: 5,
        opacity: 0.9,
        backgroundColor: '#F8F8F8',
    },
    advContainer: {
        alignSelf: 'flex-start',
        position: "absolute",
        top: 200,
        left: 200
    }
    
})
import { Dimensions, StyleSheet } from "react-native";
import { appColors } from "../../common/appColors.styles";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const landingStyles = StyleSheet.create({    
    container: {        
        border: 1,
        borderColor: appColors.lightgray,
        backgroundColor: appColors.primary,
        height: Dimensions.get('screen').height
    },
    header: {
        fontSize: 30,
        position: 'absolute',
        top: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        width: Dimensions.get('screen').width,
        color: appColors.white
    },
    image: {
        height: 300,
        width: Dimensions.get('screen').width,
        aspectRatio: 1
    },
    imageStyle:{
        opacity: 0.5
    }
    
})
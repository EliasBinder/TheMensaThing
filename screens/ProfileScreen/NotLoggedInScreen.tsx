import {View, StyleSheet, Text} from "react-native";
import {globalColors, globalStyles} from "../../util/StyleUtil";
import {scale} from "../../util/ScaleUtil";
import {Button} from "../../components/Button";

export function NotLoggedInScreen({navigation}: {navigation: any}) {
    return (
        <View style={[globalStyles.container, styles.container]}>
            <Text style={styles.message}>Please log in to use all the features of this app</Text>
            <Button text={'Login'} onPress={() => {
                navigation.navigate('Login');
            }} style={styles}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: scale(20),
        paddingRight: scale(20)
    },
    message: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: scale(24),
        textAlign: 'center',
    },
    button: {
        marginTop: scale(70),
        backgroundColor: globalColors.secondary,
    }
})

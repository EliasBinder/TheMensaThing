import {View, StyleSheet, Text, TextInput, ScrollView} from "react-native";
import {globalColors, globalStyles} from "../util/StyleUtil";
import StackNavigationHeader from "../components/StackNavigationHeader";
import {BigButton} from "../components/BigButton";
import {scale} from "../util/ScaleUtil";

export function LoginScreen({navigation, route}:{navigation: any, route: any}) {
    return (
        <>
            <StackNavigationHeader title={"Login"} navigation={navigation} route={route}/>
            <View style={[globalStyles.container, styles.content]}>
                <ScrollView style={styles.oBox} contentContainerStyle={styles.oBoxContent}>
                    <View style={[styles.box]}>
                        <TextInput style={globalStyles.input} placeholder={"E-Mail"} placeholderTextColor={"#fff"} />
                        <TextInput style={[globalStyles.input, {marginTop: 20}]} secureTextEntry={true} placeholder={"Password"} placeholderTextColor={"#fff"} />
                        <BigButton text={"Login"} onPress={() => {}} style={styleBtnLogin} />
                        <Text style={styles.regDesc}>Don't have an account?</Text>
                        <BigButton text={"Sign Up"} onPress={() => {}} style={styleBtnRegister} />
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    oBox: {
        alignSelf: 'stretch',
    },
    oBoxContent: {
        minHeight: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    box: {
        flex: 1,
        flexDirection: 'column',
        maxWidth: 500,
        width: '80%',
        height: 'auto',
        justifyContent: "center",
        alignItems: "center"
    },
    regDesc: {
        color: '#fff',
        fontFamily: 'Poppins',
        fontSize: 18,
        marginTop: scale(70),
    }
})

const styleBtnLogin = StyleSheet.create({
    button: {
        marginTop: 20,
        width: '100%',
    }
})

const styleBtnRegister = StyleSheet.create({
    button: {
        marginTop: 10,
        width: '100%',
        backgroundColor: globalColors.tertiary,
    }
})

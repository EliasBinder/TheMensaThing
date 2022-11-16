import {Pressable, StyleSheet, Text, View} from "react-native";
import {globalStyles} from "../util/StyleUtil";
import ArrowLeft from "../assets/images/arrowLeft";

export function StackNavigationHeader({title, navigation, route}: {title: string, navigation: any, route: any}) {
    return (
        <View style={[globalStyles.container, styles.container]}>
            <Pressable onPress={() => navigation.goBack()}>
                <ArrowLeft color={'#fff'} dim={50} />
            </Pressable>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    )
}

export default StackNavigationHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: "flex-start",
        maxHeight: 80,
        backgroundColor: '#081D40'
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontFamily: 'Poppins_Bold',
        fontWeight: 'bold',
        marginLeft: 20
    }
})

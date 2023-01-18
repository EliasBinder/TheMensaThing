import {Pressable, StyleSheet, Text, View} from "react-native";
import {globalColors, globalStyles} from "../util/StyleUtil";
import {Icon} from "./Icon";

export function StackNavigationHeader({title, navigation, route}: {title: string, navigation: any, route: any}) {
    return (
        <View style={[globalStyles.container, styles.container]}>
            <Pressable onPress={() => navigation.goBack()}>
                <Icon name={"arrow_left"} color={'#fff'} size={50} />
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
        backgroundColor: globalColors.secondary
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontFamily: 'Poppins_Bold',
        fontWeight: 'bold',
        marginLeft: 20
    }
})

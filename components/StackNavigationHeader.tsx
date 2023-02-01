import {Pressable, StyleSheet, Text, View} from "react-native";
import {globalColors, globalStyles} from "../util/StyleUtil";
import {Icon} from "./Icon";

interface propType {
    title: string,
    navigation: any
}

export function StackNavigationHeader({title, navigation}: propType) {
    return (
        <View style={[globalStyles.container, styles.container]}>
            <Pressable onPress={() => navigation.goBack()}>
                <Icon name={"arrow_back"} color={'#fff'} size={45}/>
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
        paddingLeft: 10,
        paddingRight: 10,
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

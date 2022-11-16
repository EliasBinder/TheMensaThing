import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {globalStyles} from "../../util/StyleUtil";
import {scale} from "../../util/ScaleUtil";
import StarIcon from "../../assets/images/star";
import LeafIcon from "../../assets/images/leaf";
import PinIcon from "../../assets/images/pin";
import ShareIcon from "../../assets/images/share";
import React from "react";
import ToggleIcon from "../../assets/images/toggle";
import {BigButton} from "../BigButton";

export function Settings() {

    const [shareGPS, setShareGPS] = React.useState(true);

    const createMenuItem = (title: string, icon: any, onPress: () => void, rightComp?: any) => {
        return (
            <TouchableOpacity style={styles.menuItem} onPress={onPress}>
                {icon}
                <Text style={styles.menuItemText}>{title}</Text>
                {rightComp}
            </TouchableOpacity>
        )
    }

    const createDivider = () => {
        return <View style={styles.dividerContainer}>
            <View style={styles.divider}/>
        </View>
    }

    const Toggle = () => {
        return (
            <TouchableOpacity>
                {shareGPS ?
                    (<ToggleIcon color={'#3AF90A'} dim={30} orient={0} />) :
                    (<ToggleIcon color={'#F93A3A'} dim={30} orient={180} />)
                }
            </TouchableOpacity>
        )
    }



    return (
        <View style={globalStyles.container}>
            <View style={styles.listContainer}>
                {createMenuItem('Preferred Dishes', <StarIcon color={'#fff'} dim={30}/>, () => {})}
                {createDivider()}
                {createMenuItem('Eating Habits', <LeafIcon color={'#fff'} dim={30}/>, () => {})}
                {createDivider()}
                {createMenuItem('Location', <PinIcon color={'#fff'} dim={30}/>, () => {})}
                {createDivider()}
                {createMenuItem('Share GPS Location', <ShareIcon color={'#fff'} dim={30}/>, () => {setShareGPS(s => !s)}, <Toggle />)}
            </View>
            <BigButton text={'Logout'} onPress={() => {}} style={styles}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: scale(20),
        paddingRight: scale(20)
    },
    listContainer: {
        width: scale(400),
        backgroundColor: '#081D40',
        borderRadius: 15,
        flexDirection: 'column',
        justifyContent: "flex-start",
        paddingTop: scale(20),
        paddingBottom: scale(20),
    },
    menuItem: {
        flexDirection: 'row',
        paddingLeft: scale(25),
        paddingRight: scale(25),
    },
    menuItemText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins_SemiBold',
        fontSize: 20,
        marginLeft: scale(18),
        marginRight: 'auto',
    },
    dividerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    divider: {
        backgroundColor: '#040F21',
        height: 2,
        width: '90%',
        marginTop: scale(20),
        marginBottom: scale(20),
    },
    button: {
        marginTop: scale(70),
        backgroundColor: '#081D40',
    }
})

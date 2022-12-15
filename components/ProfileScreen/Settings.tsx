import {StyleSheet, View, Text, TouchableOpacity, Image} from "react-native";
import {globalColors, globalStyles} from "../../util/StyleUtil";
import {scale} from "../../util/ScaleUtil";
import StarIcon from "../../assets/images/star";
import LeafIcon from "../../assets/images/leaf";
import PinIcon from "../../assets/images/pin";
import ShareIcon from "../../assets/images/share";
import React, {useEffect, useState} from "react";
import ToggleIcon from "../../assets/images/toggle";
import {BigButton} from "../BigButton";
import {List} from "../List";
import {AZURE_INSTANCE} from "../../util/AuthUtil";

const createMenuItem = (title: string, icon: any, onPress: () => void, rightComp?: any) => {
    return (
        <TouchableOpacity style={styles.menuItem} onPress={onPress}>
            {icon}
            <Text style={styles.menuItemText}>{title}</Text>
            {rightComp}
        </TouchableOpacity>
    )
}

export function Settings({navigation, route}: {navigation: any, route: any}) {

    const [shareGPS, setShareGPS] = React.useState(true);
    const [imageSource, setImageSource] = React.useState({
        uri: placeholder,
        method: 'GET',
        headers: {}
    });

    useEffect(() => {
        AZURE_INSTANCE.getUserInfo().then((info) => {
            setImageSource({
                uri: info.ImageUrl,
                method: 'GET',
                headers: {
                    // @ts-ignore //TODO
                    Authorization: 'Bearer ' + AZURE_INSTANCE.getToken().accessToken
                }
            })
        });
    }, []);

    const Toggle = () => {
        return (
            <TouchableOpacity onPress={() => setShareGPS(s => !s)}>
                {shareGPS ?
                    (<ToggleIcon color={'#3AF90A'} dim={30} orient={90} />) :
                    (<ToggleIcon color={'#F93A3A'} dim={30} orient={270} />)
                }
            </TouchableOpacity>
        )
    }

    const listItems = [
        createMenuItem('Preferred Dishes', <StarIcon color={'#fff'} dim={30}/>, () => {navigation.navigate('PreferredDishes')}),
        createMenuItem('Eating Habits', <LeafIcon color={'#fff'} dim={30}/>, () => {navigation.navigate('EatingHabits')}),
        createMenuItem('Location', <PinIcon color={'#fff'} dim={30}/>, () => {navigation.navigate('Location')}),
        createMenuItem('Share GPS Location', <ShareIcon color={'#fff'} dim={30}/>, () => {setShareGPS(s => !s)}, <Toggle />)
    ]

    return (
        <View style={globalStyles.container}>
            <View style={styles.profileImgContainer}>
                <Image style={{width: 100, maxWidth: 100}} source={imageSource}/>
            </View>
            <List items={listItems} />
            <BigButton text={'Logout'} onPress={() => {}} style={styles}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: scale(20),
        paddingRight: scale(20)
    },
    profileImgContainer: {
        width: '100%',
    },
    listContainer: {
        width: scale(400),
        backgroundColor: globalColors.secondary,
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
        backgroundColor: globalColors.primary,
        height: 2,
        width: '90%',
        marginTop: scale(20),
        marginBottom: scale(20),
    },
    button: {
        marginTop: scale(10),
        marginBottom: scale(65),
        backgroundColor: globalColors.secondary,
    }
})

const placeholder = 'data:image/png;base64,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';


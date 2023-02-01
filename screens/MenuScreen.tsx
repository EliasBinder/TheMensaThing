import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View, Text} from "react-native";
import {Card} from "../components/Card";
import {Header} from "../components/Header";
import {globalColors, globalStyles} from "../util/StyleUtil";
import {scale} from "../util/ScaleUtil";
import {DishItem} from "../components/MenuScreen/DishItem";
import {Icon} from "../components/Icon";
import {useMenu} from "../hooks/useMenu";
import {usePreferredLocation} from "../hooks/usePreferredLocation";

export function MenuScreen(){

    const [location, setLocation] = usePreferredLocation();
    const [menu, setMenu] = useMenu("BZ");

    useEffect(() => {
        setMenu(location)
    }, [location]);

    return (
        <View style={globalStyles.container}>
            <Header title={"Menu"} icon={
                <Icon name={"profile"} color={"#fff"} size={48} />
            }/>

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewInner}>
                <View style={globalStyles.cardRow}>
                    <Card
                        title={"First courses"}
                        icon={<Icon name={"menu"} color={"#fff"} size={25} />}
                        index={0}
                        interaction={
                            <TouchableOpacity style={{marginLeft: 'auto'}} onPress={() => console.log("TODO")/* TODO */}>
                                <Icon name={"arrow_right"} color={"#fff"} size={22} />
                            </TouchableOpacity>}
                    >
                        {
                            menu ?
                                menu.firstCourses.slice(0, 3).map((item, index) => {
                                    return <DishItem key={index} iconUrl={item.imageUrl} title={item.name} eatingHabitsAttribs={[2,4]} />
                                })
                            :
                                <Text>Loading...</Text>
                        }
                    </Card>
                </View>
                <View style={[globalStyles.cardRow, {marginTop: 20}]}>
                    <Card
                        title={"Main courses"}
                        icon={<Icon name={"menu"} color={"#fff"} size={25} />}
                        index={0}
                        interaction={
                            <TouchableOpacity style={{marginLeft: 'auto'}} onPress={() => console.log("TODO")/* TODO */}>
                                <Icon name={"arrow_right"} color={"#fff"} size={22} />
                            </TouchableOpacity>}
                    >
                        {
                            menu ?
                                menu.mainCourses.slice(0, 3).map((item, index) => {
                                    return <DishItem key={index} iconUrl={item.imageUrl} title={item.name} eatingHabitsAttribs={[2,4]} />
                                })
                            :
                                <Text>Loading...</Text>
                        }
                    </Card>
                </View>
                <View style={[globalStyles.cardRow, {marginTop: 20}]}>
                    <Card
                        title={"Pizza"}
                        icon={<Icon name={"pin"} color={"#fff"} size={25} />}
                        index={0}
                    >
                    </Card>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalColors.primary,
        flex: 1
    },
    scrollView: {
        backgroundColor: globalColors.primary,
        flex: 1
    },
    scrollViewInner: {
        justifyContent: "flex-start",
        alignItems: "center",
        paddingBottom: scale(30),
        alignSelf: "stretch"
    },
    cardRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        paddingHorizontal: scale(30),
    }
});

const showMoreBtnStyles = StyleSheet.create({
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
        width: scale(230),
        height: scale(45),
        backgroundColor: globalColors.tertiary,
    },
    buttonText: {
        fontSize: 20
    }
});

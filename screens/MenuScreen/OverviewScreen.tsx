import {usePreferredLocation} from "../../hooks/usePreferredLocation";
import {useMenu} from "../../hooks/useMenu";
import React, {useEffect} from "react";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {globalColors, globalStyles} from "../../util/StyleUtil";
import {Icon} from "../../components/Icon";
import {Card} from "../../components/Card";
import {DishItem} from "../../components/MenuScreen/DishItem";
import {scale} from "../../util/ScaleUtil";

export function OverviewScreen({navigation}: {navigation: any}) {

    const [location, setLocation] = usePreferredLocation();
    const [menu, setMenu] = useMenu("BZ");

    useEffect(() => {
        if (location == '') return;
        setMenu(location)
    }, [location]);

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewInner}>
            <View style={globalStyles.cardRow}>
                <Card
                    title={"First courses"}
                    icon={<Icon name={"menu"} color={"#fff"} size={25} />}
                    index={0}
                    interaction={
                        <TouchableOpacity style={{marginLeft: 'auto'}} onPress={() => navigation.navigate('Course', {
                            title: "First courses"
                        })}>
                            {
                                menu ?
                                    <Icon name={"arrow_right"} color={"#fff"} size={22}/>
                                : <></>
                            }
                        </TouchableOpacity>
                    }
                >
                    {
                        menu ?
                            menu.firstCourses.slice(0, 3).map((item, index) => {
                                return <DishItem key={index} _menuItem={item} />
                            })
                            :
                            <Text style={styles.loadingText}>Loading...</Text>
                    }
                </Card>
            </View>
            <View style={[globalStyles.cardRow, {marginTop: 20}]}>
                <Card
                    title={"Main courses"}
                    icon={<Icon name={"menu"} color={"#fff"} size={25} />}
                    index={0}
                    interaction={
                        <TouchableOpacity style={{marginLeft: 'auto'}} onPress={() => navigation.navigate('Course', {
                            title: "Main courses"
                        })}>
                            {
                                menu ?
                                    <Icon name={"arrow_right"} color={"#fff"} size={22}/>
                                    : <></>
                            }
                        </TouchableOpacity>
                }
                >
                    {
                        menu ?
                            menu.mainCourses.slice(0, 3).map((item, index) => {
                                return <DishItem key={index} _menuItem={item} />
                            })
                            :
                            <Text style={styles.loadingText}>Loading...</Text>
                    }
                </Card>
            </View>
            <View style={[globalStyles.cardRow, {marginTop: 20}]}>
                <Card
                    title={"Pizza"}
                    icon={<Icon name={"pin"} color={"#fff"} size={25} />}
                    index={0}
                    interaction={
                        <TouchableOpacity style={{marginLeft: 'auto'}} onPress={() => navigation.navigate('Course', {
                            title: "Pizza"
                        })}>
                            {
                                menu ?
                                    <Icon name={"arrow_right"} color={"#fff"} size={22}/>
                                    : <></>
                            }
                        </TouchableOpacity>
                }
                >
                    {
                        menu ?
                            menu.pizza.slice(0, 3).map((item, index) => {
                                return <DishItem key={index} _menuItem={item} />
                            })
                            :
                            <Text style={styles.loadingText}>Loading...</Text>
                    }
                </Card>
            </View>
        </ScrollView>
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
    },
    loadingText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Poppins_Bold'
    }
});

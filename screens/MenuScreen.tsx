import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from "react-native";
import {Card} from "../components/Card";
import {Header} from "../components/Header";
import {globalColors, globalStyles} from "../util/StyleUtil";
import {scale} from "../util/ScaleUtil";
import {ENDPOINTS} from "../util/APIUtil";
import {DishItem} from "../components/MenuScreen/DishItem";
import {Button} from "../components/Button";
import {Icon} from "../components/Icon";

export function MenuScreen(){

    useEffect(() => {
        fetch(ENDPOINTS.menu + '/BZ', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
        .then((json) => {

        }).catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <View style={globalStyles.container}>
            <Header title={"Menu"} icon={
                <Icon name={"profile"} color={"#fff"} size={48} />
            }/>

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewInner}>
                <View style={globalStyles.cardRow}>
                    <Card
                        title={"First courses"}
                        icon={<Icon name={"pin"} color={"#fff"} size={25} />}
                        index={0}
                    >
                        <DishItem iconUrl={'https://picsum.photos/400/300'} title={"Some good food"} eatingHabitsAttribs={[2,4]} />
                        <DishItem iconUrl={'https://picsum.photos/400/300'} title={"Some good food"} eatingHabitsAttribs={[1]} />
                        <DishItem iconUrl={'https://picsum.photos/400/300'} title={"Some good food"} eatingHabitsAttribs={[1,4,5]} />
                        <Button text={'Show more'} onPress={() => {}} style={showMoreBtnStyles}/>
                    </Card>
                </View>
                <View style={[globalStyles.cardRow, {marginTop: 20}]}>
                    <Card
                        title={"Main courses"}
                        icon={<Icon name={"pin"} color={"#fff"} size={25} />}
                        index={0}
                    >
                        <DishItem iconUrl={'https://picsum.photos/400/300'} title={"Some good food"} eatingHabitsAttribs={[2,4]} />
                        <DishItem iconUrl={'https://picsum.photos/400/300'} title={"Some good food"} eatingHabitsAttribs={[1]} />
                        <DishItem iconUrl={'https://picsum.photos/400/300'} title={"Some good food"} eatingHabitsAttribs={[1,4,5]} />
                        <Button text={'Show more'} onPress={() => {}} style={showMoreBtnStyles}/>
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

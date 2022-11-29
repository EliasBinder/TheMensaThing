import PinIcon from "../../assets/images/pin";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import TuneIcon from "../../assets/images/tune";
import {OccupationBar} from "./OccupationBar";
import {Icon} from "../../util/StyleUtil";
import {Card} from "../Card";
import React from "react";
import {scale} from "../../util/ScaleUtil";
import {AuthUtilType} from "../../util/AuthUtil";
import {BigButton} from "../BigButton";

export function Suggestion({auth, navigation}: {auth: AuthUtilType|null, navigation: any}) {
    return (
        <Card
            title={"Suggestion"}
            icon={<PinIcon color={"#E6E6E6"} dim={25}/>}
            index={2}
        >
            <View style={styles.cardSection}>
                { auth != null ?
                    (
                        <Text style={styles.cardText}>Suggestion goes here</Text>
                    ) : (
                        <View style={styles.notLoggedInContainer}>
                            <Text style={[styles.cardText, {textAlign: "center"}]}>You need to be logged in to see suggestions</Text>
                            <BigButton text={"Login"} onPress={() => {navigation.navigate('Login')}} style={loginBtnStyle}/>
                        </View>
                    )
                }
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    cardSection: {
        width: '100%',
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignSelf: "stretch"
    },
    cardText: {
        color: "#fff",
        fontSize: 15,
        fontFamily: "Poppins_SemiBold"
    },
    occupationContainer: {
        width: 'auto',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: scale(15),
    },
    occupationNum: {
        color: "#fff",
        fontSize: 15,
        fontFamily: "Poppins_SemiBold",
        marginLeft: 20
    },
    detailsContainer: {
        marginTop: 20,
        flexDirection: "row",
        width: '100%'
    },
    notLoggedInContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        width: '100%'
    }
});

const loginBtnStyle = StyleSheet.create({
    button: {
        marginTop: 20,
    }
});

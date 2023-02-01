import React, {useEffect} from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {globalStyles} from "../util/StyleUtil";
import {Header} from "../components/Header";
import {View} from "react-native";
import {OverviewScreen} from "./MenuScreen/OverviewScreen";
import {CourseScreen} from "./MenuScreen/CourseScreen";

export function MenuScreen(){

    const Stack = createNativeStackNavigator()

    const MenuScreenRoot = ({navigation}: {navigation: any}) => {
        return (
            <View style={[globalStyles.container, globalStyles.dropShadow]}>
                <Header title={'Menu'}/>
                <OverviewScreen navigation={navigation}/>
            </View>
        )
    }

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"Router"} component={MenuScreenRoot} options={{animation: 'slide_from_left'}} />
            <Stack.Screen name={"Course"} component={CourseScreen} options={{animation: 'slide_from_right'}} />
        </Stack.Navigator>
    )

}

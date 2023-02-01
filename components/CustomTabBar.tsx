import {TouchableOpacity, View} from "react-native";
import {globalColors} from "../util/StyleUtil";
import {Icon} from "./Icon";
import React from "react";
import {StyleSheet} from "react-native";

interface propType { //did not find any exact types for each of the props in documentation, so using any
    state: any,
    descriptors: any,
    navigation: any
}

export function CustomTabBar ({state, descriptors, navigation}: propType) {
    return (
        <>
            <View style={{height: 12.5, width: '100%', backgroundColor: globalColors.primary}}></View>
            <View style={styles.tabBar}>
                {state.routes.map((route: { key: string | number; name: any; }, index: any) => {
                    const {options} = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const iconColor = isFocused ? '#fff' : '#787878';

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate({name: route.name, merge: true});
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const getIcon = () => {
                        switch (label) {
                            case 'Dashboard':
                                return <Icon name={"dashboard"} color={iconColor} size={38}/>
                            case 'Menu':
                                return <Icon name={"menu"} color={iconColor} size={38}/>
                            case 'Information':
                                return <Icon name={"info"} color={iconColor} size={38}/>
                            case 'Prices':
                                return <Icon name={"price"} color={iconColor} size={38}/>
                            case 'Profile':
                                return <Icon name={"profile"} color={iconColor} size={38}/>
                        }
                    }

                    const getTouchableIcon = ({inner, key}: { inner: any, key: string | undefined }) => {
                        return (
                            <TouchableOpacity
                                accessibilityRole="button"
                                accessibilityState={isFocused ? {selected: true} : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={styles.buttonContainer}
                                key={key}
                            >
                                {inner}
                            </TouchableOpacity>
                        )
                    }

                    return label == 'Dashboard' ? (
                        <View key={index} style={styles.buttonContainer}>
                            <View style={styles.centerOutline}>
                                {getTouchableIcon({
                                    inner: (<View style={styles.center}>{getIcon()}</View>),
                                    key: undefined
                                })}
                            </View>
                        </View>
                    ) : (
                        getTouchableIcon({inner: getIcon(), key: index})
                    )
                })}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: globalColors.secondary,
        overflow: 'visible'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerOutline: {
        borderRadius: 100,
        backgroundColor: globalColors.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 85,
        height: 85,
        top: -30,
        position: 'absolute',
    },
    center: {
        borderRadius: 100,
        backgroundColor: globalColors.tertiary,
        width: 65,
        height: 65,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    }
});

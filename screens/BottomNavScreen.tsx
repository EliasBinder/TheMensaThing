import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import DashboardScreen from "./DashboardScreen";
import {MenuScreen} from "./MenuScreen";
import {InformationScreen} from "./InformationScreen";
import {MapScreen} from "./MapScreen";
import {ProfileScreen} from "./ProfileScreen";
import {TouchableOpacity, View, Text, SafeAreaView, StyleSheet, Image} from "react-native";
import {scale} from "../util/ScaleUtil";
import ProfileIcon from "../assets/images/profile";
import MenuIcon from "../assets/images/menu";
import InfoIcon from "../assets/images/info";
import MapIcon from "../assets/images/map";
import RocketIcon from "../assets/images/rocket";

const CustomTabBar = ({state, descriptors, navigation}: {state:any, descriptors: any, navigation:any}) => {
    return (
        <View style={styles.tabBar}>
            {state.routes.map((route: { key: string | number; name: any; }, index: any) => {
                const { options } = descriptors[route.key];
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
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.buttonContainer}
                    >
                        {
                            label == 'Menu' ? <MenuIcon color={iconColor}/> :
                                label == 'Information' ? <InfoIcon color={iconColor}/> :
                                    label == 'Map' ? <MapIcon color={iconColor}/> :
                                        label == 'Profile' ? <ProfileIcon color={iconColor}/> :
                                            label == 'Dashboard' ? <View style={styles.centerOutline}>
                                                <View style={styles.center}>
                                                    <RocketIcon color={iconColor}/>
                                                </View>
                                            </View> : null
                        }
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}


const BottomNavScreen = ({navigation, route}: {navigation: any, route: any}) => {

    const Tab = createBottomTabNavigator();

    return (
        <SafeAreaView style={styles.container}>
            <Tab.Navigator screenOptions={{headerShown: false}} tabBar={props => <CustomTabBar {...props} />}>
                <Tab.Screen name="Menu" component={MenuScreen} />
                <Tab.Screen name="Information" component={InformationScreen} />
                <Tab.Screen name="Dashboard" component={DashboardScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#081D40',
        flex: 1
    },
    tabBar: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#081D40',
        overflow: 'visible'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerOutline: {
        borderRadius: 100,
        backgroundColor: '#040F21',
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
        backgroundColor: '#0E3067',
        width: 60,
        height: 60,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    }
});

export default BottomNavScreen

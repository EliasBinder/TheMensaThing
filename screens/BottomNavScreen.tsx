import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import DashboardScreen from "./DashboardScreen";
import {MenuScreen} from "./MenuScreen";
import {InformationScreen} from "./InformationScreen";
import {MapScreen} from "./MapScreen";
import {ProfileScreen} from "./ProfileScreen";

const BottomNavScreen = ({navigation, route}: {navigation: any, route: any}) => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Menu" component={MenuScreen} />
            <Tab.Screen name="Information" component={InformationScreen} />
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default BottomNavScreen

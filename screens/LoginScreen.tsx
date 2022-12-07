import {View, StyleSheet, Text, TextInput, ScrollView} from "react-native";
import {globalColors, globalStyles} from "../util/StyleUtil";
import StackNavigationHeader from "../components/StackNavigationHeader";
// @ts-ignore //TODO: fix this
import {AzureLoginView} from '@shedaltd/react-native-azure-ad-2';
import {AZURE_INSTANCE} from "../util/AuthUtil";

export function LoginScreen({navigation, route}:{navigation: any, route: any}) {

    return (
        <>
            <StackNavigationHeader title={"Login"} navigation={navigation} route={route}/>
            <AzureLoginView
                azureInstance={AZURE_INSTANCE}
                loadingMessage="Requesting access token"
                onSuccess={() => navigation.goBack()}
                onCancel={() => navigation.goBack()}
                onError={() => console.log("Error")}
            />
        </>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})

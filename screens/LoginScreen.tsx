import {View, StyleSheet} from "react-native";
import StackNavigationHeader from "../components/StackNavigationHeader";
// @ts-ignore //TODO: fix this
import {AzureLoginView} from '../TheMensaThingAzureLogin/lib/index';
import {AZURE_INSTANCE} from "../util/AuthUtil";



export function LoginScreen({navigation, setLoggedIn}:{navigation: any, setLoggedIn: Function|undefined}) {

    return (
        <>
            <StackNavigationHeader title={"Login"} navigation={navigation}/>
            <View style={{
                flex: 1,
                backgroundColor: '#33ff41',
                paddingTop: -50,
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
            }}>
                <AzureLoginView
                    azureInstance={AZURE_INSTANCE}
                    loadingMessage="Requesting access token"
                    onSuccess={() => {
                        if (setLoggedIn)
                            setLoggedIn(true);
                        navigation.goBack()
                    }}
                    onCancel={() => navigation.goBack()}
                    onError={() => console.log("Error")}
                    style={{
                        marginTop: -10,
                        width: '100%',
                        height: '100%',
                        selfAlign: 'flex-start',
                    }}
                />
            </View>
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

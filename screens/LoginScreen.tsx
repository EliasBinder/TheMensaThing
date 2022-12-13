import {View, StyleSheet} from "react-native";
import StackNavigationHeader from "../components/StackNavigationHeader";
// @ts-ignore //TODO: fix this
import {AzureLoginView} from '../TheMensaThingAzureLogin/lib/index';
import {AZURE_INSTANCE} from "../util/AuthUtil";
import {useEffect} from "react";



export function LoginScreen({navigation, route}:{navigation: any, route: any}) {

    // @ts-ignore
    useEffect(() => {

    }, [])

    return (
        <>
            <StackNavigationHeader title={"Login"} navigation={navigation} route={route}/>
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
                        console.log("Logged In!")
                        AZURE_INSTANCE.getMoney().then((result: any) => {
                            console.log("Money: " + JSON.stringify(result));
                        }).catch((error: any) => {
                            console.log("Error: " + JSON.stringify(error));
                        })
                        // AZURE_INSTANCE.getUserInfo().then((result: any) => {
                        //     console.log("ScientificGraphAPI: " + JSON.stringify(result));
                        //
                        // }).catch((err: any) => {
                        //     console.log(err);
                        // })
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

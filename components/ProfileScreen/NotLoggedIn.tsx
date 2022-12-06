import {View, StyleSheet, Text} from "react-native";
import {globalColors, globalStyles} from "../../util/StyleUtil";
import {scale} from "../../util/ScaleUtil";
import {BigButton} from "../BigButton";
// @ts-ignore
import {AzureInstance, AzureLoginView} from '@shedaltd/react-native-azure-ad-2';

const CREDENTIAILS = {
    client_id: '6d082866-1528-4b93-a663-04de0d1e7b45',
    client_secret: '5029e8f0-cc4e-49b5-8417-d93e1f665a12',
    redirect_uri: 'https://login.microsoftonline.com/common/oauth2/nativeclient',
    scope: 'User.ReadBasic.All Mail.Read offline_access'
};

const Instance = new AzureInstance(CREDENTIAILS);


export function NotLoggedIn({navigation, route}: {navigation: any, route: any}) {
    return (
        <>
            <AzureLoginView
                azureInstance={Instance}
                loadingMessage="Requesting access token"
                onSuccess={() => console.log("Success")}
                onCancel={() => console.log("Cancel")}
                onError={() => console.log("Error")}
            />
            <View style={[globalStyles.container, styles.container]}>
                <Text style={styles.message}>Please log in to use all the features of this app</Text>
                <BigButton text={'Login'} onPress={() => {

                }} style={styles}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: scale(20),
        paddingRight: scale(20)
    },
    message: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: scale(24),
        textAlign: 'center',
    },
    button: {
        marginTop: scale(70),
        backgroundColor: globalColors.secondary,
    }
})

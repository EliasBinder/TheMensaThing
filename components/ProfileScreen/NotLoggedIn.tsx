import {View, StyleSheet, Text} from "react-native";
import {globalColors, globalStyles} from "../../util/StyleUtil";
import {scale} from "../../util/ScaleUtil";
import {BigButton} from "../BigButton";

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, User, OAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBfipLKf2Zo4KZ8D_6GsHdzslsaZB2gPNE",
  authDomain: "unibz-mensapp.firebaseapp.com",
  projectId: "unibz-mensapp",
  storageBucket: "unibz-mensapp.appspot.com",
  messagingSenderId: "149619072455",
  appId: "1:149619072455:web:a2ccf007c3b099d61a8de2"
};
const firebaseAuthProvider = new OAuthProvider('microsoft.com');
firebaseAuthProvider.setCustomParameters({
  prompt: 'consent',
  tenant: '92513267-03e3-401a-80d4-c58ed6674e3b'
});
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth();


export function NotLoggedIn({navigation, route}: {navigation: any, route: any}) {
    return (
        <View style={[globalStyles.container, styles.container]}>
            <Text style={styles.message}>Please log in to use all the features of this app</Text>
            <BigButton text={'Login'} onPress={() => {
                console.log(firebaseAuth);
                signInWithRedirect(firebaseAuth, firebaseAuthProvider);
                getRedirectResult(firebaseAuth).then(creds => {
                    console.log(creds);
                }).catch(err => {
                    console.warn(err);
                });
            }} style={styles}/>
        </View>
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

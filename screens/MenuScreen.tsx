import {View, StyleSheet, Text, Image} from 'react-native';
import {globalColors, globalStyles} from '../util/StyleUtil'

export function MenuScreen() {
    return (
        <View style={[styles.container, styles.background]} >
            <Text style={styles.title}>Today's Menu</Text>
            <View style={styles.cells} >
                <Image style={styles.icon} source={require('/assets/images/fork&knife.svg')}></Image>
                <Text style={[styles.subtitles]}>First Dishes</Text>
                <Image style={styles.icon} source={require('/assets/images/fork&knife.svg')}></Image>
                <Text style={styles.subtitles}>Second Dishes</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "center"
    },
    background: {
        backgroundColor:globalColors.primary,
        //backgroundColor: 'rgb(12, 21, 52)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cells: {
        //backgroundColor: 'rgb(7, 27, 100)',
        backgroundColor: globalColors.secondary,
        margin: 10,
        align: 'left',
        borderRadius: 20,
    },
    title: {
        
        color: 'aliceblue',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Poppins_Bold',
    },
    subtitles: {
        color: 'aliceblue',
        textAlign: 'left',
        fontSize: 24,
        paddingLeft: '10px',
    },
    icon: {
        width: '40px',
        height: 'auto',
        //align: 'right',
        position: 'relative',
        margin: 30,
    },
    images: {
        width: '85px',
        height: '85px',
        borderRadius: 30,

    }

})
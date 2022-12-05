import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Card} from "../Card";
import {Icon} from "../../util/StyleUtil";
import FoodIcon1 from "../../assets/images/pasta"
import {styles} from "../DashboardScreen/BarOccupation"
import {getMainCourses} from "../../util/MenuUtil";


export function MenuPrimi() {
    return(
        <Card
            title ={"Main Courses"}
            icon={<FoodIcon1 color={"#E6E6E6"} dim={25}/>}
        >
            <View style={styles.cardSection}>
                <Text style={styles.cardText}>eeeeee</Text>
            </View>   
        </Card>
    )
}
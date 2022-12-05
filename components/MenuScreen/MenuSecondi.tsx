import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Card} from "../Card";
import {Icon} from "../../util/StyleUtil";
import FoodIcon2 from "../../assets/images/pizza"
import {styles} from "../DashboardScreen/BarOccupation"
import {getMainCourses} from "../../util/MenuUtil";


export function MenuSecondi() {
    return(
        <Card
            title ={"Second Courses"}
            icon={<FoodIcon2 color={"#E6E6E6"} dim={25}/>}
        >
            <View style={styles.cardSection}>
                <Text style={styles.cardText}>eeeeee</Text>
            </View>   
        </Card>
    )
}
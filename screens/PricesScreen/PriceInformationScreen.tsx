import {globalColors, globalStyles, Icon} from "../../util/StyleUtil";
import {Header} from "../../components/Header";
import {FlatList, ScrollView, View} from "react-native";
import React from "react";
import {StyleSheet, Text} from "react-native";
import {scale} from "../../util/ScaleUtil";
import {usePricesList} from "../../hooks/usePricesList";
import DropDownPicker, {ItemType, ValueType} from 'react-native-dropdown-picker';
import {menus} from "../../model/menus";
import {menuItem} from "../../model/menuItem";
import {MenuItem} from "../../components/PricesScreen/MenuItem";
import {usePreferredLocation} from "../../hooks/usePreferredLocation";

export function PriceInformationScreen({navigation, setLoggedIn}: {navigation: any, setLoggedIn: Function}) {

    const menus: menus|undefined = usePricesList();

    const [preferredLocation, setPreferredLocation] = usePreferredLocation();

    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null as any);
    const [items, setItems] = React.useState([] as ItemType<string>[]);

    React.useEffect(() => {
        if (menus) {
            const newItems = menus.getMenuNames().map((menuName: string) => {
                return {label: menuName, value: menuName}
            })
            setItems(newItems);
            setSelectedItem(newItems[0].value);
        }
    }, [menus, preferredLocation])

    return (
        <>
            <View style={styles.menuSelectorContainer}>
                <DropDownPicker
                    open={dropdownOpen}
                    setOpen={setDropdownOpen}
                    value={selectedItem}
                    setValue={setSelectedItem}
                    items={items}
                    zIndex={1000}
                />
            </View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={menus?.menus[selectedItem]?.menuItems.filter((menuItem) => menuItem.locations.includes(preferredLocation)) || []}
                style={styles.scrollView}
                decelerationRate={0.85}
                snapToInterval={270}
                snapToAlignment={"center"}
                renderItem={({item, index}: {item: menuItem, index: number}) => (
                    <MenuItem key={index} name={item.name} price={item.price} itemEntries={item.menuItemEntries}/>
                )}
            />
        </>
    )
}

const styles = StyleSheet.create({
    menuSelectorContainer: {
        maxWidth: 180,
        paddingBottom: scale(20),
        alignSelf: 'flex-start',
        marginLeft: scale(30),
        minHeight: 'auto',
        zIndex: 999,
    },
    scrollView: {
        backgroundColor: globalColors.primary,
        flex: 1,
        marginBottom: 20
    },
    scrollViewInner: {
        justifyContent: "flex-start",
        alignItems: "center",
        paddingBottom: scale(30),
        alignSelf: "stretch",
    }
})

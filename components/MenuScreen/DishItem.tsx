import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {globalColors} from "../../util/StyleUtil";
import {getImageOfIndex} from "../../util/EatingHabitsUtil";
import {Icon} from "../Icon";
import {usePreferredDishes} from "../../hooks/usePreferredDishes";
import {menuItem} from "../../model/menu/menuItem";

interface propType {
    _menuItem: menuItem,
    style?: any
}

export function DishItem({_menuItem, style = {}}: propType) {
    const [imgSource, setImgSource] = React.useState({uri: placeholder});

    const [preferredDishes, setPreferredDishes] = usePreferredDishes();

    return (
        <View style={[styles.container, style]}>
            <Image source={imgSource} style={styles.image} onLoadEnd={() => setImgSource({uri: _menuItem.imageUrl})}/>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{_menuItem.name}</Text>
                <View style={styles.eatingHabitsContainer}>
                    {
                        _menuItem.allergens.map((item: number, index: number) => <Icon key={index}
                                                                                       style={{marginLeft: index != 0 ? 3 : 0}}
                                                                                       name={getImageOfIndex(item)}
                                                                                       size={20}
                                                                                       color={globalColors.accent}/>)
                    }
                </View>
            </View>
            <View style={styles.ratingContainer}>
                <TouchableOpacity onPress={() => {
                    if (preferredDishes.filter((item) => item.name == _menuItem.name).length == 1) {
                        setPreferredDishes(preferredDishes.filter((item) => item.name != _menuItem.name));
                    } else {
                        setPreferredDishes([...preferredDishes, _menuItem]);
                    }
                }}>
                    <Icon name={preferredDishes.filter((item) => item.name == _menuItem.name).length == 1?"star_filled":"star"} color={'#fff'} size={30}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const placeholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAABsUlEQVR4nO3Z3YrqMBDA8TRJ/cCCCkrEQnOp4Pu/hS/gjR9oRKmNYGsRbZK96OGcwy7dpYvMrjD/K8GZ4YeKXujN53PyatGfBnwnREOFaKgQDRWioUI0VIiGCtFQIRoqREOFaKgQDRWioUI0VLzW9PF4jOOYUhpFURAESqkkSZrNppSy1WrVXSeE1L1QVuOVzrIsz/PpdCqlVEqlaZrn+Ww2E0Lsdru664SQuhe+g07T1Pf9xWKx2WzG4/H1eu33+4yxXq93v9+dc+XY6XRarVaEkPV6Hcdx1TohpOrCM9FFUdxut8lkEkXRdrs1xnD+59NFKbXWlo8Hg4FzbrlcWmuHw2HVOiGk6sIz0YyxbrfLOQ+CgFLKGDPGlE8ZYyj9d0oIcblchBCfrBdF8cmFp6GDINBaPx6PLMustZ1OR2tdFMX5fG40Gp7nlWPOOaVUGIZKqf/f8XfrnPOqC1/m1fonYL/fJ0nCGPv77aG19n1fStlut8sZpRRjbDQaHQ4HY0wYhlXr5fDHC09G/5Je8scF0VAhGipEQ4VoqBANFaKhQjRUiIYK0VAhGipEQ/WS6DdKjwMIr+VTPgAAAABJRU5ErkJggg==';

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalColors.secondary,
        flex: 1,
        flexDirection: "row",
        marginTop: 15
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        marginRight: 15,
        borderRadius: 10,
        overflow: 'hidden',
        width: 60,
    },
    title: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: 15,
        textAlign: 'left',
    },
    infoContainer: {
        backgroundColor: globalColors.secondary,
        flex: 1,
        flexDirection: "column",
    },
    eatingHabitsContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 10,
    },
    ratingContainer: {
        backgroundColor: globalColors.secondary,
        width: 40,
        height: '100%',
        justifyContent: "flex-start",
        alignItems: "flex-end",
    }
});

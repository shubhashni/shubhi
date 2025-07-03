import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
export default function BottomNav() {
    return (
        <View style={[{ flex: .1, backgroundColor: '#111425' }, styles.bottom_menu]}>
            <TouchableOpacity>
                <Feather style={[styles.bottom_menu_icon]} name="home" size={22} color="black" />

            </TouchableOpacity>
            <TouchableOpacity>
                <Feather style={[styles.bottom_menu_icon, styles.active]} name="bookmark" size={22} color="black" />

            </TouchableOpacity>
            <TouchableOpacity>
                <Feather style={[styles.bottom_menu_icon]} name="navigation" size={22} color="black" />

            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons style={[styles.bottom_menu_icon]} name="person-outline" size={22} color="black" />

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    bottom_menu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
    },

    bottom_menu_icon: {
        color: '#c8c9cb',
        fontSize: 27,
    },

    active: {
        color: '#66b16f',
    }
})
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import { AntDesign, Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import { dh_w, dw_w } from "./Dimension";



const Screen7 = () => {
    return (
        <View>
            <View style={{ minHeight: dh_w }}>
                <ImageBackground
                    source={require("../assets/bg1.webp")}
                    style={styles.bgImage}
                    resizeMode="cover"
                >
                    <View style={styles.overlay}>
                        {/* Top Row */}
                        <View style={styles.topRow}>
                            <AntDesign name="arrowleft" size={22} color="#fff" />
                            <Feather name="share-2" size={20} color="#fff" />
                        </View>

                        <View style={styles.sec_cart}>
                            {/* Gallery */}
                            <View style={styles.galleryRow}>
                                <Image source={require("../assets/bg1.webp")} style={styles.galleryImage} />
                                <Image source={require("../assets/bg1.webp")} style={styles.galleryImage} />
                                <View style={styles.moreBox}>
                                    <Text style={{ color: "#fff", fontWeight: "600" }}>+10</Text>
                                </View>
                            </View>

                            {/* Title */}
                            <Text style={styles.parkTitle}>Lorem Ipsum{"\n"}National Park</Text>

                            <View style={styles.des_cart}>
                                {/* Rating + Friends */}
                                <View style={styles.rowBetween}>
                                    {/* Stars */}
                                    <View style={styles.starRow}>
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <FontAwesome key={i} name="star" size={16} color="#f1c40f" />
                                        ))}
                                    </View>
                                    {/* Friends */}
                                    <View style={styles.friendsRow}>
                                        <Image source={require("../assets/chair2.webp")} style={styles.avatar} />
                                        <Image source={require("../assets/mejores-muebles-de-oficina.webp")} style={styles.avatar} />
                                        <Text style={styles.friendCount}>+12 Friends</Text>
                                    </View>
                                </View>

                                {/* Description */}
                                <Text style={styles.description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                </Text>

                                {/* Button */}
                                <TouchableOpacity style={styles.bookBtn}>
                                    <Text style={styles.bookBtnText}>BOOK NOW</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Bottom Tabs */}
                            <View style={styles.bottomTabs}>
                                <Feather name="home" size={22} color="#aaa" />
                                <Feather name="bookmark" size={22} color="#00c853" />
                                <Feather name="navigation" size={22} color="#aaa" />
                                <Ionicons name="person-outline" size={22} color="#aaa" />
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}

export default Screen7

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        minHeight: dh_w,
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        // padding: 20,
        paddingTop: 50,
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        // marginBottom: 25,
    },
    sec_cart: {
        height: 550,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        marginBottom: 0,
        // padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    galleryRow: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 15,
    },
    galleryImage: {
        width: 50,
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ffffffa2',
        overflow: 'hidden',
        opacity: .8,

    },
    moreBox: {
        width: 50,
        height: 50,
        borderRadius: 8,
        backgroundColor: "#00c853a1",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: '#ffffffa2',
        overflow: 'hidden',
        opacity: .8,
    },
    parkTitle: {
        fontSize: 22,
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 15,
    },
    des_cart: {
        backgroundColor: '#111425',
        height: 280,
        // position:'absolute',
        // bottom:0,
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    starRow: {
        flexDirection: "row",
        gap: 4,
        backgroundColor: ''
    },
    friendsRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        marginLeft: 70,
    },
    avatar: {
        width: 28,
        height: 28,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: "#fff",
        marginRight: -8,
    },
    friendCount: {
        color: "#fff",
        marginLeft: 12,
    },
    description: {
        marginVertical: 15,
        color: "#ccc",
        fontSize: 13,
        lineHeight: 18,
    },
    bookBtn: {
        backgroundColor: "#00c853",
        paddingVertical: 12,
        alignItems: "center",
        borderRadius: 10,
    },
    bookBtnText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    bottomTabs: {
        position: "absolute",
        bottom: -2,
        minWidth: dw_w,
        height: 70,
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        backgroundColor: "#111425",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        elevation: 3,
    },
})
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";

import { Feather, Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { dh_w, dw_w } from "./Dimension";
import { SafeAreaView } from "react-native-safe-area-context";
const Screen5 = ({navigation}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    
    return (
        <SafeAreaView >
            <ImageBackground
                source={require('../assets/bg1.webp')} // Replace with your image or local asset
                
                style={{minHeight:dh_w-5,}}
                imageStyle={styles.bgImage}
            >
                <View style={styles.overlay}>
                    <Text style={styles.title}>Welcome!</Text>
                    <View style={styles.content}>
                        

                        {/* Username */}
                        <View style={styles.inputWrapper}>
                            <Feather name="user" size={18} color="#aaa" style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Username"
                                placeholderTextColor="#aaa"
                            />
                        </View>

                        {/* Password */}
                        <View style={styles.inputWrapper}>
                            <Entypo name="lock" size={18} color="#aaa" style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="#aaa"
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Feather name={showPassword ? "eye-off" : "eye"} size={18} color="#aaa" />
                            </TouchableOpacity>
                        </View>

                        {/* Remember Me and Forgot Password */}
                        <View style={styles.optionsRow}>
                            <View style={styles.rememberMe}>
                                {/* <CheckBox value={rememberMe} onValueChange={setRememberMe} />
                                <Text style={styles.optionText}>Remember me</Text> */}
                            </View>
                            <TouchableOpacity>
                                <Text style={[styles.optionText, { color: "#ccc" }]}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Login Button */}
                        <TouchableOpacity>
                            <LinearGradient
                                colors={["#00c853", "#2ecc71"]}
                                style={styles.loginButton}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text style={styles.loginText}>LOGIN</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        {/* Sign Up */}
                        <Text style={styles.footerText}>
                            Don’t have an account?
                            <Text style={{ color: "#00c853", fontWeight: "bold" }}>Sign up</Text>
                        </Text>
                    </View>
                </View>
            </ImageBackground>

        </SafeAreaView>
    )
}

export default Screen5

const styles = StyleSheet.create({
    container: {
        
    },
    bgImage: {
        resizeMode: "cover",
    },
    overlay: {
        flex: 1,
        backgroundColor: "['transparent','rgba(80, 45, 45, 0.55)', '#111111f1', '#111']",
        justifyContent: "center",
        alignItems:'center',
        padding: 25,
    },
    content: {
        backgroundColor: "#191b24",
        minHeight:dh_w/3,
        position:'absolute',
        right:0,
        left:0,
        bottom:0,
        paddingHorizontal: 56,
        paddingVertical:'24'
    },
    title: {
        fontSize: 28,
        color: "#fff",
        fontWeight: "bold",
        position:'absolute',
        top:80,
        textAlign: "center",
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2a2a40",
        borderRadius: 10,
        paddingHorizontal: 12,
        marginBottom: 15,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        color: "#fff",
    },
    optionsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        alignItems: "center",
    },
    rememberMe: {
        flexDirection: "row",
        alignItems: "center",
    },
    optionText: {
        color: "#aaa",
        fontSize: 14,
        marginLeft: 5,
    },
    loginButton: {
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    loginText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    footerText: {
        marginTop: 20,
        color: "#aaa",
        textAlign: "center",
        fontSize: 14,

    },
})
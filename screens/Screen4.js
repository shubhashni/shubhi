import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Entypo } from "@expo/vector-icons";
import React, { useState } from "react";

export default function Screen4({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ImageBackground
      resizeMode="cover"
      style={{ flex: 1 }}
      source={require("../assets/bg1.webp")}
    >
      <LinearGradient
        colors={["transparent", "#111111f1", "#111"]}
        style={{ flex: 1 }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -100}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={{ flex: 1 }}></View>

            <View style={styles.text_box}>
              <Text style={styles.txt1}>Welcome!</Text>

              {/* Username Input */}
              <View style={styles.inputWrapper}>
                <Feather name="user" size={18} color="#aaa" style={styles.icon} />
                <TextInput
                  style={styles.txt_input}
                  placeholder="Username"
                  placeholderTextColor="#aaa"
                />
              </View>

              {/* Password Input */}
              <View style={styles.inputWrapper}>
                <Entypo name="lock" size={18} color="#aaa" style={styles.icon} />
                <TextInput
                  style={styles.txt_input}
                  placeholder="Password"
                  placeholderTextColor="#aaa"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Feather name={showPassword ? "eye-off" : "eye"} size={18} color="#aaa" />
                </TouchableOpacity>
              </View>

              {/* forgate btton  */}
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
              <TouchableOpacity onPress={() => { navigation.navigate('Screen6') }}>
                <LinearGradient
                  colors={["#6fee87", "#009740"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0.5, y: 0.866 }} // 60°
                  style={{
                    borderRadius: 10,
                    marginTop: 16,
                  }}

                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "900",
                      color: "#f1f1f1bb",
                      textAlign: "center",
                      padding: 10,
                      textTransform: "uppercase",
                      letterSpacing: 3,
                    }}
                  >
                    Login
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
      <StatusBar hidden />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  text_box: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    justifyContent: "flex-end",
  },
  txt1: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 26,
    fontWeight: "bold",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#555",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#222",
  },
  txt_input: {
    flex: 1,
    color: "#fff",
    height: 45,
    paddingLeft: 8,
  },
  icon: {
    marginRight: 8,
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
});

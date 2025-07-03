import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Feather, AntDesign, Ionicons } from "@expo/vector-icons";
import { dh_w, dw_w } from "./Dimension";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const Screen6 = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={styles.container}
        source={require("../assets/bg1.webp")}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          {/* Header */}
          <View style={styles.topRow}>
            <AntDesign name="arrowleft" size={22} color="#fff" />
            <Feather name="share-2" size={20} color="#fff" />
          </View>

          {/* City name */}
          <Text style={styles.title}>Lorem Ipsum{"\n"}City Name</Text>

          {/* Map route */}
          <View style={styles.routePathContainer}>
            <View style={styles.routeLine} />
            <Image
              source={require("../assets/chair2.webp")}
              style={styles.circleImage}
            />
            <View style={styles.pin} />
          </View>

          {/* Cards */}
          <View style={{ marginTop: 60 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3].map((item, index) => (
                <ImageBackground key={index} style={styles.card}
                  source={require('../assets/bg1.webp')}
                  borderRadius={8}>
                  <View
                    // source={require("../assets/bg1.webp")}
                    style={styles.cardImage_overlay}
                  >
                    <Text style={styles.cardTitle}>Lorem Ipsum National Park</Text>
                    <TouchableOpacity onPress={() => {
                      navigation.navigate('Screen8');
                    }} style={styles.readMore}>
                      <LinearGradient
                        colors={["#6fee87", "#009740"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0.5, y: 0.866 }} // 60°
                        style={{
                          borderRadius: 10,
                          marginTop: 16,
                          paddingHorizontal: 35,
                          paddingVertical: 9
                        }}
                      >

                        <Text style={styles.readMoreText}>Read more</Text>

                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              ))}
            </ScrollView>
          </View>

          {/* Bottom Tabs */}
          <View style={styles.bottomTabs}>
            <Feather name="home" size={22} color="#aaa" />
            <Feather name="bookmark" size={22} color="#aaa" />
            <Feather name="navigation" size={22} color="#00c853" />
            <Ionicons name="person-outline" size={22} color="#aaa" />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>

  )
}

export default Screen6

const styles = StyleSheet.create({
  container: {
    minHeight: dh_w,
    flex: 1,
    backgroundColor: "#101028",
    // position: "relative",
  },
  overlay: {
    // flex: 1,
    position: 'absolute',
    minHeight: dh_w - 2,
    backgroundColor: "rgba(0,0,0,0.55)",
    justifyContent: "center",
    // padding: 25,
  },
  topRow: {
    padding: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -60
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    padding: 25,
  },
  routePathContainer: {
    position: "relative",
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  routeLine: {
    // width: screenWidth * 0.7,
    height: 100,
    borderLeftWidth: 3,
    borderColor: "#00c853",
    position: "absolute",
    left: "25%",
    borderRadius: 50,
    transform: [{ rotate: "40deg" }],
  },
  circleImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#00c853",
    zIndex: 1,
  },
  pin: {
    position: "absolute",
    top: 10,
    right: 40,
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: "#00c853",
  },
  card: {
    backgroundColor: "#1e1e3f",
    width: 220,
    marginRight: 22,
    borderRadius: 15,
    alignItems: "center",
  },
  cardImage_overlay: {
    width: "100%",
    height: 200,
    backgroundColor: "rgba(0, 0, 0, 0.24)",
    justifyContent: "center",
    padding: 30
  },
  cardTitle: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 8,
  },
  readMore: {
    // backgroundColor: "#00f974",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 6,
    marginTop: 20,
    marginBottom: -20

  },
  readMoreText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 800
  },
  bottomTabs: {
    position: "absolute",
    bottom: -2,
    minWidth: dw_w,
    height: 70,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    backgroundColor: "#505371",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    elevation: 3,
  },
})
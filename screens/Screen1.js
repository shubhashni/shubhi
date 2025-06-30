import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  PanResponder,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
import { useFonts } from "expo-font";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { dh, dh_w, dw } from "./Dimension";
import { SafeAreaView } from "react-native-safe-area-context";

const arr = [
  {
    img: require("../assets/simple-work-space-cozy-studio-ap.webp"),
    title: "Item Name",
    sub_title: "Description",
    price: "$250.00",
  },
  {
    img: require("../assets/sleek-minimalist-home-office-wit.webp"),
    title: "Item Name",
    sub_title: "Description",
    price: "$250.00",
  },
  {
    img: require("../assets/mejores-muebles-de-oficina.webp"),
    title: "Item Name",
    sub_title: "Description",
    price: "$250.00",
  },
  {
    img: require("../assets/chair2.webp"),
    title: "Item Name",
    sub_title: "Description",
    price: "$250.00",
  },
];

export default function Screen1({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Baumans-Regular": require("../assets/fonts/Baumans-Regular.ttf"),
  });

  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-dw)).current;

  const openMenu = () => {
    setMenuVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 600,
      useNativeDriver: false,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: -dw,
      duration: 600,
      useNativeDriver: false,
    }).start(() => setMenuVisible(false));
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) => {
      return Math.abs(gestureState.dx) > 20;
    },
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dx < -50) {
        closeMenu();
      }
    },
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      {/* Side Menu (always mounted) */}
      <Animated.View
        style={[
          styles.side_menu,
          {
            left: slideAnim,
            display: menuVisible ? "flex" : "none",
          },
        ]}
        {...panResponder.panHandlers}
      >
        <Text style={{ color: "#fff", padding: 20, fontSize: 18 }}>
          Side Menu Content
        </Text>
      </Animated.View>

      {/* Nav Bar */}
      <View style={styles.nav}>
        <TouchableOpacity style={styles.menu_bar} onPress={openMenu}>
          <View style={styles.menuContainer}>
            <View style={styles.lineShort} />
            <View style={styles.lineLong} />
            <View style={styles.lineShort2} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.user_icon_p}>
          <FontAwesome5 name="user-alt" size={24} style={styles.user_icon} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.r2}>
        <View style={styles.search}>
          <TouchableOpacity>
            <Feather name="search" size={16} color="black" />
          </TouchableOpacity>
          <TextInput style={styles.serach_input} placeholder="Search" />
        </View>
        <TouchableOpacity style={styles.cart}>
          <View style={styles.cart_red_dot}></View>
          <Feather name="shopping-cart" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.title1_box}>
        <Text style={styles.title1}>Explore</Text>
      </View>

      {/* Horizontal Cards */}
      <ScrollView horizontal>
        {arr.map((i, e) => (
          <View key={e} style={styles.viewImg}>
            <ImageBackground
              borderRadius={16}
              style={styles.image}
              source={i.img}
            >
              <TouchableOpacity
                onPress={() => Alert.alert("Heart")}
                style={styles.heart_icon}
              >
                <AntDesign name="heart" size={14} color="white" />
              </TouchableOpacity>
            </ImageBackground>
            <View style={{ padding: 10 }}>
              <Text style={styles.card_title}>{i.title}</Text>
              <Text style={styles.card_Sub_title}>{i.sub_title}</Text>
            </View>
            <View style={styles.cart_price}>
              <Text>{i.price}</Text>
              <View style={styles.cart_plus_icon}>
                <Entypo name="circle-with-plus" size={28} color="black" />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.BS_txt}>Best Selling</Text>

      {/* Bottom Cart */}
      <View style={styles.bottom_cart}>
        <View style={styles.BC_img}>
          <Image
            source={require("../assets/simple-work-space-cozy-studio-ap.webp")}
            style={styles.image}
          />
        </View>
        <View style={styles.BC_text}>
          <Text style={styles.card_title}>Minimal Chair</Text>
          <Text style={styles.card_Sub_title}>Learn About</Text>
          <Text>$125.00</Text>
        </View>
        <View style={styles.BC_arow_icon}>
          <TouchableOpacity onPress={() => navigation.navigate("Screen2")}>
            <AntDesign name="arrowright" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f6fa",
    minHeight: dh_w - 5,
  },
  nav: {
    width: dw,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuContainer: {
    padding: 10,
    justifyContent: "center",
  },
  lineShort: {
    width: 15,
    height: 3,
    backgroundColor: "#1c1c2b",
    borderRadius: 2,
    marginVertical: 2,
  },
  lineShort2: {
    width: 15,
    height: 3,
    backgroundColor: "#1c1c2b",
    borderRadius: 2,
    marginVertical: 2,
    marginLeft: 10,
  },
  lineLong: {
    width: 24,
    height: 3,
    backgroundColor: "#1c1c2b",
    borderRadius: 2,
    marginVertical: 2,
  },
  r2: {
    width: dw,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  search: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cfd2d7",
    borderRadius: 10,
    elevation: 3,
    paddingHorizontal: 10,
    gap: 10,
  },
  serach_input: {
    flex: 1,
  },
  cart: {
    margin: 10,
  },
  cart_red_dot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: "#fd6a67",
    position: "absolute",
    right: -2,
    zIndex: 1,
    top: 0,
  },
  title1_box: {
    width: dw,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title1: {
    fontFamily: "Baumans-Regular",
    fontSize: 24,
  },
  viewImg: {
    backgroundColor: "white",
    height: 320,
    padding: 11,
    marginBottom: 20,
    borderRadius: 27,
    marginLeft: 17,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  heart_icon: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "#fd6a67",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  card_title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  card_Sub_title: {
    color: "#878994",
  },
  cart_price: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  BS_txt: {
    margin: 20,
    fontSize: 30,
    fontWeight: "500",
    color: "#394362",
  },
  bottom_cart: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
    marginVertical: 8,
  },
  BC_img: {
    width: 70,
    height: 60,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  BC_text: {
    flex: 1,
    justifyContent: "center",
  },
  BC_arow_icon: {
    width: 30,
    height: 30,
    backgroundColor: "#242a3c",
    marginRight: 20,
    borderRadius: 8,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  user_icon_p: {
    width: 30,
    height: 30,
    backgroundColor: "#111",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  user_icon: {
    fontSize: 11,
    color: "#fff",
  },
  cart_plus_icon: {
    padding: 2,
  },
  side_menu: {
    position: "absolute",
    width: dw - 50,
    height: dh,
    backgroundColor: "blueviolet",
    zIndex: 10,
    top: 0,
  },
});

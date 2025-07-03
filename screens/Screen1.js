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
      <ScrollView horizontal style={styles.mainCart_view} showsHorizontalScrollIndicator={false}>
        {arr.map((item, index) => (
          <View key={index} style={styles.viewImg_cart}>
            <ImageBackground
              source={item.img}
              style={styles.image}
              borderRadius={16}
            >
              <TouchableOpacity
                style={styles.heart_icon}
                onPress={() => Alert.alert("Heart")}
              >
                <AntDesign name="heart" size={16} color="white" />
              </TouchableOpacity>
            </ImageBackground>

            <View style={styles.cartDes}>
              <View style={styles.description}>
                <Text style={styles.card_title}>{item.title}</Text>
                <Text style={styles.card_Sub_title}>{item.sub_title}</Text>
              </View>

              <View style={styles.cart_price}>
                <Text style={styles.card_price_text}>{item.price}</Text>
                <TouchableOpacity style={styles.cart_plus_icon}>
                  <Entypo name="circle-with-plus" size={28} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.BS_txt}>Best Selling</Text>

      <View style={styles.bottom_cart}>
        {/* Image Section */}
        <View style={styles.BC_img}>
          <Image
            source={require("../assets/mejores-muebles-de-oficina.webp")}
            style={styles.bc_cart_image}
            resizeMode="cover"
          />
        </View>

        {/* Text Section */}
        <View style={styles.BC_text}>
          <Text style={styles.card_title}>Minimal Chair</Text>
          <Text style={styles.card_Sub_title}>Learn About</Text>
          <Text style={styles.card_price}>$125.00</Text>
        </View>

        {/* Arrow Icon Section */}
        <View style={styles.BC_arrow_icon}>
          <TouchableOpacity onPress={() => navigation.navigate("Screen2")}>
            <AntDesign name="arrowright" size={22} color="white" />
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
  mainCart_view: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  viewImg_cart: {
    width: 220,
    marginRight: 26,
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    elevation: 4,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    padding: 12
  },
  image: {
    height: 180,
    justifyContent: "flex-end",
    padding: 8,
  },
  heart_icon: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#fc6969",
    padding: 6,
    borderRadius: 20,
  },
  cartDes: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 16,
  },
  description: {
    paddingHorizontal: 10,
  },
  card_title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  card_Sub_title: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
  cart_price: {
    marginTop: 8,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card_price_text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cart_plus_icon: {
    paddingLeft: 8,
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
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 16,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  BC_img: {
    width: 60,
    height: 60,
    borderRadius: 12,
    overflow: "hidden",
    marginRight: 12,
  },
  bc_cart_image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  BC_text: {
    flex: 1,
    justifyContent: "center",
  },
  card_title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
  card_Sub_title: {
    fontSize: 13,
    color: "#ccc",
    marginVertical: 2,
  },
  card_price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  BC_arrow_icon: {
    backgroundColor: "#333",
    padding: 8,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
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

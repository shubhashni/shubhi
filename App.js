import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
import { useFonts } from "expo-font";
import AntDesign from "@expo/vector-icons/AntDesign";

const dw = Dimensions.get("screen").width;
const dh = Dimensions.get("window").height;

let arr = [
  {
    img: require("./assets/simple-work-space-cozy-studio-ap.webp"),
    title: "Google",
    sub_title: "Instruction",
  },
  {
    img: require("./assets/sleek-minimalist-home-office-wit.webp"),
    title: "Google",
    sub_title: "Instruction",
  },
  {
    img: require("./assets/mejores-muebles-de-oficina.webp"),
    title: "Yahoo",
    sub_title: "Instruction",
  },
  {
    img: require("./assets/chair2.webp"),
    title: "Google",
    sub_title: "Instruction",
  },
];

export default function App() {
  const [fontsLoaded] = useFonts({
    "Baumans-Regular": require("./assets/fonts/Baumans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Or use <AppLoading />
  }

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* top nav  */}
          <View style={styles.nav}>
            <Ionicons name="menu" size={24} color="black" />

            <TouchableOpacity style={styles.user_icon_p}>
              <FontAwesome5
                name="user-alt"
                size={24}
                color="black"
                style={styles.user_icon}
              />
            </TouchableOpacity>
          </View>
          {/* Search baar */}
          <View style={styles.r2}>
            <View style={styles.search}>
              <Feather name="search" size={16} color="black" />
              <TextInput style={styles.serach_input} placeholder="Search" />
            </View>
            <View style={styles.cart}>
              <View style={styles.cart_red_dot}></View>
              <Feather name="shopping-cart" size={20} color="black" />
            </View>
          </View>
          <View style={styles.title1_box}>
            <Text style={styles.title1}>Explore</Text>
          </View>

          {/* Images  */}
          <ScrollView horizontal>
            {arr.map((i, e) => {
              return (
                <View key={e} style={styles.viewImg}>
                  <ImageBackground
                    borderRadius={16}
                    style={styles.image}
                    source={i.img}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        Alert.alert("Heart");
                      }}
                      style={styles.heart_icon}
                    >
                      <AntDesign name="heart" size={14} color="white" />
                    </TouchableOpacity>
                  </ImageBackground>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: 10,
                    }}
                  >
                    <Text>{i.title}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: dh,
    width: dw,
    backgroundColor: "#f5f6fa",
    color: "#000",
    alignItems: "center",
  },
  nav: {
    width: dw,
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  r2: {
    flexDirection: "row",
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
    width: 7,
    height: 7,
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
    height: 300,
    padding: 11,
    borderRadius: 27,
    margin: 10,
    elevation: 3,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  imgTxt: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
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
  heart_icon: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "#fd6a67",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
});

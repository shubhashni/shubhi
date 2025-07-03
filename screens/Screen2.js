import {
   
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { dh, dh_w, dw } from "./Dimension";

export default function Screen2({navigation}) {
  return (
    <View style={{minHeight:dh_w}} >
      <View style={styles.wrapper}>
        <ImageBackground
          source={require("../assets/simple-work-space-cozy-studio-ap.webp")}
          style={styles.image}
          imageStyle={styles.imageRadius} // Apply bottom radius only
        >
          {/* Image Nav */}
          <View style={styles.nav}>
            <TouchableOpacity onPress={()=>{
              navigation.goBack( );
            }} style={styles.arrowIcon}>
              <AntDesign name="arrowleft" size={24} color="#e2eaff" />
            </TouchableOpacity>
            <Text style={styles.title}>Product</Text>
            <TouchableOpacity style={styles.cart}>
              <View style={styles.cart_red_dot}></View>
              <Feather name="shopping-cart" size={24} color="#e2eaff" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.heartIcon}>
            <AntDesign name="heart" size={18} color="#f85254" />
          </TouchableOpacity>
        </ImageBackground>

        <Text style={styles.price}>$115.00</Text>

        {/* Title  */}
        <View style={styles.subTitle_star_box}>
          <Text style={styles.sub_title}>Minimal Chaire</Text>
          <TouchableOpacity style={styles.stars}>
            <FontAwesome name="star" size={20} color="#faa208" />
            <FontAwesome name="star" size={20} color="#faa208" />
            <FontAwesome name="star" size={20} color="#faa208" />
            <FontAwesome name="star" size={20} color="#faa208" />
            <FontAwesome name="star-o" size={20} color="#faa208" />
            <Text style={{ marginLeft: 3 }}>4.5</Text>
          </TouchableOpacity>
        </View>

        {/* Color option  */}
        <View style={styles.colorPoint}>
          <Text style={styles.colorTxt}>Color Option</Text>
          <View style={styles.point}>
            <View
              style={{
                borderWidth: 2,
                borderColor: "red",
                borderRadius: 50,
                padding: 4,
              }}
            >
              <View style={styles.point1} />
            </View>
            <View style={styles.point2} />
            <View style={styles.point3} />
          </View>
        </View>

        {/* Description  */}
        <View style={styles.description}>
           <Text style={styles.des_title}>
            Description 
           </Text>
          <Text style={styles.des_txt}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit similique explicabo ducimus commodi odit at voluptatum
            quaerat dignissimos velit, nam sed incidunt aliquid aliquam fugiat
            est. Sequi vitae beatae reiciendis.
          </Text>
        </View>

       
      </View>
       <TouchableOpacity onPress={()=>{ navigation.navigate('Screen3')}} style={styles.bottom_btn}>
            <View style={styles.pluse_Icon}>
                <AntDesign name="plus" size={24} color="white" />
            </View>
            <Text style={styles.B_btn_txt}>
              Add to Cart
            </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor:'red',

  },
  image: {
    width: "100%",
    height: 400,
  },
  imageRadius: {
    borderBottomLeftRadius: 40,
  },
  nav: {
    height: 400,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "26",
    paddingVertical: 32,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderBottomLeftRadius: 40,
  },
  title: {
    color: "#f5f6fa",
    fontSize: 22,
    fontWeight: 500,
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
  heartIcon: {
    position: "absolute",
    bottom: -24, // partially outside the card
    right: 20,
    width: 48,
    height: 48,
    backgroundColor: "white",
    borderRadius: '50%', // perfectly round
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  price: {
    marginHorizontal: 20,
    marginTop: 15,
    color: "#fd6a67",
    fontSize: 24,
    fontWeight: 800,
  },
  subTitle_star_box: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 4,
  },
  sub_title: {
    fontSize: 18,
  },
  stars: {
    flexDirection: "row",
    marginLeft: 72,
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  colorPoint: {
    marginHorizontal: 20,
  },
  colorTxt: {
    marginTop: 12,
    color: "#878994",
  },
  point: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 2,
    marginVertical: 8,
  },
  point1: {
    width: 16,
    height: 16,
    backgroundColor: "red",
    borderRadius: 50,
  },
  point2: {
    width: 26,
    height: 26,
    backgroundColor: "#b9bacf",
    borderRadius: 50,
  },
  point3: {
    width: 26,
    height: 26,
    backgroundColor: "#323955",
    borderRadius: 50,
  },
  description:{
    marginVertical : 6,
    marginHorizontal:20,
  },
  des_title:{
    marginVertical:1,
    fontWeight:700
  },
  des_txt:{
    fontSize:12,
    color:'#ceced8'
  },
  bottom_btn:{
    width:150,
    backgroundColor:'#24293d',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:10,
    borderTopStartRadius:50,
    position:'absolute',
    bottom:0,
    right:0
  },
  pluse_Icon:{
    paddingVertical:16,

  },
  B_btn_txt:{
    color:'white'
  }
});

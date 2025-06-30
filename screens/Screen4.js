import { ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { dh, dh_w } from './Dimension';
import { Feather, Entypo } from "@expo/vector-icons";

export default function Screen4() {
  const [showPassword, setShowPassword] = useState(false);

  

  return (

    <ScrollView>
 <ImageBackground resizeMode='cover' style={{
      height: dh,

    }} source={require('../assets/bg1.webp')}>
      <LinearGradient
        colors={['transparent', '#111111f1', '#111']}
        style={styles.container}
      >
        <View style={{flex:1}}></View>
        <View style={styles.text_box}>
          <Text style={styles.txt1}>Welcome!</Text>
          {/* <TextInput style={styles.txt_input} />
          <TextInput style={styles.txt_input} /> */}

          <View style={styles.inputWrapper}>
            <Feather name="user" size={18} color="#aaa" style={styles.icon} />
            <TextInput
              style={styles.txt_input}
              placeholder="Username"
              placeholderTextColor="#aaa"
            />
          </View>

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


          <LinearGradient
        colors={['#6fee87', '#009740']}
        start={{ x: 0, y: 0 }}
  end={{ x: 0.5, y: 0.866 }} // 60° rotation
        style={{
          borderRadius:10,
        }}
        
      >
        <Text style={{fontSize:30, 
          fontWeight:'900',
          color:'#f1f1f1bb',
          textAlign:'center',
          padding:10,
          textTransform:'uppercase', 
          fontSize:14,
          letterSpacing:3,
        }}>Login</Text>
      </LinearGradient>
          

        </View>
      </LinearGradient>
      <StatusBar hidden />
    </ImageBackground>
    </ScrollView>

   
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: dh,
  },
  text_box: {
   minHeight:dh/2,
    padding: 20,
  },
  txt1: {
    fontSize: 34,
    color: '#fff',
    fontWeight: '900',
    letterSpacing: 3,
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#3f4158',
    marginBottom: 10,
    opacity: .8,
    borderRadius: 4,
    paddingHorizontal: 12,
  },
  txt_input: {
    flex: 1,
    // paddingVertical: 12,
    color: "#fff",
  },

  icon:{
    marginRight:5,
  }
})
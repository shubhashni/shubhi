import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import { dh } from './Dimension';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import BottomNav from '../navigation/BottomNav';



export default function Screen8() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#111425' }}>
            <View style={{ flex: .9, backgroundColor: 'red', }}>
                <ImageBackground style={{ flex: 1 }} source={require('../assets/bg1.webp')}>
                    <LinearGradient
                        colors={['transparent', 'transparent', '#111425', '#111425']}
                        style={{ flex: 1 }}
                    >
                        <LinearGradient colors={['transparent', 'transparent', '#111425', '#111425']} style={{ position: 'absolute', bottom: 0, width: '100%', height: 160, justifyContent: 'flex-end', alignItems: 'center', zIndex: 1, paddingBottom: 10 }}>
                            <LinearGradient
                                colors={['yellowgreen', 'green']}
                                style={{
                                    elevation: 100,
                                    width: 180,
                                    borderRadius: 10
                                }}
                            >
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 14, textAlign: 'center', paddingVertical: 12, textTransform: 'uppercase', color: 'white', fontWeight: 900, letterSpacing: 3 }}>Book Now</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </LinearGradient>
                        <ScrollView>



                            <View style={{ backgroundColor: 'blue', height: 30, marginHorizontal: 50, marginTop: 300 }}>

                            </View>

                            <View>
                                <Text>Lorem, ipsum dolor.</Text>
                            </View>

                            <View style={{ padding: 20, }}>
                                <Text style={{ color: '#fff', textAlign: 'justify' }}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut vero suscipit quibusdam, necessitatibus pariatur similique ducimus inventore saepe error, tempora delectus molestias sed deserunt culpa, repudiandae reiciendis enim voluptatum praesentium iusto. Corrupti odit animi illo dignissimos quae error. Vel reiciendis non delectus nobis hic? Atque dolorum adipisci accusantium sed iure magnam illum quasi doloremque. Eaque quos unde recusandae deserunt fugit quaerat maiores minus? Inventore perferendis provident quo quidem. Consectetur, quaerat laudantium. Commodi consequatur facilis incidunt quo illo fugit amet? Natus quis tenetur optio accusantium illum a facilis sunt neque reiciendis est doloremque, voluptatum sit dolor consectetur mollitia! Dicta delectus modi repellendus! Officia quam ad, sequi, optio commodi mollitia dolore provident cumque iusto iure maiores voluptatibus voluptates corporis soluta ullam pariatur quaerat minima, quo magnam quidem at omnis possimus? Repellendus, dolores eveniet dicta sequi voluptatum error perferendis asperiores laborum nobis nemo fuga laudantium dolore deleniti non. Iste soluta alias quibusdam dolore quo, eos, autem maxime earum, laboriosam ipsum at dolores consequatur delectus laudantium ratione odio saepe nihil ipsam provident cumque distinctio ullam aspernatur! Fugit, animi. Fugiat voluptas rerum ab? Consequuntur amet animi eos blanditiis tempora nulla aliquid consequatur laboriosam expedita corrupti earum eum dicta quod quibusdam minima, similique, molestias velit non repellat. Placeat ex consectetur quisquam quae nobis optio magni, provident voluptatum illum dignissimos ducimus expedita unde reiciendis saepe deleniti facilis tempore quod dicta, non ab at quam id totam reprehenderit! Saepe quos consequatur atque minus suscipit eaque reprehenderit nisi earum blanditiis at eius similique officia culpa, accusamus debitis molestiae, enim sint dignissimos quidem! Provident commodi adipisci, error animi libero odit quis at aspernatur tempora iure officia dolorum quisquam deserunt harum quasi temporibus, accusantium architecto molestias dolore soluta quod, voluptate voluptatem sapiente nemo? Eligendi consequuntur amet ab quae. Cumque, ex unde id reprehenderit culpa, omnis consequatur asperiores eaque fugiat, perspiciatis deleniti?
                                </Text>
                            </View>

                        </ScrollView>
                    </LinearGradient>

                </ImageBackground>

            </View>

            <BottomNav />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})
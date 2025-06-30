import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Checkbox from 'expo-checkbox';

export default function CartScreen() {

    

const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Cart</Text>
        <TouchableOpacity>
            <View style={styles.cart_red_dot}></View>
          <AntDesign name="shoppingcart" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Cart Item 1 */}
        <View style={styles.item}>
          <Checkbox
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? 'red' : undefined}
        style={{marginRight:10}}
      />
          <Image
            source={require("../assets/chair2.webp")}
            style={styles.image}
          />
          <View style={styles.details}>
            <Text style={styles.productTitle}>Minimalist Chair</Text>
            <Text style={styles.productPrice}>$235.00</Text>
          </View>
          <View style={styles.qtyWrapper}>
            <TouchableOpacity style={styles.qtyBtn}>
              <Text style={styles.qtyText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qty}>2</Text>
            <TouchableOpacity style={styles.qtyBtn}>
              <Text style={styles.qtyText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Cart Item 2 */}
        <View style={styles.item}>
          <TouchableOpacity style={styles.checkbox} />
          <Image
            source={require("../assets/chair2.webp")}
            style={styles.image}
          />
          <View style={styles.details}>
            <Text style={styles.productTitle}>Elegant White Chair</Text>
            <Text style={styles.productPrice}>$124.00</Text>
          </View>
          <View style={styles.qtyWrapper}>
            <TouchableOpacity style={styles.qtyBtn}>
              <Text style={styles.qtyText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qty}>1</Text>
            <TouchableOpacity style={styles.qtyBtn}>
              <Text style={styles.qtyText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Cart Item 3 */}
        <View style={styles.item}>
          <TouchableOpacity style={styles.checkbox} />
          <Image
            source={require("../assets/sleek-minimalist-home-office-wit.webp")}
            style={styles.image}
          />
          <View style={styles.details}>
            <Text style={styles.productTitle}>Vintage Chair</Text>
            <Text style={styles.productPrice}>$89.00</Text>
          </View>
          <View style={styles.qtyWrapper}>
            <TouchableOpacity style={styles.qtyBtn}>
              <Text style={styles.qtyText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qty}>1</Text>
            <TouchableOpacity style={styles.qtyBtn}>
              <Text style={styles.qtyText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Summary */}
      <View style={styles.bottomCard}>
        <View style={styles.row}>
          <Text style={styles.label}>Selected Items</Text>
          <Text style={styles.amount}>$235.00</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Shipping Fee</Text>
          <Text style={styles.amount}>$30.00</Text>
        </View>
        <View style={[styles.row, styles.subtotalRow]}>
          <Text style={styles.subtotalText}>Subtotal</Text>
          <Text style={styles.subtotalAmount}>$265.00</Text>
        </View>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // height:620,
    backgroundColor: "#f5f6fa",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
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
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    paddingHorizontal: 16,
  },
  checkbox: {
    height: 18,
    width: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: "#f45a5a",
    borderColor: "#f45a5a",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 12,
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  productTitle: {
    fontWeight: "600",
    fontSize: 16,
    color: "#333",
  },
  productPrice: {
    color: "#f45a5a",
    fontWeight: "500",
    marginTop: 4,
  },
  qtyWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  qtyBtn: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  qtyText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  qty: {
    marginHorizontal: 6,
    fontSize: 16,
  },
  bottomCard: {
    backgroundColor: "white",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 20,
    shadowColor: "#000",
    elevation: 10,
    // backgroundColor:'red'
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    color: "#333",
  },
  amount: {
    color: "#f45a5a",
    fontWeight: "500",
  },
  subtotalRow: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 12,
    marginTop: 4,
  },
  subtotalText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subtotalAmount: {
    color: "#f45a5a",
    fontSize: 16,
    fontWeight: "bold",
  },
  checkoutBtn: {
    backgroundColor: "#1e1f3e",
    borderRadius: 22,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 16,
  },
  checkoutText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

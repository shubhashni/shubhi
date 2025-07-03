import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import Checkbox from "expo-checkbox";
import AntDesign from "@expo/vector-icons/AntDesign";
import { dw_w } from "./Dimension";

export default function CartScreen({navigation}) {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Minimalist Chair",
      price: 235,
      image: require("../assets/chair2.webp"),
      quantity: 2,
      selected: true,
    },
    {
      id: 2,
      title: "Elegant White Chair",
      price: 124,
      image: require("../assets/chair2.webp"),
      quantity: 1,
      selected: false,
    },
    {
      id: 3,
      title: "Vintage Chair",
      price: 89,
      image: require("../assets/sleek-minimalist-home-office-wit.webp"),
      quantity: 1,
      selected: false,
    },
  ]);

  const toggleCheckbox = (index) => {
    const updated = [...items];
    updated[index].selected = !updated[index].selected;
    setItems(updated);
  };

  const changeQuantity = (index, change) => {
    const updated = [...items];
    let qty = updated[index].quantity + change;
    if (qty > 0) {
      updated[index].quantity = qty;
      setItems(updated);
    }
  };

  const getSelectedTotal = () => {
    return items
      .filter((item) => item.selected)
      .reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const shippingFee = 30;
  const subtotal = getSelectedTotal() + shippingFee;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ padding: 8 }} 
        >
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
        {items.map((item, index) => (
          <View style={styles.item} key={item.id}>
            <Checkbox
              value={item.selected}
              onValueChange={() => toggleCheckbox(index)}
              color="red" // Red tick color when selected
              style={{
                marginRight: 10,
                borderColor: "red", // Red border always
                borderWidth: 2,
                borderRadius: 4,

              }}
            />

            <Image source={item.image} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
            </View>
            <View style={styles.qtyWrapper}>
              <TouchableOpacity
                style={styles.qtyBtn}
                onPress={() => changeQuantity(index, -1)}
              >
                <Text style={styles.qtyText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.qty}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.qtyBtn}
                onPress={() => changeQuantity(index, 1)}
              >
                <Text style={styles.qtyText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Summary */}
      <View style={styles.bottomCard}>
        <View style={styles.row}>
          <Text style={styles.label}>Selected Items</Text>
          <Text style={styles.amount}>${getSelectedTotal().toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Shipping Fee</Text>
          <Text style={styles.amount}>${shippingFee.toFixed(2)}</Text>
        </View>
        <View style={[styles.row, styles.subtotalRow]}>
          <Text style={styles.subtotalText}>Subtotal</Text>
          <Text style={styles.subtotalAmount}>${subtotal.toFixed(2)}</Text>
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
    flex: 1,
    backgroundColor: "#f6f6f6",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  cart_red_dot: {
    position: "absolute",
    top: -4,
    right: -4,
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 5,
    zIndex: 1,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius: 10,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  productPrice: {
    color: "#888",
    fontSize: 14,
    marginTop: 4,
  },
  qtyWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  qtyBtn: {
    backgroundColor: "#ddd",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
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
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    padding: 12,
    width: dw_w,
    marginBottom: 42,
    borderTopWidth: 1,
    borderTopColor: "#eee",

    // iOS shadow only on top
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4, // negative for top shadow
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    // Android shadow only on top
    elevation: 10, // This will create a full shadow, but we'll limit it manually
    // overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: "#555",
  },
  amount: {
    fontSize: 16,
    fontWeight: "600",
  },
  subtotalRow: {
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 10,
    marginTop: 10,
  },
  subtotalText: {
    color: '#24293d',
    fontSize: 18,
    fontWeight: "bold",
  },
  subtotalAmount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  checkoutBtn: {
    backgroundColor: "#3a4263",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  checkoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

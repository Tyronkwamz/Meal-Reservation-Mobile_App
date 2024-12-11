import React, { useState } from 'react';
import {
  View,
  Text,
  image,
  TouchableOpacity,
  FlatList,
  Button,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
//import UserProfile from './UserProfile';
import BookingInterface from './BookingInterface';

const foodItems = [
  { id: 1, name: 'Burger', price: 5.99, image: src ='C:\Users\Dell\Desktop\React Dzese\DoneWithit\burger.jfif' },
  { id: 2, name: 'Pizza', price: 8.99, image: 'https://picsum.photos/200/300' },
  { id: 3, name: 'Pasta', price: 6.99, image: 'https://picsum.photos/200/300' },
];

const UserDashboard = ({ userEmail }) => {
  const [activeTab, setActiveTab] = useState('booking'); // Default active tab
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (food) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === food.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...food, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const renderFoodTab = () => (
    <ScrollView>
          <View style={styles.foodContainer}>
      {showCart ? (
        <View style={styles.cartContainer}>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Text style={styles.itemText}>
                  {item.name} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                </Text>
                <View style={styles.buttons}>
                  <Button title="+" onPress={() => increaseQuantity(item.id)} />
                  <Button title="-" onPress={() => decreaseQuantity(item.id)} />
                </View>
              </View>
            )}
          />
          <Text style={styles.subtotal}>Subtotal: ${subtotal.toFixed(2)}</Text>
          <Button title="Back to Menu" onPress={() => setShowCart(false)} />
        </View>
      ) : (
        <>
          <FlatList
            data={foodItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.foodItem}>
                <Text style={styles.foodTitle}>{item.name}</Text>
                <Text>${item.price.toFixed(2)}</Text>
                <Button title="Add to Cart" onPress={() => addToCart(item)} />
              </View>
            )}
          />
          <Button title="View Cart" onPress={() => setShowCart(true)} />
        </>
      )}
    </View>
    </ScrollView>

  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'booking':
        return <BookingInterface userEmail={userEmail} />;
      case 'food':
        return renderFoodTab();
      default:
        return <BookingInterface userEmail={userEmail} />;
    }
  };

  return (
    <View style={styles.dashboardContainer}>
      <Text style={styles.dashboardTitle}>
        Easily get the best meals in town! Indoor Dining, Takeaway or Delivery. In Advance.
      </Text>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'booking' ? styles.activeTab : null]}
          onPress={() => setActiveTab('booking')}
        >
          <Text style={styles.tabButtonText}>Booking</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'food' ? styles.activeTab : null]}
          onPress={() => setActiveTab('food')}
        >
          <Text style={styles.tabButtonText}>Food Menu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabContent}>{renderTabContent()}</View>
      <View style={styles.footer}>
        <Text>&copy; {new Date().getFullYear()} Reservation Manager. All rights reserved.</Text>
        <Text>Welcome! {userEmail ? userEmail : 'Guest'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardContainer: {
    //flex: 5,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: 'darkslategrey',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  dashboardTitle: {
    textAlign: 'center',
    color: '#ff6b6b',
    marginBottom: 20,
    fontSize: 18,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  tabButton: {
    backgroundColor: 'darksalmon',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#ff6b6b',
    color: 'white',
    borderColor: 'transparent',
  },
  tabButtonText: {
    fontSize: 14,
    color: '#333',
  },
  tabContent: {
    padding: 20,
    backgroundColor: 'darksalmon',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  footer: {
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#f1f1f1',
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
});

export default UserDashboard;

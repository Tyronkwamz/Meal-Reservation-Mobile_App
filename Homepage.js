import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUtensils, faUserPlus, faClipboardList, faComments, faChartLine } from '@fortawesome/free-solid-svg-icons';
import LoginScreen from './LoginScreen';

const HomePage = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.homePage}>
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Welcome to Reservation Manager</Text>
        <Text style={styles.heroSubtitle}>Your one-stop solution for booking meals effortlessly!</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.features}>
        <Text style={styles.featuresIntro}>
          Join us, where food enthusiasts unite under the banner of exploration
          and delight. Whether you are a connoisseur of fine dining or a seeker of hidden gems,
          our reservation system is your passport to the extraordinary. Connect with fellow food 
          lovers, Share your discoveries, your recipes, and savor the joy of anticipation as 
          you secure your place at tables that celebrate the very essence of life.
        </Text>
        <Text style={styles.featuresTitle}>Key Features</Text>
        <View style={styles.featureList}>
          <Feature icon={faUtensils} title="Easy Meal Reservations" description="Book your meals in advance and skip the queues." />
          <Feature icon={faUserPlus} title="User  Registration" description="Create an account to manage your bookings and preferences." />
          <Feature icon={faClipboardList} title="Search & Filter" description="Find meals by date, time, location, and dietary preferences." />
          <Feature icon={faComments} title="Reviews & Ratings" description="Share your dining experiences and read others' reviews." />
          <Feature icon={faChartLine} title="Business Dashboard" description="Businesses can manage reservations and view analytics." />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; {new Date().getFullYear()} Reservation Manager. Created by Group 13. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
};

const Feature = ({ icon, title, description }) => (
  <View style={styles.feature}>
    <FontAwesomeIcon icon={icon} size={48} />
    <Text style={styles.featureTitle}>{title}</Text>
    <Text style={styles.featureDescription}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    fontFamily: 'Rockwell',
    color: '#333',
    //margin: 0,
   // padding: 0,
  },
  heroSection: {
    backgroundColor: '#ff7e5f',
    padding: 80,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 5,
    elevation: 3,
  },
  btnText: {
    color: '#ff7e5f',
    fontWeight: 'bold',
  },
  features: {
    padding: 30,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  featuresIntro: { ////
    textAlign: 'center',
    marginBottom: 5,
  },
  featuresTitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  featureList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 30,
  },
  feature: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 30,
    width: 280,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
  },
  featureTitle: {
    marginTop: 15,
    fontSize: 18,
 },
  featureDescription: {
    textAlign: 'center',
    marginTop: 10,
  },
  footer: {
    padding: 20,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#888',
  },
});

export default HomePage;
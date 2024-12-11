// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions, ImageBackground, Images } from 'react-native';
import axios from 'axios';
import UserDashboard from './UserDashboard';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      Alert.alert('Success', `Token: ${response.data.token}`);
      navigation.navigate('Dashboard'); // Correct screen name
      alert("Success")
    } catch (err) {
      console.error(err.message); // Debug error
      Alert.alert('Error', err.response?.data?.message || 'Invalid credentials');
      alert("Incorrect Details");
    }
  };

  return (
    <ImageBackground source={""} style={styles.backgroundImage}>
    <View style={styles.container}>
     <Text style={styles.title}>Reservation Manager</Text>
     <Text style={styles.subtitle}>Get the best meals in town now!</Text>
     <TextInput
       style={styles.input}
       placeholder="Email"
       placeholderTextColor="#999"
       value={email}
       onChangeText={setEmail}
       keyboardType="email-address"
       autoCapitalize="none"
     />
     <TextInput
       style={styles.input}
       placeholder="Password"
       placeholderTextColor="#999"
       value={password}
       onChangeText={setPassword}
       secureTextEntry
     />
     <TouchableOpacity style={styles.button} onPress={handleLogin}>
       <Text style={styles.buttonText}>Login</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
       <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
     </TouchableOpacity>
      
    </View>
 </ImageBackground>
 );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#ff6b6b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#007bff',
    marginTop: 8,
    fontSize: 14,
  },
});

export default LoginScreen;

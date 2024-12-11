/*
// import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { View, Text, Button, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './UserProfile.styles';

const UserProfile = () => {
  const { userEmail } = useAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.post('api/user/profile', { params: { email: userEmail } });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setError('Failed to load user profile.');
      } finally {
        setLoading(false);
      }
    };

    if (userEmail) {
      fetchUserProfile();
    }
  }, [userEmail]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.error}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.headerText}>User Profile</Text>
      <Text style={styles.text}><Text style={styles.boldText}>User Name:</Text> {user.username}</Text>
      <Text style={styles.text}><Text style={styles.boldText}>Email:</Text> {user.email}</Text>
      <Text style={styles.text}><Text style={styles.boldText}>Phone:</Text> {user.phone}</Text>
      <Text style={styles.text}><Text style={styles.boldText}>Joined on:</Text> {user.created_at}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => alert('Edit Profile functionality to be implemented')}>
        <Text style={{ color: '#fff' }}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;


*/
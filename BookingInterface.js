// BookingInterface.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput, Picker, Alert, Dimensions, Modal} from 'react-native';
//import DateTimePicker from '@react-native-community/datetimepicker';

const BookingInterface = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState(1);
  const restaurants = ['Mai Ngaaa', 'Campus SU', 'Dollar Deals Sadza', 'NC3 Dinner', 'NC2 Dinner'];

  const handlePlaceReservation = () => {
    if (!selectedRestaurant) {
      Alert.alert('Error', 'Please select a restaurant.');
      return;
    }

    Alert.alert(
      'Reservation Confirmed',
      `Restaurant: ${selectedRestaurant}\nDate: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}\nPeople: ${selectedPeople}`
    );
  };

  const renderRestaurant = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.radioContainer,
        selectedRestaurant === item && styles.selectedRadio,
      ]}
      onPress={() => setSelectedRestaurant(item)}
    >
      <Text style={styles.radioText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reserve Your Table</Text>

      <Text style={styles.subtitle}>Choose a Restaurant:</Text>
      <FlatList
        data={restaurants}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderRestaurant}
        contentContainerStyle={styles.radioList}
      />

      <Text style={styles.subtitle}>Pick a Date & Time:</Text>
      <TouchableOpacity
        style={styles.datePicker}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.dateText}>
          {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}

      <Text style={styles.subtitle}>Number of People:</Text>
      <Picker
        selectedValue={selectedPeople}
        style={styles.dropdown}
        onValueChange={(itemValue) => setSelectedPeople(itemValue)}
      >
        {[...Array(10).keys()].map((n) => (
          <Picker.Item key={n + 1} label={`${n + 1}`} value={n + 1} />
        ))}
      </Picker>

      <TouchableOpacity style={styles.button} onPress={handlePlaceReservation}>
        <Text style={styles.buttonText}>Place Reservation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
  },
  radioList: {
    marginBottom: 15,
  },
  radioContainer: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectedRadio: {
    borderColor: '#007bff',
    backgroundColor: '#e7f1ff',
  },
  radioText: {
    fontSize: 16,
  },
  datePicker: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
  },
  dateText: {
    fontSize: 16,
    textAlign: 'center',
  },
  dropdown: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default BookingInterface;
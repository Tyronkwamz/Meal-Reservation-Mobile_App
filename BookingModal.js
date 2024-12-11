
// BookingModal.js
import React from 'react';
import { View, Text, Modal, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const BookingModal = ({ meal, quantity, setQuantity, onClose, onBook }) => {
  if (!meal) return null;

  return (
    <Modal visible={true} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Booking Details for {meal.name}</Text>
          <Text style={styles.modalText}>Description: {meal.description}</Text>
          <Text style={styles.modalText}>Price: ${meal.price}</Text>
          <View style={styles.quantityContainer}>
            <Text style={styles.modalText}>Quantity:</Text>
            <TextInput
              style={styles.quantityInput}
              value={quantity.toString()}
              onChangeText={(text) => setQuantity(Number(text))}
              keyboardType="numeric"
              min={1}
            />
          </View>
          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.bookButton} onPress={onBook}>
              <Text style={styles.bookButtonText}>Book Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 15,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    width: 400,
    maxWidth: '90%',
    animation: 'fadeIn 0.3s ease',
  },
  modalTitle: {
    margin: 0,
    marginBottom: 15,
    color: '#333',
    fontSize: 24,
    textAlign: 'center',
  },
  modalText: {
    margin: 10,
    color: '#555',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityInput: {
    width: '50%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  bookButton: {
    backgroundColor: '#ff6b6b',
    padding: 12,
    borderRadius: 5,
    flex: 1,
    margin: 0,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 5,
    flex: 1,
    margin: 0,
  },
  cancelButtonText: {
    color: '#333',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default BookingModal;

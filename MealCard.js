import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const MealCard = ({ meal, onSelect }) => {
  return (
    <View style={styles.mealCard}>
      <Image source={{ uri: meal.imageUrl }} style={styles.mealImage} />
      <Text style={styles.mealName}>{meal.name}</Text>
      <Text style={styles.mealPrice}>${meal.price}</Text>
      <Button title="Select" onPress={() => onSelect(meal)} style={styles.selectButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  mealCard: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    textAlign: 'center',
    width: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  mealImage: {
    width: '100%',
    height: 'auto',
    borderRadius: 8,
  },
  mealName: {
    color: '#88ed99',
    fontSize: 18,
    fontWeight: 'bold',
  },
  mealPrice: {
    fontSize: 16,
    color: '#fff',
  },
  selectButton: {
    padding: 10,
    backgroundColor: '#1d8637',
    color: '#fff',
    borderRadius: 5,
  },
});

export default MealCard;

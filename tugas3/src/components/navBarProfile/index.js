// src/components/navBarProfile/index.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Alert } from 'react-native';

export default function ProfileNavBar() {
  const handleSearchPress = () => {
    Alert.alert('Search', 'Tombol Search ditekan!');
  };

  const handleMenuPress = () => {
    Alert.alert('Menu', 'Tombol Menu ditekan!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSearchPress}>
        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.text}>My Profile</Text>
      <TouchableOpacity onPress={handleMenuPress}>
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    color: 'black',
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

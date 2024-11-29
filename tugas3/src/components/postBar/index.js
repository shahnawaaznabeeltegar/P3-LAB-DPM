// src/components/postBar/index.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

const PostBar = () => {
  const [postText, setPostText] = useState('');

  useEffect(() => {
    console.log('PostBar Component Did Mount');
    
    // Simulasi mendapatkan data atau melakukan setup awal
    setTimeout(() => {
      console.log('PostBar Setup Complete');
    }, 2000);

    // Cleanup ketika komponen unmount
    return () => {
      console.log('PostBar Component Will Unmount');
    };
  }, []); // Empty array means this will run only on mount and unmount

  const handlePostPress = () => {
    if (postText.trim()) {
      Alert.alert('Post', 'Post berhasil dibuat!');
      setPostText('');
    } else {
      Alert.alert('Warning', 'Teks postingan tidak boleh kosong!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Apa yang Anda pikirkan?"
        placeholderTextColor="gray"
        multiline
        value={postText}
        onChangeText={(text) => setPostText(text)}
      />
      <TouchableOpacity style={styles.postButton} onPress={handlePostPress}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingLeft: 10,
    fontSize: 16,
    marginRight: 10,
  },
  postButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  postButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PostBar;

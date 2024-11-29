// src/pages/profile/index.js
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ProfileNavBar from '../../components/navBarProfile';
import ProfileHeader from '../../components/headerProfile';
import PostBar from '../../components/postBar';  // Import komponen PostBar

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileNavBar />
      <ScrollView>
        <ProfileHeader />
        <PostBar />  {/* Tambahkan PostBar */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ProfileScreen;

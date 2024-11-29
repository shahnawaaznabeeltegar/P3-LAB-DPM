// src/components/headerProfile/index.js
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { buttonStyles } from '../../style/buttonStyles';

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pengikut: 100,
    };
    console.log('Constructor: ProfileHeader');
  }

  componentDidMount() {
    console.log('Component Did Mount');
    setTimeout(() => {
      this.setState({ pengikut: 1000 });
    }, 2000); // Mengubah pengikut setelah 2 detik
  }

  componentDidUpdate() {
    console.log('Component Did Update: pengikut updated');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount: ProfileHeader akan dihapus');
  }

  render() {
    const { pengikut } = this.state;
    console.log('Render: ProfileHeader');

    return (
      <View style={styles.container}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        <Text style={styles.text}>Nama</Text>
        <View style={styles.counterContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.numberText}>{pengikut}</Text>
            <Text style={styles.labelText}>Pengikut</Text>
          </View>
          <TouchableOpacity style={buttonStyles.grayOutlinedButton}>
            <Text style={buttonStyles.grayOutlinedButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  counterContainer: {
    flexDirection: 'row',
    padding: 6,
    alignItems: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    margin: 10,
  },
  numberText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  labelText: {
    color: 'gray',
    fontSize: 11,
    fontWeight: 'bold',
  },
});

export default ProfileHeader;

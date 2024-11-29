import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';
import { styles } from './styles'; // Mengimpor styling halaman

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  // Lifecycle method - componentDidMount
  componentDidMount() {
    console.log('Halaman Home muncul!');
    setTimeout(() => {
      this.setState({
        products: [
          { id: 1, name: 'Produk 1', description: 'Deskripsi Produk 1' },
          { id: 2, name: 'Produk 2', description: 'Deskripsi Produk 2' },
          { id: 3, name: 'Produk 3', description: 'Deskripsi Produk 3' },
        ],
      });
    }, 2000);
  }

  // Lifecycle method - componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    if (prevState.products !== this.state.products) {
      console.log('Daftar produk diperbarui!');
    }
  }

  // Lifecycle method - componentWillUnmount
  componentWillUnmount() {
    console.log('Halaman Home hilang!');
  }

  render() {
    const { products } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Header />
        <Text style={styles.title}>Daftar Produk</Text>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>
    );
  }
}

export default Home;

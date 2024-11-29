import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  grayOutlinedButton: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#f0f0f0', // Background color untuk tombol
    alignItems: 'center', // Menjaga teks tombol tetap terpusat
    justifyContent: 'center', // Teks di tengah tombol
  },
  grayOutlinedButtonText: {
    color: 'black',
    fontWeight: '700',
    textAlign: 'center', // Teks tombol di tengah
  },
});

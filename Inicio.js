import React from 'react';
import { StatusBar, Image, TextInput, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Imagen de fondo */}
      <Image
        source={require('/DAM/tarea04/fondo3.png')} // Reemplaza con la ubicación de tu imagen de fondo
        style={styles.backgroundImage}
      />

      {/* Logo en la esquina */}
      <Image
        source={require('/DAM/tarea04/logo.png')} // Reemplaza con la ubicación de tu logo
        style={styles.logo}
      />

      {/* Texto de bienvenida */}
      <Text style={styles.welcomeText}>Welcome Home!</Text>

      {/* Buscador simple */}
      <TextInput
        placeholder="Search"
        style={styles.searchInput}
        placeholderTextColor="black" // Cambia el color del texto de marcador de posición
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logo: {
    position: 'absolute',
    top: 20, // Ajusta la posición del logo en la esquina superior izquierda
    left: 20, // Ajusta la posición del logo en la esquina superior izquierda
    width: 50, // Ajusta el tamaño del logo según tus necesidades
    height: 50, // Ajusta el tamaño del logo según tus necesidades
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black', // Cambia el color del texto a negro
  },
  searchInput: {
    backgroundColor: 'white',
    width: '80%',
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    color: 'black', // Cambia el color del texto del cuadro de búsqueda a negro
  },
});

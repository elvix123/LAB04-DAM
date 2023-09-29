import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Ayuda() {
  const [acordeones, setAcordeones] = useState([
    { titulo: '¿Cómo puedo ver películas en este sitio?', contenido: 'Para ver películas en nuestro sitio web, simplemente navega por nuestra colección y haz clic en la película que deseas ver' },
    { titulo: '¿Necesito una cuenta para ver películas?', contenido: 'Sí, para acceder a nuestra biblioteca completa de películas, te recomendamos crear una cuenta gratuita. ' },
    { titulo: '¿Hay algún costo asociado para ver películas en este sitio?', contenido: ' Ofrecemos una variedad de películas, algunas de las cuales son gratuitas y otras pueden requerir una tarifa de alquiler o compra' },
    { titulo: '¿Puedo ver películas en diferentes dispositivos?', contenido: 'Sí, puedes ver películas en una variedad de dispositivos, como computadoras, tabletas y teléfonos móviles' },
    { titulo: '¿Puedo descargar películas para verlas sin conexión?', contenido: 'Sí, ofrecemos la opción de descargar algunas películas para verlas sin conexión en dispositivos móviles.' },
    // Agrega más acordeones aquí según sea necesario
  ]);

  const toggleAcordeon = (index) => {
    const nuevosAcordeones = [...acordeones];
    nuevosAcordeones[index].abierto = !nuevosAcordeones[index].abierto;
    setAcordeones(nuevosAcordeones);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Preguntas Frecuentes: </Text>
      {acordeones.map((acordeon, index) => (
        <View key={index} style={styles.acordeon}>
          <TouchableOpacity onPress={() => toggleAcordeon(index)}>
            <Text style={styles.encabezado}>{acordeon.titulo}</Text>
          </TouchableOpacity>
          {acordeon.abierto && (
            <View style={styles.contenido}>
              <Text>{acordeon.contenido}</Text>
            </View>
          )}
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,  // Cambia el tamaño de la letra del encabezado
    fontWeight: 'bold',
  },
  acordeon: {
    marginBottom: 10,
  },
  encabezado: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  contenido: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

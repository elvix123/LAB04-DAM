import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const peliculasData = [
    
  
    {
        titulo: "Película 2",
        descripcion:
          "Descripción de la Película 2. Una historia conmovedora que te hará reflexionar...",
        imagen: require("/DAM/tarea04/Lain.jpg"), // Reemplaza con la ruta de tu carátula
      },
  {
    titulo: "Película 2",
    descripcion:
      "Descripción de la Película 2. Una historia conmovedora que te hará reflexionar...",
    imagen: require("/DAM/tarea04/p2.webp"), // Reemplaza con la ruta de tu carátula
  },
  {
    titulo: "Película 2",
    descripcion:
      "Descripción de la Película 2. Una historia conmovedora que te hará reflexionar...",
    imagen: require("/DAM/tarea04/p3.jpg"), // Reemplaza con la ruta de tu carátula
  },
  {
    titulo: "Película 2",
    descripcion:
      "Descripción de la Película 2. Una historia conmovedora que te hará reflexionar...",
    imagen: require("/DAM/tarea04/p4.jpeg"), // Reemplaza con la ruta de tu carátula
  },
  {
    titulo: "Película 2",
    descripcion:
      "Descripción de la Película 2. Una historia conmovedora que te hará reflexionar...",
    imagen: require("/DAM/tarea04/p5.jpeg"), // Reemplaza con la ruta de tu carátula
  },
  {
    titulo: "Película 2",
    descripcion:
      "Descripción de la Película 2. Una historia conmovedora que te hará reflexionar...",
    imagen: require("/DAM/tarea04/p6.jpeg"), // Reemplaza con la ruta de tu carátula
  },
  {
    titulo: "Película 2",
    descripcion:
      "Descripción de la Película 2. Una historia conmovedora que te hará reflexionar...",
    imagen: require("/DAM/tarea04/p7.jpeg"), // Reemplaza con la ruta de tu carátula
  },
  {
    titulo: "Película 2",
    descripcion:
      "Descripción de la Película 2. Una historia conmovedora que te hará reflexionar...",
    imagen: require("/DAM/tarea04/p8.jpeg"), // Reemplaza con la ruta de tu carátula
  },

  {
    titulo: "Película 2",
    descripcion:
      "Descripción de la Película 2. Una historia conmovedora que te hará reflexionar...",
    imagen: require("/DAM/tarea04/p9.jpeg"), // Reemplaza con la ruta de tu carátula
  },
  {
    titulo: "Película 2",
    descripcion:
      "Descripción de la Película 2. Una historia conmovedora que te hará reflexionar...",
    imagen: require("/DAM/tarea04/p10.jpeg"), // Reemplaza con la ruta de tu carátula
  },
];

export default function Peliculas() {
  return (

    
    <View style={styles.container}>
      {peliculasData.map((pelicula, index) => (
        <View key={index} style={styles.card}>
          <Image source={pelicula.imagen} style={styles.imagen} />
          <Text style={styles.titulo}>{pelicula.titulo}</Text>
          <Text style={styles.descripcion}>{pelicula.descripcion}</Text>
        </View>
      ))}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    width: 250,
    margin: 10,
    borderWidth: 3,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  imagen: {
    width: 250,
    height: 250,
    resizeMode: "cover",
    marginBottom: 10,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 16,
  },
  descripcion: {
    fontSize: 14,
    textAlign: "center",
  },
});

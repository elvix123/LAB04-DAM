import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Inicio from "./Inicio";
import Peliculas from "./Peliculas";
import Series from "./Ayuda";
import Ayuda from "./Ayuda";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen name="Inicio" component={Inicio}/>
        <Drawer.Screen name="Peliculas" component={Peliculas}/>
        <Drawer.Screen name="Ayuda" component={Ayuda}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
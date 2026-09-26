import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';
import LoginScreen from '../screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import PerfilScreen from '../screens/PerfilScreen';



const Stack = createStackNavigator()
const Bottom = createBottomTabNavigator()

function MyStack(){
    return(
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name='Welcome' component={WelcomeScreen}/>

            <Bottom.Screen 
                    name="Registro" 
                    component={Screen1}
            />

            <Bottom.Screen 
                name="Login" 
                component={LoginScreen}
            />
            
            <Stack.Screen 
                name='Bottom' 
                component={MyBottom}
                //options={{ headerShown: false }}
                />
        </Stack.Navigator>
    )
}

function MyBottom(){
        return(
            <Bottom.Navigator initialRouteName="Detalles">
                

                <Bottom.Screen 
                    name="Detalles" 
                    component={Screen2}
                />
            
                <Bottom.Screen 
                    name="EditarDatos" 
                    component={Screen3}
                />
                

                <Bottom.Screen 
                    name="ListaProductos" 
                    component={Screen4}
                />

                <Bottom.Screen 
                    name="Perfil" 
                    component={PerfilScreen}
                />

            </Bottom.Navigator>
        )
    }

export function Navegador(){
    return(
        <NavigationContainer>
                <MyStack/>
        </NavigationContainer>
        
    )
}


import * as React from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';



import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SearchScreen from './screens/SearchScreen';
import FilterScreen from './screens/FilterScreen';
import CartScreen from './screens/CartScreen';

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 100, height: 60 }}
      source={require('./assests/Icon/pic-logo.png')}
    />
  );
}

function ActionBarIcon( ) {
  const navigation = useNavigation();
  return (

    <View style={{ flexDirection:'row', justifyContent:'space-evenly', padding:20  }} >
    <TouchableOpacity style={{ padding:15 }} >
    <Image
    source={require( './assests/icons/language.png' )}
    style={{ width: 30, height: 30,resizeMode:'contain',  }} />
    </TouchableOpacity>
    <TouchableOpacity
    onPress={ ()=> navigation.navigate('Filter')} 
    style={{ padding:15 }}>
    <Image 
    source={require( './assests/icons/user.png' )}
    style={{ width: 30, height: 30,resizeMode:'contain'   }}  />
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={ ()=> navigation.navigate('Search')} 
    style={{ padding:15 }}>
    <Image
    source={require( './assests/icons/search.png' )}
    style={{ width: 30, height: 30,resizeMode:'contain'   }}  />
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={ ()=> navigation.navigate('Cart')}
    style={{ padding:15 }}>
    <Image  
    source={require( './assests/icons/shopping-cart.png' )}
    style={{ width: 30, height: 30,resizeMode:'contain'   }}  />
    </TouchableOpacity>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
        options={{ headerTitle: props => <LogoTitle {...props} />,
        headerStyle: {
          backgroundColor: '#0A79DF',
        },
        headerRight: props => <ActionBarIcon {...props} /> }} 
        
     
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

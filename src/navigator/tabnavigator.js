import * as React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";


import Home from '../screens/home';
import OffersTab from '../screens/offerstab';
import OfferDetailed from '../screens/offerdetailed';
import Product from '../screens/products';
import Setting from '../screens/setting';

//-------------------------------------------------------------------------------

import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const  TabNavigator = () => {
  return (
      <Tab.Navigator
       initialRouteName={'MainPage'} screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size, tintColor }) => {
            let iconName;

            if (route.name === 'MainPage') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarOptions: {
            activeTintColor: '#ff5959',

    },
          tabBarActiveTintColor: '#ff5959',
          tabBarInactiveTintColor: 'lightgrey',
         // tabBarActiveBackgroundColor: '#ff5959',
          tabBarStyle: {
            activeTintColor: '#ff5959'
          },
                         
          })}>

        <Tab.Screen name="Home" component={Home}  options={{
                headerTitleAlign: 'center',
                headerShown: true,
              title: '',
               headerRight: () => (
                <Feather style={{paddingRight:'5%'}}name="bell" size={24} color="grey"  />),
                headerLeft: () => (
                <Text style={{fontSize:20,fontWeight:'bold',color:'#f44b69',paddingLeft:'5%'}}>Nike store</Text>),
            
         
          tabBarIcon: ({ focused, color, size }) => {
              return <AntDesign name="home" size={24} color={color}  />
          },
        }} />
        <Tab.Screen name="Products" component={Product}  options={{
                headerTitleAlign: 'center',
                headerShown: true,
              title: 'Products',
               headerRight: () => (
                <Feather style={{paddingRight:'5%'}}name="bell" size={24} color="grey"  />),
                headerLeft: () => (
                <Text style={{fontSize:20,fontWeight:'bold',color:'#f44b69',paddingLeft:'5%'}}>Nike store</Text>),
            
         
          tabBarIcon: ({ focused, color, size }) => {
              return <FontAwesome name="shopping-bag" size={24} color={color} />
          },
        }} />
             <Tab.Screen name="Offers" component={OffersTab}  options={{
          headerShown: true, 
          headerTitle:'',
          
          headerRight: () => (
            <TouchableOpacity>
                <View style={{marginRight:10,backgroundColor:'lightgrey',height:responsiveHeight(4),width:responsiveWidth(28),flexDirection:'row',
                borderRadius:12,justifyContent:'center',alignItems:'center'}}>
                <AntDesign style={{paddingLeft:1}} name="pluscircle" size={20} color="white" />
                <Text 
                style={{paddingLeft:10,fontSize:10,fontWeight:'500'}}>
                    Post Offers
                </Text>
                </View>
                </TouchableOpacity>),
                headerLeft: () => (
                <Text style={{paddingLeft:10,fontSize:16,fontWeight:'600',color:'#f44b69'}}>Nike store</Text>),
          tabBarIcon: ({ focused, color, size }) => {
              return <AntDesign name="tagso" size={24} color={color} />
          },
        }} />
         <Tab.Screen name="Setting" component={Setting}  options={{
          headerShown: true, 
          headerTitle:'',
          tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="person-outline" size={24} color={color} />
          },
          headerLeft: () => (
                <Text style={{paddingLeft:10,fontSize:16,fontWeight:'600',color:'#f44b69'}}>Setting</Text>),
          tabBarIcon: ({ focused, color, size }) => {
              return <AntDesign name="tagso" size={24} color={color} />
          },
          headerRight: () => (
            <TouchableOpacity>
            <MaterialIcons style={{paddingRight:20}}name="notifications-none" size={24} color="grey" />
               
                </TouchableOpacity>),
        }} />

      </Tab.Navigator>
  );
}

export default TabNavigator;
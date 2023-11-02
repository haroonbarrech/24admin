import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import LogIn from "../screens/login";
import SignUp from "../screens/signup";
import Otp from "../screens/otp";
import Documents from "../screens/documentsupload";
import Store from "../screens/store";
import PasswordChange from "../screens/passwordchange";
import PopUp from "../screens/popup";
import Product from "../screens/products";
import Home from "../screens/home";
import OfferDetailed from "../screens/offerdetailed";
import ImageDetail from "../screens/imagedetail";
import EditPage from "../screens/editpage";
import EditOffer from "../screens/editoffer";
import Setting from "../screens/setting";
import MyProfile from "../screens/myprofile";
import MyStore from "../screens/mystore";
import MyStoreEdit from "../screens/mystoreedit";
import MyProfileEdit from "../screens/myprofileedit";
import Support from "../screens/support";
import Faq from "../screens/faq";
//---------------------------------------------------------------------------------------------------
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { Entypo } from '@expo/vector-icons';
import TabNavigator from "./tabnavigator";



const stack = createNativeStackNavigator();
const Navigator = props => {
  const navigation = useNavigation();
    return(
      
        <stack.Navigator initialRouteName="LogIn">
             <stack.Screen name="LogIn" component={LogIn} options={{
                headerTitleAlign: 'center',
                headerShown: false,
              title: 'main',
               headerStyle: {
               },
               headerRight: () => (
                <Ionicons name="home-sharp" size={24} color="black"  />)
            }} />  
                 <stack.Screen name="OfferDetailed" component={OfferDetailed} options={{
                
                headerShown: true,
              title: 'Live Offer',
               headerStyle: {
               },
               headerRight: () => (
                <TouchableOpacity onPress={()=> navigation.navigate('EditOffer')}>
                <Text style={{fontSize:15,fontWeight:'bold',color:'#f44b69'}}>Edit Offer</Text>
                </TouchableOpacity>
                
                ),
                headerLeft: () => (
                  <Entypo style={{paddingRight:20}} name="chevron-small-left" size={24} color="black" />)
            }} /> 
              <stack.Screen name="SignUp" component={SignUp} options={{
                headerTitleAlign: 'center',
                headerShown: false,
              title: 'main',
               headerStyle: {
               },
               headerRight: () => (
                <Ionicons name="home-sharp" size={24} color="black"  />)
            }} />    
             <stack.Screen name="Store" component={Store} options={{
                headerTitleAlign: 'center',
                headerShown: false,
              title: 'main',
               headerStyle: {
               },
               headerRight: () => (
                <Ionicons name="home-sharp" size={24} color="black"  />)
            }} />   
             <stack.Screen name="Documents" component={Documents} options={{
                headerTitleAlign: 'center',
                headerShown: false,
              title: 'main',
               headerStyle: {
               },
               headerRight: () => (
                <Ionicons name="home-sharp" size={24} color="black"  />)
            }} /> 
              <stack.Screen name="Otp" component={Otp} options={{
                headerTitleAlign: 'center',
                headerShown: false,
              title: 'main',
               headerStyle: {
               },
               headerRight: () => (
                <Ionicons name="home-sharp" size={24} color="black"  />)
            }} />    
            <stack.Screen name="PasswordChange" component={PasswordChange} options={{
                headerTitleAlign: 'center',
                headerShown: false,
              title: 'main',
               headerStyle: {
               },
               headerRight: () => (
                <Ionicons name="home-sharp" size={24} color="black"  />)
            }} /> 
            <stack.Screen name="PopUp" component={PopUp} options={{
                headerTitleAlign: 'center',
                headerShown: false,
              title: 'main',
               headerStyle: {
               },
               headerRight: () => (
                <Ionicons name="home-sharp" size={24} color="black"  />)
            }} />    
             <stack.Screen name="Product" component={Product} options={{
                
                headerShown: true,
              title: 'Add Products',
               headerStyle: {
                
               },
               headerLeft: () => (
                <AntDesign name="left" size={24} color="black" />)
            }} /> 
            <stack.Screen name="Home" component={TabNavigator} options={{
                headerTitleAlign: 'center',
                headerShown: false,
              title: 'main',
               headerStyle: {
               },}} /> 
            <stack.Screen name="ImageDetail" component={ImageDetail} options={{
                
                headerShown: true,
              title: 'Nike Store',
               headerStyle: {
                
               },
               headerLeft: () => (
                <AntDesign name="left" size={24} color="black" />),
                headerRight: () => (
                  <TouchableOpacity  onPress={()=> navigation.navigate('EditPage')}>
                <Text style={{fontSize:12,fontWeight:'bold',color:'#f44b69',paddingLeft:'5%'}}>Edit Products</Text>
              
                  </TouchableOpacity>
                ),
            }} /> 
             <stack.Screen name="EditPage" component={EditPage} options={{
                headerShown: true,
              title: 'Edit Products',
               headerStyle: {
               },
               headerLeft: () => (
                <TouchableOpacity>
                  <Entypo style={{paddingLeft:20}} name="chevron-thin-left" size={24} color="black" />
                </TouchableOpacity>
               ),
            }} /> 
               <stack.Screen name="EditOffer" component={EditOffer} options={{
                headerShown: true,
              title: 'EEditOffer',
               headerStyle: {
               },
               headerLeft: () => (
                <TouchableOpacity>
                  <Entypo style={{paddingLeft:20}} name="chevron-thin-left" size={24} color="black" />
                </TouchableOpacity>
                ),
            }} /> 
               <stack.Screen name="Setting" component={Setting} options={{
                headerShown: true,
              title: 'Setting',
               headerStyle: {
               },
               headerLeft: () => (
                <TouchableOpacity>
                  <Entypo style={{paddingLeft:20}} name="chevron-thin-left" size={24} color="black" />
                </TouchableOpacity>
                ),
            }} /> 
                <stack.Screen name="MyProfile" component={MyProfile} options={{
                headerShown: true,
              title: 'My Profile',
               headerStyle: {
               },
               headerLeft: () => (
                <TouchableOpacity>
                  <Entypo style={{paddingLeft:20}} name="chevron-thin-left" size={24} color="black" />
                </TouchableOpacity>
                ),
                headerRight: () => (
                  <TouchableOpacity  onPress={()=> navigation.navigate('MyProfileEdit')}>
                <Text style={{fontSize:12,fontWeight:'bold',color:'#f44b69',paddingLeft:'5%'}}>Edit</Text>
              
                  </TouchableOpacity>
                ),
            }} /> 
            <stack.Screen name="MyStore" component={MyStore} options={{
                headerShown: true,
              title: 'My Store',
               headerStyle: {
               },
               headerLeft: () => (
                <TouchableOpacity>
                  <Entypo style={{paddingLeft:20}} name="chevron-thin-left" size={24} color="black" />
                </TouchableOpacity>
                ),
                headerRight: () => (
                  <TouchableOpacity  onPress={()=> navigation.navigate('MyStoreEdit')}>
                <Text style={{fontSize:12,fontWeight:'bold',color:'#f44b69',paddingLeft:'5%'}}>Edit</Text>
              
                  </TouchableOpacity>
                ),
            }} /> 
               <stack.Screen name="MyStoreEdit" component={MyStoreEdit} options={{
                headerShown: true,
              title: 'MyStoreEdit',
               headerStyle: {
               },
               headerLeft: () => (
                <TouchableOpacity>
                  <Entypo style={{paddingRight:20}}name="chevron-thin-left" size={20} color="black" />
                </TouchableOpacity>
                ),
                headerRight: () => (
                  <TouchableOpacity  onPress={()=> navigation.navigate('EditPage')}>
                <Text style={{fontSize:12,fontWeight:'bold',color:'#f44b69',paddingLeft:'5%'}}>Save</Text>
              
                  </TouchableOpacity>
                ),
            }} /> 
             <stack.Screen name="MyProfileEdit" component={MyProfileEdit} options={{
                headerShown: true,
              title: 'MyProfileEdit',
               headerStyle: {
               },
               headerLeft: () => (
                <TouchableOpacity>
                  <Entypo style={{paddingRight:20}}name="chevron-thin-left" size={20} color="black" />
                </TouchableOpacity>
                ),
              
            }} /> 
            <stack.Screen name="Support" component={Support} options={{
                headerShown: true,
              title: 'Support',
               headerStyle: {
               },
               headerLeft: () => (
                <TouchableOpacity>
                  <Entypo style={{paddingRight:20}}name="chevron-thin-left" size={20} color="black" />
                </TouchableOpacity>
               ),
                  headerRight: () => (
                  <TouchableOpacity  onPress={()=> navigation.navigate('EditPage')}>
                <Text style={{fontSize:12,fontWeight:'bold',color:'#f44b69',paddingLeft:'5%'}}>View Faq's</Text>
              
                  </TouchableOpacity>
                ),
                
              
            }} /> 
            <stack.Screen name="Faq" component={Faq} options={{
                headerShown: true,
              title: 'FAQs',
               headerStyle: {
               },
               headerLeft: () => (
                <TouchableOpacity>
                  <Entypo style={{paddingRight:20}}name="chevron-thin-left" size={20} color="black" />
                </TouchableOpacity>
                ),
                headerRight: () => (
                  <TouchableOpacity  onPress={()=> navigation.navigate('EditPage')}>
                <Text style={{fontSize:12,fontWeight:'bold',color:'#f44b69',paddingLeft:'5%'}}>Get Support</Text>
              
                  </TouchableOpacity>
                )
              
            }} /> 
        </stack.Navigator>
      
    )

}
export default Navigator;
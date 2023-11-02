
import React, { useState } from "react";
import { View ,Pressable,Image,TextInput, Text, TouchableOpacity,Dimensions} from "react-native";
import StyleSheet from 'react-native-media-query';
import {
  
   responsiveFontSize,
   responsiveHeight,
   responsiveWidth,
 } from "react-native-responsive-dimensions";
import { useTogglePasswordVisibility } from "../../src/hooks/useTogglePasswordVisibility";
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonMain from "../components/buttonmain";
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const LogIn= props => {
    console.log(props);
    const [myPassword,setPassword]=useState('');
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    return(
        
       
        <SafeAreaView style={{backgroundColor:'white',flex:1}}>
        
        <View>
        <TouchableOpacity>
        <Entypo style={{paddingLeft:10,marginTop:10}} name="chevron-small-left" size={28} color="black" />
        </TouchableOpacity>
        </View>
      
        {/* ----------------------View for height-----------------------*/}
       
        

        <View style={{padding:20}}>
       
        <Text style={{color:"#ff5770",fontWeight:'600',marginLeft:50,marginTop:80,fontSize:20}}>
            Welcome to 24 hrs seller!!
        </Text>
        
     
        <Text style={{lineHeight:10,paddingTop:30,fontWeight:'600',fontSize:12}}>Email address or Username</Text>
        <TextInput
        style={{marginBottom:30,paddingLeft:15,paddingTop:8,paddingBottom:8,height:48,marginTop:10,backgroundColor:'white',borderWidth:1,borderColor:'#F8EBED',borderRadius:18}}
        placeholder="Enter your Email"
        keyboardType="text"
      />
      {/* ----------------------View for height-----------------------*/}
    
        <Text style={{paddingLeft:10,fontWeight:'600',fontSize:12}}>Password</Text>
            {/* ----------------------Password-----------------------*/}
            <TextInput
        style={{marginBottom:30,paddingLeft:15,paddingTop:8,paddingBottom:8,height:48,marginTop:10,backgroundColor:'white',borderWidth:1,borderColor:'#F8EBED',borderRadius:18}}
        placeholder="Enter your Password"
        keyboardType="numeric"
      />
  <TouchableOpacity>
        <Text style={{paddingLeft:10,marginTop:10,fontSize:12,fontWeight:'600',color:'#ff5770'}}>Forgot Password?</Text>
        </TouchableOpacity>
       
         {/* ----------------------View for height-----------------------*/}
        
    <TouchableOpacity onPress={() => { props.navigation.navigate('Otp');}}>
       <LinearGradient
        // Button Linear Gradient
        colors={['#FC7D91', '#D9344E',]}
        style={{marginLeft:5,width:350,marginTop:8,height:46,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:18,marginRight:10}}>
        <Text style={{paddingLeft:3,color:"white",fontSize:12,fontWeight:'600'}}>Log In</Text>
      </LinearGradient>
       </TouchableOpacity>
    <View style={{height:responsiveHeight(8),flexDirection:'row',justifyContent:'center',alignItems:"center"}}>
    <Text style={{fontSize:responsiveFontSize(2.25),color:'grey'}}>Dont have a account? </Text>
    <TouchableOpacity>
    <Text style={{paddingLeft:10,fontWeight:'bold',color:'#ff5770'}}>Sign Up</Text>

    </TouchableOpacity>
  
   

        </View>

        </View>
       
     
          {/* ----------------------View for height-----------------------*/}
          <View style={{height:responsiveHeight(10)}}>
        </View>
      
        <View style={{justifyContent:'center',alignItems:'center',height:responsiveHeight(8)}}>
        <TouchableOpacity>
        <View style={{backgroundColor:'white',width:responsiveWidth(34),alignItems:'center',borderRadius:20,height:responsiveHeight(3),flexDirection:'row'}}>
     
        <Text style={{paddingLeft:10,fontSize:responsiveFontSize(2),fontWeight:'bold',color:'grey'}}>Get Support</Text>
        <SimpleLineIcons style={{paddingLeft:10}}name="earphones-alt" size={16} color="black" />
        </View>
        </TouchableOpacity>
        </View>
        <View style={{alignItems:'center'}}>
        
        <Text style={{paddingLeft:10,fontSize:responsiveFontSize(2),fontWeight:'bold',color:'#4d817a'}}>Privacy policy||Terms and conditions</Text>
        </View>

       
       
      
      
      

        </SafeAreaView>
          
      
    
    )
}

const {ids, styles} = StyleSheet.create({

        
    

    abc: {
       fontSize: 22,
        '@media (max-width: 400px)': {
           fontSize: 12 
        }, 
    }
    

  
});
export default LogIn;

import React, { useState } from "react";
import { View ,Pressable,Image,TextInput, Text, StyleSheet, TouchableOpacity} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { useTogglePasswordVisibility } from "../../src/hooks/useTogglePasswordVisibility";
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonMain from "../components/buttonmain";
import { LinearGradient } from 'expo-linear-gradient';

import OTPInput from 'react-native-otp-forminput';

const Otp= props => {
    console.log(props);
    const [myPassword,setPassword]=useState('');
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    return(
        
       
        <SafeAreaView style={{backgroundColor:'white',flex:1}}>
        <View style={{height:responsiveHeight(5)}}>
        </View>
        <View>
        <TouchableOpacity>
        <Entypo style={{paddingLeft:10}} name="chevron-small-left" size={30} color="black" />
        </TouchableOpacity>
        </View>
        {/* ----------------------View for height-----------------------*/}
        <View style={{height:responsiveHeight(10)}}>
        </View>
        <View style={{}}>
        <Text style={{paddingLeft:22,color:"#ff5770",fontWeight:'700',fontSize:responsiveFontSize(3.22)}}>
           Verify OTP to reset Password
        </Text>
        </View>
        <View style={{padding:10}}>
        <Text style={{paddingLeft:10,marginBottom:10,fontWeight:'bold'}}>Email address</Text>
        <TextInput
        style={{paddingLeft:20,borderWidth:1,marginLeft:13,borderColor:'#fcf3f3',borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6)}}
        placeholder="Enter your Email"
        keyboardType="text"
      />
      {/* ----------------------View for height-----------------------*/}
      <View style={{height:responsiveHeight(5)}}>
        </View>
            <Text style={{paddingLeft:10,marginBottom:10,fontWeight:'bold'}}>Enter OTP send to your Email</Text>
   
            <View style={{height:70}}>
            <OTPInput
        
        type="outline"
        onChange={code => {console.log(code);}}
        numberOfInputs={4}
      />
            </View>
        </View>
        <TouchableOpacity>
        <Text style={{paddingLeft:20,marginTop:10,fontWeight:'bold',color:'#ff5770'}}>Resend OTP?</Text>
        </TouchableOpacity>
         {/* ----------------------View for height-----------------------*/}
         <View style={{height:responsiveHeight(10)}}>
        </View>
    <TouchableOpacity onPress={() => { props.navigation.navigate('PasswordChange');}}>
       <LinearGradient
        // Button Linear Gradient
        colors={['#FC7D91', '#D9344E',]}
        style={{marginLeft:25,width:350,marginTop:8,height:46,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:18,marginRight:10}}>
        <Text style={{paddingLeft:3,color:"white",fontSize:12,fontWeight:'600'}}>Go to the Next page</Text>
      </LinearGradient>
       </TouchableOpacity>
    
          {/* ----------------------View for height-----------------------*/}
          <View style={{height:responsiveHeight(23)}}>
      
        </View>
      
       
        <View style={{alignItems:'center'}}>
        
        <Text style={{paddingLeft:10,fontSize:responsiveFontSize(2),fontWeight:'bold',color:'#4d817a'}}>Privacy policy||Terms and conditions</Text>
        </View>

       
       
      
      
      

        </SafeAreaView>
          
      
    
    )
}

const styles = StyleSheet.create({
    button:{
        width: '100%',
        height:40,
        justifyContent:'center',
        alignItems:'center',
        
    },
});
export default Otp;
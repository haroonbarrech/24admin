import React from "react";
import { View ,Image,TextInput,FlatList, Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView, Animated} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import OTPInput from 'react-native-otp-forminput';
import { LinearGradient } from 'expo-linear-gradient';
import { SimpleLineIcons } from '@expo/vector-icons';
const MyProfileEdit= props => {
    console.log(props);
    return(
        
 
        <SafeAreaView style={{backgroundColor:'white',display:'flex',flex:1}}>
        
     <Text style={{lineHeight:10,paddingLeft:20,paddingTop:30,paddingBottom:3,fontWeight:'600',fontSize:12}}>User Name*</Text>
        <TextInput
        style={{height:45,paddingLeft:20,borderWidth:1,borderColor:'#F8EBED',borderRadius:18,marginLeft:15,marginRight:15}}
        placeholder="Sample text"
        keyboardType="text"
      />
       <Text style={{lineHeight:10,paddingLeft:20,paddingTop:30,paddingBottom:3,fontWeight:'600',fontSize:12}}>Work Email**</Text>
        <TextInput
        style={{height:45,paddingLeft:20,borderWidth:1,borderColor:'#F8EBED',borderRadius:18,marginLeft:15,marginRight:15}}
        placeholder="john@24hrs.com"
        keyboardType="text"
      />
       <Text style={{lineHeight:10,paddingLeft:20,paddingTop:30,paddingBottom:3,fontWeight:'600',fontSize:12}}>Mobile Number*</Text>
        <TextInput
        style={{height:45,paddingLeft:20,borderWidth:1,borderColor:'#F8EBED',borderRadius:18,marginLeft:15,marginRight:15}}
        placeholder="+91 +91 98755 28763"
        keyboardType="text"
      />
       <Text style={{lineHeight:10,paddingLeft:20,paddingTop:30,paddingBottom:3,fontWeight:'600',fontSize:12}}>Enter Mobile Number OTP*</Text>
       <View style={{height:70}}>
            <OTPInput
        
        type="outline"
        onChange={code => {console.log(code);}}
        numberOfInputs={4}
      />
            </View>
    <Text style={{lineHeight:10,color:'#D9344E',paddingLeft:20,paddingTop:5,paddingBottom:3,fontWeight:'600',fontSize:12}}>Resend OTP</Text>

    <TouchableOpacity>
       <LinearGradient
        // Button Linear Gradient
        colors={['#FC7D91', '#D9344E',]}
        style={{marginLeft:25,width:350,marginTop:85,height:46,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:18,marginRight:10}}>
        <Text style={{paddingLeft:3,color:"white",fontSize:12,fontWeight:'600'}}>Save changes</Text>
      </LinearGradient>
       </TouchableOpacity>
       <View style={{marginLeft:25,width:350,marginTop:20,height:56,backgroundColor:'#F5F5F5',flexDirection:'row',alignItems:'center',borderRadius:12,marginRight:10}}>
       <SimpleLineIcons style={{paddingLeft:23}} name="options" size={24} color="black" />
       <Text style={{paddingLeft:23,color:"black",fontSize:12,fontWeight:'600'}}>Change password</Text>
       </View>
       <View style={{height:"23%",alignItems:'center'}}>
     <Text style={{padding:15,color:"#6A6A6A",fontWeight:'400',fontSize:10,justifyContent:'center'}}>
     version 2.0 
        </Text>
        <Text style={{padding:10,color:"#05392E",fontWeight:'400',fontSize:10,justifyContent:'center'}}>
        Privacy policy | Terms and conditions
        </Text>
        <Text style={{padding:10,color:"#05392E",fontWeight:'400',fontSize:10,justifyContent:'center'}}>
        2022 © COSMOZEAL TECH LLP
        </Text>


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
export default MyProfileEdit;
import React from "react";
import { View ,Image,TextInput, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonMain from "../components/buttonmain";
import { LinearGradient } from 'expo-linear-gradient';

const SignUp= props => {
    console.log(props);
    return(
        
       
        <SafeAreaView style={{backgroundColor:'#fafafa',flex:1}}>
        <ScrollView>
        <View style={{height:responsiveHeight(5)}}>
        </View>
        <View style={{borderWidth:1,borderColor:'lightgrey',height:responsiveHeight(5),justifyContent:'center'}}>
        <TouchableOpacity>
        <Entypo style={{paddingLeft:10}} name="chevron-small-left" size={30} color="black" />
        </TouchableOpacity>
        </View>
        {/* ----------------------View for height-----------------------*/}
        <View style={{height:responsiveHeight(2)}}>
        </View>
       
        <View style={{}}>
        <Text style={{paddingLeft:22,color:"#ff5770",fontWeight:'700',fontSize:responsiveFontSize(3.22)}}>
           Create Account
        </Text>
        </View>
        <View style={{padding:10}}>
        <Text style={{paddingLeft:10,fontWeight:'bold'}}>User Name*</Text>
        <TextInput
        style={{paddingLeft:20,borderWidth:1,marginLeft:13,borderColor:'grey',borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6)}}
        placeholder="Username"
        keyboardType="text"
      />
       <Text style={{marginTop:25,paddingLeft:10,fontWeight:'bold'}}>Work Email*</Text>
        <TextInput
        style={{paddingLeft:20,borderWidth:1,marginLeft:13,borderColor:'grey',borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6)}}
        placeholder="Enter your Email"
        keyboardType="text"
      />
       <Text style={{marginTop:5,paddingLeft:10}}>Verification will be send to be ur Email</Text>
      <Text style={{marginTop:25,paddingLeft:10,fontWeight:'bold'}}>New Password*</Text>
       <TextInput
        style={{paddingLeft:20,marginLeft:13,borderWidth:1,borderColor:'grey',borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6)}}
        placeholder="Enter your Password"
        keyboardType="numeric"
      />
      <Text style={{marginTop:25,paddingLeft:10,fontWeight:'bold'}}>Confirm Password*</Text>
       <TextInput
        style={{paddingLeft:20,marginLeft:13,borderWidth:1,borderColor:'grey',borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6)}}
        placeholder="Enter your Password"
        keyboardType="numeric"
      />
         <Text style={{marginTop:25,paddingLeft:10,fontWeight:'bold'}}>Mobile Number*</Text>
       <TextInput
        style={{paddingLeft:20,marginLeft:13,borderWidth:1,borderColor:'grey',borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6)}}
        placeholder="+91"
        keyboardType="numeric"
      />
       <Text style={{marginTop:25,paddingLeft:10,fontWeight:'bold'}}>Enter Mobile Number OTP*</Text>
        <TextInput
        style={{paddingLeft:20,borderWidth:1,marginLeft:13,borderColor:'grey',borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6)}}
        placeholder="Enter your Email"
        keyboardType="text"
      />
       <TouchableOpacity>
       <Text style={{paddingLeft:10,marginTop:10,fontWeight:'bold',color:'#ff5770'}}>Resend OTP?</Text>
        </TouchableOpacity>
     
      
        </View>
      
    <TouchableOpacity onPress={() => { props.navigation.navigate('Documents');}}>
       <LinearGradient
        // Button Linear Gradient
        colors={['#FC7D91', '#D9344E',]}
        style={{marginLeft:25,width:350,marginTop:8,height:46,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:18,marginRight:10}}>
        <Text style={{paddingLeft:3,color:"white",fontSize:12,fontWeight:'600'}}>Go to the Next page</Text>
      </LinearGradient>
       </TouchableOpacity>
          {/* ----------------------View for height-----------------------*/}
          <View style={{height:responsiveHeight(3)}}>
        </View>
      
       
        <View style={{alignItems:'center',flexDirection:'row',alignItems:'center',justifyContent:'center',height:responsiveHeight(5)}}>
        
        <Text style={{paddingLeft:10,fontSize:responsiveFontSize(2),fontWeight:'bold',color:'#4d817a'}}>By signing up you agree to our</Text>
        <TouchableOpacity>
       <Text style={{paddingLeft:10,marginTop:10,fontWeight:'bold',color:'#ff5770'}}>T&C</Text>
        </TouchableOpacity>
        </View>

       
       
      
      
        </ScrollView>

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
export default SignUp;
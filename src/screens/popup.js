
import React, { useState } from "react";
import { View ,BodyButton,Pressable,Image,TextInput, Text, StyleSheet, TouchableOpacity} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { useTogglePasswordVisibility } from "../../src/hooks/useTogglePasswordVisibility";
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonMain from "../components/buttonmain";
import { SimpleLineIcons } from '@expo/vector-icons';

import OTPInput from 'react-native-otp-forminput';

const PopUp= props => {
    console.log(props);
    const [myPassword,setPassword]=useState('');
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    return(
        
       
        <SafeAreaView style={{backgroundColor: '#7d7777',flex:1}}>
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
        <Text style={{paddingLeft:15,color:"#ff5770",fontWeight:'700',fontSize:responsiveFontSize(3.2)}}>
           Pop Up page
        </Text>
        </View>
        {/* ----------------------Pop Up-----------------------*/}
        <View style={{padding:10,backgroundColor:'white',height:responsiveHeight(50),margin:20,borderRadius:18}}>
        <View style={{height:responsiveHeight(8)}}>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Image
        style={{width: responsiveWidth(30),height: responsiveHeight(10)}}
        source={require('../../assets/tick.webp')}
      />
      </View>
      <View style={{height:responsiveHeight(3)}}>
        </View>
        <View style={{marginTop:25,height:responsiveHeight(7),justifyContent:"center",alignItems:'center'}}>
       
        <Text style={{paddingLeft:40,fontSize:responsiveFontSize(3)}}>You have Successful</Text>
        <Text style={{paddingLeft:40,fontSize:responsiveFontSize(3)}}>signed up </Text>
            <Text style={{marginTop:20,paddingLeft:30,}}>Lets start Adding products</Text>
            </View>
            <View style={{height:responsiveHeight(8)}}>
        </View>
              
        <View style={{ marginLeft:15,display: 'flex',borderRadius:26,backgroundColor:'#ff5770',justifyContent:"center",
        alignItems:'center', width: responsiveWidth(80),height: responsiveHeight(7)}}>
    <ButtonMain title="Continue" textColor="white" size={responsiveFontSize(2)} weight="bold" onPress={() => { props.navigation.navigate('PasswordChange');}}/>
    </View>
   </View>
   {/* ----------------------End for height-----------------------*/}
         
   <View style={{ marginLeft:15,display: 'flex',borderRadius:26,backgroundColor:'#ff5770',justifyContent:"center",
        alignItems:'center', width: responsiveWidth(40),height: responsiveHeight(3)}}>
    <ButtonMain title="Verify OTP" textColor="white" size={responsiveFontSize(2)} weight="bold" onPress={() => { props.navigation.navigate('PasswordChange');}}/>
    </View>
    <View style={{height:responsiveHeight(3)}}>
        </View>
    <View style={{ marginLeft:15,display: 'flex',borderRadius:26,backgroundColor:'#ff5770',justifyContent:"center",
        alignItems:'center', width: responsiveWidth(40),height: responsiveHeight(3)}}>
    <ButtonMain title="Verify OTP" textColor="white" size={responsiveFontSize(2)} weight="bold" onPress={() => { props.navigation.navigate('PasswordChange');}}/>
    </View>
 
         {/* ----------------------View for height-----------------------*/}
         <View style={{height:responsiveHeight(5)}}>
        </View>
       
        <View style={{ marginLeft:15,display: 'flex',borderRadius:26,backgroundColor:'#ff5770',justifyContent:"center",
        alignItems:'center', width: responsiveWidth(90),height: responsiveHeight(7)}}>
    <ButtonMain title="Verify OTP" textColor="white" size={responsiveFontSize(2)} weight="bold" onPress={() => { props.navigation.navigate('PasswordChange');}}/>
    </View>
    
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
    signUpCard: {
        backgroundColor: '#fff',
        width: responsiveWidth(85),
        borderRadius: 20,
        paddingVertical: responsiveHeight(5),
        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        position: 'absolute',
        top: '25.5%',
        alignSelf: 'center',
    },
    tinyCorrect: {
        width: 100,
        height: 100,
        display: 'flex',
        alignSelf: 'center',
    },
});
export default PopUp;
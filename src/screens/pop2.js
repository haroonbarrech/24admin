

import React, { useState } from "react";
import { View ,Pressable,Image,TextInput, Text, StyleSheet, TouchableOpacity} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { useTogglePasswordVisibility } from "../../src/hooks/useTogglePasswordVisibility";
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonMain from "../components/buttonmain";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';




const Produ= props => {
    console.log(props);
    const [myPassword,setPassword]=useState('');
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    return(
        
       
        <SafeAreaView style={{backgroundColor:'#fafafa',flex:1}}>
        
  
        {/* ----------------------View for height-----------------------*/}
    
        <View style={{padding:10}}>
        <Text style={{paddingLeft:10,marginBottom:10,fontWeight:'bold'}}>Category</Text>
        <View style={{ position: 'relative', display: 'flex', flexDirection: 'row',
        paddingLeft:20,borderWidth:1,marginLeft:13,borderColor:'#fcf2f4',borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6),
         justifyContent: 'center', alignItems: 'center'}}>
       <View style={{width: '100%', borderBottomColor: 'grey',  position: 'relative', display: 'flex', 
        flexDirection: 'row', justifyContent: 'space-between' }}>
       <TextInput
       style={{width: '80%'}}    
       placeholder=" Select Category"
        />
    <TouchableOpacity>
    <Entypo name="chevron-small-down" size={24} color="black"  style={{paddingRight:10,width: '100%'}}  />
    </TouchableOpacity>
</View>
</View>
   <Text style={{marginTop:15,paddingLeft:10,marginBottom:10,fontWeight:'bold'}}>Sub Category</Text>
        <View style={{ position: 'relative', display: 'flex', flexDirection: 'row',
        paddingLeft:20,borderWidth:1,marginLeft:13,borderColor:'#fcf2f4',borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6),
         justifyContent: 'center', alignItems: 'center'}}>
       <View style={{width: '100%', borderBottomColor: 'grey',  position: 'relative', display: 'flex', 
        flexDirection: 'row', justifyContent: 'space-between' }}>
       <TextInput
       style={{width: '80%'}}    
       placeholder="T shirt"
        />
    <TouchableOpacity>
    <Entypo name="chevron-small-down" size={24} color="black"  style={{paddingRight:10,width: '100%'}}  />
    </TouchableOpacity>
</View>
</View>
   <Text style={{marginTop:15,paddingLeft:10,marginBottom:10,fontWeight:'bold'}}>Product Name</Text>
        <View style={{ position: 'relative', display: 'flex', flexDirection: 'row',
        paddingLeft:20,borderWidth:1,marginLeft:13,borderColor:'#fcf2f4',borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6),
         justifyContent: 'center', alignItems: 'center'}}>
       <View style={{width: '100%', borderBottomColor: 'grey',  position: 'relative', display: 'flex', 
        flexDirection: 'row', justifyContent: 'space-between' }}>
       <TextInput
       style={{width: '80%'}}    
       placeholder="T shirt"
        />
</View>
</View>

<View style={{height:responsiveHeight(5) ,flexDirection:'row'}}>
   <Text style={{marginTop:15,paddingLeft:10,marginBottom:10,fontWeight:'bold'}}>Product Price</Text>
   <Text style={{marginTop:15,paddingLeft:50,marginBottom:10,fontWeight:'bold'}}>Product Name</Text>
   </View>
   <View style={{height:responsiveHeight(7),flexDirection:'row'}}>
   
        <View style={{ position: 'relative', display: 'flex', flexDirection: 'row',
        paddingLeft:20,borderWidth:1,marginLeft:13,borderColor:'#fcf2f4',borderRadius:18,width:responsiveWidth(30),height:responsiveHeight(6),
         justifyContent: 'center', alignItems: 'center'}}>
       <View style={{width: '100%', borderBottomColor: 'grey',  position: 'relative', display: 'flex', 
        flexDirection: 'row', justifyContent: 'space-between' }}>
       <TextInput
       style={{width: '80%'}}    
       placeholder="₹ 0"
        />
</View>
</View>
        <View style={{ position: 'relative', display: 'flex', flexDirection: 'row',
        paddingLeft:20,borderWidth:1,marginLeft:13,borderColor:'#fcf2f4',borderRadius:18,width:responsiveWidth(30),height:responsiveHeight(6),
         justifyContent: 'center', alignItems: 'center'}}>
       <View style={{width: '100%', borderBottomColor: 'grey',  position: 'relative', display: 'flex', 
        flexDirection: 'row', justifyContent: 'space-between' }}>
       <TextInput
       style={{width: '80%'}}    
       placeholder="Kg"
        />
    <TouchableOpacity>
    <Entypo name="chevron-small-down" size={24} color="lightgrey"  style={{paddingRight:50}}  />
    </TouchableOpacity>
</View>
</View>
 </View>
      
      <Text style={{marginTop:7,paddingLeft:10,fontWeight:'bold'}}>Image</Text>
      {/* ----------------------View for height-----------------------*/}
      
         {/* ----------------------View for height-----------------------*/}
         <View style={{height:responsiveHeight(25),margin:10,justifyContent:'center',alignItems:'center',borderRadius:18,backgroundColor:'white'}}>
         <View style={{ marginTop:10,flexDirection:'row',display: 'flex',
         borderRadius:8,borderWidth:0.2255,backgroundColor:'white',justifyContent:"center",
        alignItems:'center', width: responsiveWidth(50),height: responsiveHeight(5)}}>
        <Feather style={{paddingLeft:40}} name="upload" size={24} color="#ff5770" />
    <ButtonMain title="Upload Images" textColor="#ff5770" size={responsiveFontSize(2)} 
    weight="bold" onPress={() => { props.navigation.navigate('PasswordChange');}}/>
    </View>
    <Text style={{marginTop:15,paddingLeft:10,marginBottom:10,fontWeight:'bold'}}>------------------------------Or ----------------------------</Text>
    <View style={{ marginTop:10,display: 'flex',flexDirection:'row',borderRadius:8,backgroundColor:'white',justifyContent:"center",
        alignItems:'center',borderWidth:0.2255, width: responsiveWidth(85),height: responsiveHeight(5)}}>
        <AntDesign style={{paddingLeft:40}} name="picture" size={24} color="#ff5770" />
    <ButtonMain title=" Choose images from our gallery" textColor="#ff5770" size={responsiveFontSize(2)} weight="bold" onPress={() => { props.navigation.navigate('PasswordChange');}}/>
    </View>
        </View>
        <View style={{ marginLeft:8,marginTop:10,display: 'flex',borderRadius:26,backgroundColor:'#ff5770',justifyContent:"center",
        alignItems:'center', width: responsiveWidth(90),height: responsiveHeight(7)}}>
    <ButtonMain title="Verify OTP" textColor="white" size={responsiveFontSize(2)} weight="bold" onPress={() => { props.navigation.navigate('PasswordChange');}}/>
    </View>
    
          {/* ----------------------View for height-----------------------*/}
        
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
export default Produ;
import React, { useState } from "react";
import { View ,BodyButton,Pressable,Image,TextInput, Text, StyleSheet, TouchableOpacity} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { LinearGradient } from 'expo-linear-gradient';

//------------------------------------------------------------------------------------
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


const Product= props => {

 
   
    
    return(
 
              <View>
           <View style={{backgroundColor:'white',height:responsiveHeight(18),alignItems:'center'}}>
           <View style={{marginTop:20,backgroundColor:'#f5f5f5',height:responsiveHeight(4),width:responsiveWidth(90),marginLeft:8,marginRight:8,borderRadius:18,flexDirection:'row',alignItems:'center'}}>
           <View style={{backgroundColor:'#f5f5f5',height:responsiveHeight(4),width:responsiveWidth(20),borderRadius:18,justifyContent:"center",alignItems:'center'}}>
        <Text style={{paddingLeft:15,color:"#968b8d",fontWeight:'700',fontSize:responsiveFontSize(2),}}>
           Branch
        </Text>

           </View>
           <View style={{margin:10,borderBottomRightRadius:8,borderTopRightRadius:8,backgroundColor:'white',height:responsiveHeight(3),width:responsiveWidth(66),flexDirection:'row'}}>
           <Text style={{paddingLeft:15,color:"#594f50",fontWeight:'700',fontSize:responsiveFontSize(2),}}>
           RS puram,Coimbatore
        </Text>
        <Entypo style={{paddingLeft:60}}name="chevron-small-down" size={24} color="black" />
           </View>
        

           </View>
           <View style={{marginTop:20,width:"100%",height:60,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
           <View style={{alignItems:'center',backgroundColor:'white',borderWidth:1,borderColor:"#F8EBED",flexDirection:'row',width:"60%",height:40,borderRadius:18}}>
           <EvilIcons style={{paddingLeft:10}} name="search" size={24} color="black" />
           <Text style={{paddingLeft:15,color:"#786D6F",fontWeight:'400',fontSize:12}}>
          Search Your Products
          </Text>

           </View>
           <View style={{marginLeft:5,alignItems:'center',backgroundColor:'white',borderWidth:1,borderColor:"#F8EBED",flexDirection:'row',width:"30%",height:40,borderRadius:18}}>
           <Text style={{paddingLeft:15,color:"#786D6F",fontWeight:'400',fontSize:12}}>
          Sort Name
          </Text>

           </View>
          

           </View>
         
      </View>
      <View style={{margin:20,backgroundColor:"white",height:114,flexDirection:'row',borderRadius:18,flexDirection:'row'}}>
      <View style={{width:"40%",height:114,flexDirection:'row',
      justifyContent:'center',alignItems:'center',borderRadius:18,flexDirection:'row'}}>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('ImageDetail');}}>
      <Image
        style={{height:110,width:120,borderRadius:22,borderWidth:1}}
        source={require('../../assets/shirt2.png')}
      />

      </TouchableOpacity>
    

</View>
<View style={{width:"60%",height:114,flexDirection:'row',
      justifyContent:'center',flexDirection:'column'}}>
        <Text style={{paddingLeft:10,color:"#382E30",fontSize:14,fontWeight:'600'}}>
          Nike Cotton T-shirt
           </Text>
           <Text style={{paddingLeft:10,color:"#5C5962",fontSize:16,fontWeight:'600'}}>
           ₹421 / 1 piece 
           </Text>
        
           <View style={{marginTop:23,height:35,flexDirection:'row',
      justifyContent:'space-between',borderRadius:18,flexDirection:'row'}}>
       <View style={{backgroundColor:'white',borderWidth:1,borderColor:"lightgrey",width:"45%",height:34,flexDirection:'row',
      justifyContent:'center',alignItems:'center',borderRadius:10,flexDirection:'row'}}>
         <Text style={{paddingLeft:10,color:"#5C5962",fontSize:16,fontWeight:'600'}}>
           Alarm:
           </Text>
               <Text style={{paddingLeft:3,color:"#D9344E",fontSize:16,fontWeight:'600'}}>
           24
           </Text>

      </View>
   
         <LinearGradient
        // Button Linear Gradient
        colors={['#FC7D91', '#D9344E']}
        style={{width:"45%",height:34,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:10,marginRight:10}}>
        <Text style={{paddingLeft:3,color:"white",fontSize:12,fontWeight:'600'}}>Post Offers</Text>
      </LinearGradient>



      </View>
     
      </View>

      
       
    
    

      </View>
      </View>

       

   
            
    
    )
}

const styles = StyleSheet.create({
    button:{
        width: '100%',
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"red",
        
    },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff',alignItems:'center' },
    head: {  height: 30,  backgroundColor: '#f1f8ff'  },
    header: { height: 30, color:'#D9344E',backgroundColor: '#E6E6E6' },
    wrapper: { flexDirection: 'row' ,alignItems:'center'},
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 38 },
    text: { textAlign: 'center' },
    footer: { backgroundColor:'red',paddingTop:20,paddingBottom:20,borderRadius:18,justifyContent:'center',alignItems:'center'},
        footer1: { backgroundColor:'white',paddingTop:16,paddingBottom:16,width:"35%",borderRadius:18,},

});
export default Product;
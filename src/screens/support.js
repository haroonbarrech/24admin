import React from "react";
import { View ,Image,FlatList, TextInput,Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView, Animated} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const Support= props => {
    console.log(props);
    return(
        
 
          
        <SafeAreaView style={{backgroundColor:'white',display:'flex',flex:1}}>
        
        <Text style={{lineHeight:10,paddingLeft:20,color:'#524D62',paddingTop:30,paddingBottom:3,fontWeight:'600',fontSize:16}}>Contact us for any help</Text>
          <View style={{marginLeft:20,backgroundColor:'#F5F5F5',height:"20%",width:"90%",borderRadius:18}}>
          <View style={{position:'relative',backgroundColor:'#F5F5F5',borderWidth:1,borderColor:'lightgrey',marginLeft:10,marginRight:20,marginTop:10, width: '90%',flexDirection:'row',height:50,alignItems:'center',borderRadius:12}}>
          <MaterialCommunityIcons style={{paddingLeft:20}}name="email-newsletter" size={24} color="black" />
             <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
             support@24hours.com
        </Text> 
     </View>
     <View style={{position:'relative',backgroundColor:'#F5F5F5',borderWidth:1,borderColor:'lightgrey',marginLeft:10,marginRight:20,marginTop:10, width: '90%',flexDirection:'row',height:50,alignItems:'center',borderRadius:12}}>
     <Feather style={{paddingLeft:20}} name="phone" size={24} color="black" />
             <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
             +91 86376 39220
        </Text> 
     </View>

</View>
     <Text style={{lineHeight:10,paddingLeft:20,color:'#524D62',paddingTop:30,paddingBottom:3,fontWeight:'600',fontSize:16}}>Talk to us?</Text>
     <TextInput
        style={{marginBottom:30,paddingLeft:15,paddingTop:8,paddingBottom:8,marginLeft:20,marginRight:20,height:"20%",marginTop:10,backgroundColor:'white',borderWidth:1,borderColor:'#F8EBED',borderRadius:18}}
        placeholder="Tell us your issues..."
        keyboardType="text"
      />
           <TouchableOpacity>
       <LinearGradient
        // Button Linear Gradient
        colors={['#FC7D91', '#D9344E',]}
        style={{marginLeft:25,width:350,marginTop:5,height:46,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:18,marginRight:10}}>
        <Text style={{paddingLeft:3,color:"white",fontSize:12,fontWeight:'600'}}>Save changes</Text>
      </LinearGradient>
       </TouchableOpacity>
       <View style={{height:"23%",alignItems:'center',marginTop:85,}}>
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
export default Support;
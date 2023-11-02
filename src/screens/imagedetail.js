import React from "react";
import { View ,Image,FlatList, Text, StyleSheet,SafeAreaView} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { LinearGradient } from 'expo-linear-gradient';
const ImageDetail= props => {
    console.log(props);
    return(
        
        <SafeAreaView style={{backgroundColor:'white',display:'flex',flex:1}}>
              
        <Image
        style={{marginTop:15,marginLeft:20,marginRight:20,height:"50%",width:"90%",borderRadius:12}}
        source={require('../../assets/shirt3.png')}
      />
            
           
           <View style={{marginTop:30,height:'15%',flexDirection:'row'}}>
           <View style={{height:'70%',width:'70%'}}>
           <Text style={{paddingLeft:15,color:"#382E30",fontSize:18,fontWeight:'700'}}>
          Nike Cotton T-shirt
           </Text>
           <Text style={{paddingLeft:15,paddingTop:10,color:"#5C5962",fontSize:18,fontWeight:'600'}}>
           ₹421 / 1 piece 
           </Text>
           </View>
           <View style={{height:'70%',width:'30%',alignItems:'center',justifyContent:'center'}}>
           <View style={{backgroundColor:'white',borderWidth:1,borderColor:"lightgrey",width:"85%",height:34,flexDirection:'row',
      justifyContent:'center',alignItems:'center',borderRadius:10,flexDirection:'row'}}>
         <Text style={{paddingLeft:10,color:"#5C5962",fontSize:16,fontWeight:'600'}}>
           Alarm:
           </Text>
               <Text style={{paddingLeft:3,color:"#D9344E",fontSize:16,fontWeight:'600'}}>
           24
           </Text>

      </View>
           </View>


           </View>
           
         <LinearGradient
        // Button Linear Gradient
        colors={['#FC7D91', '#D9344E']}
        style={{marginLeft:25,width:350,height:46,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:18,marginRight:10}}>
        <Text style={{paddingLeft:3,color:"white",fontSize:12,fontWeight:'600'}}>Post Offers</Text>
      </LinearGradient>
      <View style={{backgroundColor:"#F5F5F5",margin:25,width:350,height:34,borderRadius:18,flexDirection:'row',alignItems:'center'}}>
      <Text style={{paddingLeft:20,color:"#5C5962",fontSize:14,fontWeight:'900'}}>
           Category:
           </Text>
               <Text style={{paddingLeft:23,color:"#382E30",fontSize:12,fontWeight:'400'}}>
           Clothing
           </Text>

      </View>
      <View style={{backgroundColor:"#F5F5F5",marginLeft:25,marginRight:25,width:350,height:34,borderRadius:18,flexDirection:'row',alignItems:'center'}}>
      <Text style={{paddingLeft:20,color:"#5C5962",fontSize:14,fontWeight:'900'}}>
            Sub Category:
           </Text>
               <Text style={{paddingLeft:23,color:"#382E30",fontSize:12,fontWeight:'400'}}>
          T Shirts
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
export default ImageDetail;
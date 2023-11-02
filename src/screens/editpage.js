import React from "react";
import { View ,Image,TextInput, Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView, Animated} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { LinearGradient } from 'expo-linear-gradient';
//-------------------------------------------------------------------------------------------------------------------------
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const EditPage= props => {
    console.log(props);
    return(
        
 <SafeAreaView>
<Text style={{marginTop:25,paddingLeft:20,fontWeight:'600',fontSize:12}}>Category</Text>
        <TextInput
         style={{position:'relative',paddingLeft:20,marginLeft:13,marginTop:10,borderWidth:1,borderColor:'#F8EBED',backgroundColor:"white",borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6)}}
         placeholder="Clothing"
         keyboardType="text"
       />
       <TouchableOpacity>
       <Entypo style={{position:'absolute',right:45,bottom:10}} name="chevron-small-down" size={24} color="lightgrey" />

       </TouchableOpacity>
       <Text style={{marginTop:25,paddingLeft:20,fontWeight:'600',fontSize:12}}>Sub Category</Text>
        <TextInput
         style={{position:'relative',paddingLeft:20,marginLeft:13,marginTop:10,borderWidth:1,borderColor:'#F8EBED',backgroundColor:"white",borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6)}}
         placeholder="T-shirts"
         keyboardType="text"
       />
       <TouchableOpacity>
       <Entypo style={{position:'absolute',right:45,bottom:10}} name="chevron-small-down" size={24} color="lightgrey" />

       </TouchableOpacity>
       <Text style={{marginTop:25,paddingLeft:20,fontWeight:'600',fontSize:12}}>Product Name</Text>
        <TextInput
         style={{position:'relative',paddingLeft:20,marginLeft:13,marginTop:10,borderWidth:1,borderColor:'#F8EBED',backgroundColor:"white",borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6)}}
         placeholder="Nike Cotton"
         keyboardType="text"
       />
       <View style={{height:90,flexDirection:'row',marginTop:20}}>
       <View style={{height:90,width:'50%',flexDirection:'column'}}>
       <Text style={{marginTop:5,paddingLeft:20,fontWeight:'600',fontSize:12}}>Product Name</Text>
        <TextInput
         style={{position:'relative',marginTop:10,paddingLeft:20,marginLeft:13,borderWidth:1,borderColor:'#F8EBED',backgroundColor:"white",borderRadius:18,width:responsiveWidth(40),height:responsiveHeight(6)}}
         placeholder="₹ 300"
         keyboardType="text"
       />
       </View>
       <View style={{height:90,width:'50%',flexDirection:'column'}}>
       <Text style={{marginTop:5,paddingLeft:20,fontWeight:'600',fontSize:12}}>Sub Category</Text>
        <TextInput
         style={{position:'relative',paddingLeft:20,marginLeft:13,marginTop:10,borderWidth:1,borderColor:'#F8EBED',backgroundColor:"white",borderRadius:18,width:responsiveWidth(30),height:responsiveHeight(6)}}
         placeholder="T-shirts"
         keyboardType="text"
       />
       <TouchableOpacity>
       <Entypo style={{position:'absolute',right:75,bottom:10}} name="chevron-small-down" size={24} color="lightgrey" />

       </TouchableOpacity>
       </View>
       </View>
       <Text style={{marginTop:5,paddingLeft:20,fontWeight:'600',fontSize:12}}>Images</Text>
       <View style={{position:'relative',backgroundColor:'white',height:200,margin:15,borderRadius:18,alignItems:'center',justifyContent:'space-between'}}>
       <View style={{position:'absolute',top:90,backgroundColor:'white',borderColor:'lightgrey',borderWidth:1,width:'50%',flexDirection:'row',borderRadius:12,alignItems:"center"}}>
       <MaterialCommunityIcons style={{paddingLeft:28}} name="cloud-upload-outline" size={24} color="#D9344E" />
       <Text style={{paddingLeft:15,color:"#D9344E",fontSize:12,fontWeight:'600'}}>
          Upload Images 
           </Text>

       </View>
       <Text style={{position:'absolute',bottom:64,marginTop:5,paddingLeft:20,fontWeight:'600',fontSize:12}}>--------- or ----------</Text>
       <View style={{position:'absolute',bottom:24,backgroundColor:'white',borderColor:'lightgrey',borderWidth:1,width:'70%',flexDirection:'row',borderRadius:12,alignItems:"center"}}>
       <AntDesign style={{paddingLeft:28}} name="picture" size={24} color="#D9344E" />
       <Text style={{paddingLeft:15,color:"#D9344E",fontSize:12,fontWeight:'600'}}>
       Choose images from our galley
           </Text>

       </View>


       </View>
       <TouchableOpacity>
       <LinearGradient
        // Button Linear Gradient
        colors={['#FC7D91', '#D9344E',]}
        style={{marginLeft:25,width:350,height:46,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:18,marginRight:10}}>
        <Text style={{paddingLeft:3,color:"white",fontSize:12,fontWeight:'600'}}>Save Products</Text>
      </LinearGradient>
       </TouchableOpacity>
  


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
export default EditPage;
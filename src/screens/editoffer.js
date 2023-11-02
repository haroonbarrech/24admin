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
<Text style={{marginTop:25,paddingLeft:20,fontWeight:'600',fontSize:12}}>Select Product</Text>
        <TextInput
         style={{position:'relative',paddingLeft:20,marginLeft:13,marginTop:10,borderWidth:1,borderColor:'#F8EBED',backgroundColor:"white",borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(10)}}
         placeholder="Select Product"
         keyboardType="text"
       />
       <TouchableOpacity>
       <Entypo style={{position:'absolute',right:45,bottom:25}} name="chevron-small-down" size={24} color="lightgrey" />

       </TouchableOpacity>
       <Text style={{marginTop:25,paddingLeft:20,fontWeight:'600',fontSize:12}}>Select Product</Text>
        <TextInput
         style={{position:'relative',paddingLeft:20,marginLeft:13,marginTop:10,borderWidth:1,borderColor:'#F8EBED',backgroundColor:"white",borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6)}}
         placeholder="Buy 1 Get 1 Free"
         keyboardType="text"
       />
       <TouchableOpacity>
       <Entypo style={{position:'absolute',right:45,bottom:10}} name="chevron-small-down" size={24} color="lightgrey" />

       </TouchableOpacity>
       <Text style={{marginTop:25,paddingLeft:20,fontWeight:'600',fontSize:12}}>Final Price</Text>
        <TextInput
         style={{position:'relative',paddingLeft:20,marginLeft:13,marginTop:10,borderWidth:1,borderColor:'#F8EBED',backgroundColor:"white",borderRadius:18,width:responsiveWidth(50),height:responsiveHeight(6)}}
         placeholder="₹ 000"
         keyboardType="text"
       />
              <Text style={{marginTop:5,paddingLeft:20,fontWeight:'600',fontSize:12}}>Expired Date</Text>

       <View style={{height:90,flexDirection:'row',marginTop:5}}>
       <View style={{height:90,width:'30%',flexDirection:'column'}}>

       <TextInput
         style={{position:'relative',paddingLeft:20,marginLeft:13,marginTop:10,borderWidth:1,borderColor:'#F8EBED',backgroundColor:"white",borderRadius:18,width:responsiveWidth(24),height:responsiveHeight(6)}}
         placeholder="Date"
         keyboardType="text"
       />
       <TouchableOpacity>
       <Entypo style={{position:'absolute',right:20,bottom:10}} name="chevron-small-down" size={24} color="lightgrey" />

       </TouchableOpacity>
       </View>
       <View style={{height:90,width:'41%',flexDirection:'column'}}>
       <TextInput
         style={{position:'relative',paddingLeft:20,marginLeft:13,marginTop:10,borderWidth:1,borderColor:'#F8EBED',backgroundColor:"white",borderRadius:18,width:responsiveWidth(36),height:responsiveHeight(6)}}
         placeholder="Month"
         keyboardType="text"
       />
       <TouchableOpacity>
       <Entypo style={{position:'absolute',right:20,bottom:10}} name="chevron-small-down" size={24} color="lightgrey" />

       </TouchableOpacity>
       </View>
       <View style={{height:90,width:'30%',flexDirection:'column'}}>

       <TextInput
         style={{position:'relative',paddingLeft:20,marginLeft:13,marginTop:10,borderWidth:1,borderColor:'#F8EBED',backgroundColor:"white",borderRadius:18,width:responsiveWidth(24),height:responsiveHeight(6)}}
         placeholder="Date"
         keyboardType="text"
       />
       <TouchableOpacity>
       <Entypo style={{position:'absolute',right:20,bottom:10}} name="chevron-small-down" size={24} color="lightgrey" />

       </TouchableOpacity>
       </View>
       </View>
       <Text style={{marginTop:5,paddingLeft:20,fontWeight:'600',fontSize:12}}>Expiry Time</Text>
       
       <View style={{height:90,flexDirection:'row',marginTop:5}}>
       <View style={{height:90,width:'30%',flexDirection:'column'}}>

       <TextInput
         style={{position:'relative',paddingLeft:20,marginLeft:13,marginTop:10,borderWidth:1,borderColor:'#F8EBED',backgroundColor:"white",borderRadius:18,width:responsiveWidth(24),height:responsiveHeight(6)}}
         placeholder="Date"
         keyboardType="text"
       />
       <TouchableOpacity>
       <Entypo style={{position:'absolute',right:20,bottom:10}} name="chevron-small-down" size={24} color="lightgrey" />

       </TouchableOpacity>
       </View>
       <View style={{height:90,width:'41%',flexDirection:'column'}}>
       <TextInput
         style={{position:'relative',paddingLeft:20,marginLeft:13,marginTop:10,borderWidth:1,borderColor:'#F8EBED',backgroundColor:"white",borderRadius:18,width:responsiveWidth(36),height:responsiveHeight(6)}}
         placeholder="Month"
         keyboardType="text"
       />
       <TouchableOpacity>
       <Entypo style={{position:'absolute',right:20,bottom:10}} name="chevron-small-down" size={24} color="lightgrey" />

       </TouchableOpacity>
       </View>
       <View style={{height:90,width:'30%',flexDirection:'column'}}>

       <TextInput
         style={{position:'relative',paddingLeft:20,marginLeft:13,marginTop:10,borderWidth:1,borderColor:'#F8EBED',backgroundColor:"white",borderRadius:18,width:responsiveWidth(24),height:responsiveHeight(6)}}
         placeholder="Date"
         keyboardType="text"
       />
       <TouchableOpacity>
       <Entypo style={{position:'absolute',right:20,bottom:10}} name="chevron-small-down" size={24} color="lightgrey" />

       </TouchableOpacity>
       </View>
       </View>
       <Text style={{marginTop:5,paddingLeft:20,fontWeight:'600',fontSize:12}}>Description</Text>
       <TextInput
         style={{position:'relative',paddingLeft:20,marginLeft:13,marginTop:10,borderWidth:1,borderColor:'#F8EBED',backgroundColor:"white",borderRadius:18,width:responsiveWidth(95),height:responsiveHeight(12)}}
         placeholder="Date"
         keyboardType="text"
       />
      
       <TouchableOpacity>
       <LinearGradient
        // Button Linear Gradient
        colors={['#FC7D91', '#D9344E',]}
        style={{marginLeft:25,width:350,marginTop:5,height:46,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:18,marginRight:10}}>
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
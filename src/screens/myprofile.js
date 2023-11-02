import React from "react";
import { View ,Image,FlatList, Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView, Animated} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const MyProfile= props => {
    console.log(props);
    return(
        
 
        <SafeAreaView style={{backgroundColor:'white',display:'flex',flex:1}}>
        <View style={{position:'relative',borderWidth:1,borderColor:'lightgrey',backgroundColor:'white',marginLeft:20,marginRight:20,marginTop:20, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
        <Ionicons style={{paddingLeft:20}}name="person-circle" size={24} color="black" />
              <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
        JohnDoe
         </Text>
      </View>
      <View style={{position:'relative',borderWidth:1,borderColor:'lightgrey',backgroundColor:'white',marginLeft:20,marginRight:20,marginTop:20, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
      <MaterialCommunityIcons style={{paddingLeft:20}}name="message-alert-outline" size={24} color="black" />
              <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
              johndoe@gmail.com
         </Text>
      </View>
      <View style={{position:'relative',borderWidth:1,borderColor:'lightgrey',backgroundColor:'white',marginLeft:20,marginRight:20,marginTop:20, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
      <Feather style={{paddingLeft:20}} name="phone" size={24} color="black" />
              <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
              +91 98755 28763
         </Text>
      </View>
      <View style={{position:'relative',backgroundColor:'#FBF5F6',marginLeft:20,marginRight:20,marginTop:20, width: '90%',height:"45%",borderRadius:18}}>
      <View style={{width: '100%',flexDirection:'row',marginTop:10,justifyContent:'space-between',height:"10%",alignItems:'center',borderRadius:18}}>
      <Text style={{paddingLeft:20,color:"#524D62",fontWeight:'600',fontSize:16,justifyContent:'center'}}>
              Documents
         </Text>
         <Text style={{paddingRight:20,color:"#D9344E",fontWeight:'600',fontSize:12,justifyContent:'center'}}>
             Edits
         </Text>
</View>
  <View style={{position:'relative',backgroundColor:'white',marginLeft:20,marginRight:20,marginTop:20, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
     
              <Text style={{padding:15,color:"#382E30",fontWeight:'400',fontSize:14,justifyContent:'center'}}>
              Address proof (Verified)
         </Text>
         <MaterialCommunityIcons style={{paddingLeft:80}}name="message-alert-outline" size={24} color="black" />
      </View>
      <View style={{position:'relative',backgroundColor:'white',marginLeft:20,marginRight:20,marginTop:20, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
     
              <Text style={{padding:15,color:"#382E30",fontWeight:'400',fontSize:14,justifyContent:'center'}}>
              Address proof (Processing)
         </Text>
         <MaterialCommunityIcons style={{paddingLeft:60}}name="message-alert-outline" size={24} color="black" />
      </View>
      <View style={{position:'relative',backgroundColor:'white',marginLeft:20,marginRight:20,marginTop:20, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
     
              <Text style={{padding:15,color:"#D9344E",fontWeight:'400',fontSize:14,justifyContent:'center'}}>
              Address proof (Reupload)
         </Text>
         <MaterialCommunityIcons style={{paddingLeft:70}}name="message-alert-outline" size={24} color="black" />
      </View>
      <View style={{position:'relative',backgroundColor:'white',marginLeft:20,marginRight:20,marginTop:20, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
     
              <Text style={{padding:15,color:"#382E30",fontWeight:'400',fontSize:14,justifyContent:'center'}}>
              Address proof (Not uploaded)
         </Text>
         <MaterialCommunityIcons style={{paddingLeft:50}}name="message-alert-outline" size={24} color="black" />
      </View>
      <TouchableOpacity>
      <View style={{position:'relative',backgroundColor:'#F5F5F5',marginLeft:8,marginRight:20,marginTop:70, width: '98%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
      <FontAwesome5  style={{paddingLeft:20}}name="trash" size={24} color="grey" />
              <Text style={{padding:15,color:"#002441",fontWeight:'600',fontSize:12,justifyContent:'center'}}>
              Delete account
         </Text>
       
      </View>

      </TouchableOpacity>
      

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
export default MyProfile;
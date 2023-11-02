import React from "react";
import { View ,Image,FlatList, Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView, Animated} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const MyStore= props => {
    console.log(props);
    return(
        
 <SafeAreaView style={{backgroundColor:'white',display:"flex",flex:1}}>
 <ScrollView>
   <Text style={{marginTop:25,paddingLeft:20,fontWeight:'600',fontSize:16,color:'#382E30'}}>Store name & location </Text>
  <View style={{position:'relative',backgroundColor:'white',borderWidth:1,borderColor:'lightgrey',marginLeft:20,marginRight:20,marginTop:20, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
        <Ionicons style={{paddingLeft:20}}name="md-person-outline" size={24} color="black" />
        <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
      My Profile
   </Text>
</View>
  <View style={{position:'relative',backgroundColor:'white',borderWidth:1,borderColor:'lightgrey',marginLeft:20,marginRight:20,marginTop:10, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
  <Ionicons style={{paddingLeft:20}}name="location-outline" size={24} color="black" />
        <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
        Brookfield, Coimbatore
   </Text>
</View>
  <View style={{position:'relative',backgroundColor:'white',borderWidth:1,borderColor:'lightgrey',marginLeft:20,marginRight:20,marginTop:10, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
  <Ionicons style={{paddingLeft:20}}name="location-outline" size={24} color="black" />
        <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
        Pollachi (Branch)
   </Text>
</View>
 <Text style={{marginTop:25,paddingLeft:20,fontWeight:'600',fontSize:16,color:'#382E30'}}>Contact details </Text>
  <View style={{position:'relative',backgroundColor:'white',borderWidth:1,borderColor:'lightgrey',marginLeft:20,marginRight:20,marginTop:20, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
        <Ionicons style={{paddingLeft:20}}name="md-person-outline" size={24} color="black" />
        <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
        +91 99999 99999
   </Text>
</View>
  <View style={{position:'relative',backgroundColor:'white',borderWidth:1,borderColor:'lightgrey',marginLeft:20,marginRight:20,marginTop:10, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
  <MaterialCommunityIcons style={{paddingLeft:20}}name="web" size={24} color="black" />
        <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
        24hrs.com
   </Text>
</View>
  <View style={{position:'relative',backgroundColor:'white',borderWidth:1,borderColor:'lightgrey',marginLeft:20,marginRight:20,marginTop:10, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
  <AntDesign style={{paddingLeft:20}}name="instagram" size={24} color="black" />
        <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
        24_hrs
   </Text>
</View>
  <View style={{position:'relative',backgroundColor:'white',borderWidth:1,borderColor:'lightgrey',marginLeft:20,marginRight:20,marginTop:10, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
  <FontAwesome5 style={{paddingLeft:20}}name="facebook" size={24} color="black" />
        <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
        24_hrs
   </Text>
</View>
 <Text style={{marginTop:25,paddingLeft:20,fontWeight:'600',fontSize:16,color:'#382E30'}}>Delivery options</Text>
 <View style={{position:'relative',backgroundColor:'white',borderWidth:1,borderColor:'lightgrey',marginLeft:20,marginRight:20,marginTop:10, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
  <Ionicons style={{paddingLeft:20}}name="location-outline" size={24} color="black" />
        <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
        24_hrs/swiggy
   </Text>
</View>
 <View style={{position:'relative',backgroundColor:'white',borderWidth:1,borderColor:'lightgrey',marginLeft:20,marginRight:20,marginTop:10, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
  <Ionicons style={{paddingLeft:20}}name="location-outline" size={24} color="black" />
        <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
        24_hrs/dunzy
   </Text>
</View>
<View style={{position:'relative',backgroundColor:'#FBF5F6',marginLeft:20,marginRight:20,marginTop:20, width: '90%',height:"16%",borderRadius:18}}>
      <View style={{width: '100%',flexDirection:'row',marginTop:10,justifyContent:'space-between',height:"14%",alignItems:'center',borderRadius:18}}>
      <Text style={{paddingLeft:20,color:"#524D62",fontWeight:'600',fontSize:16,justifyContent:'center'}}>
      Related categories
         </Text>
         <Text style={{paddingRight:20,color:"#D9344E",fontWeight:'600',fontSize:12,justifyContent:'center'}}>
             Edit
         </Text>
</View>
  <View style={{position:'relative',marginLeft:20,marginRight:20,marginTop:20, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
     <View style={{backgroundColor:'#D9344E',width:'26%',height:'70%',borderRadius:18,justifyContent:'center',alignItems:'center'}}>
     <Text style={{color:"#FFFFFF",fontWeight:'600',fontSize:12,justifyContent:'center'}}>
             Grocery
         </Text>
     </View>
     <View style={{marginLeft:10,backgroundColor:'#D9344E',width:'26%',height:'70%',borderRadius:18,justifyContent:'center',alignItems:'center'}}>
     <Text style={{color:"#FFFFFF",fontWeight:'600',fontSize:12,justifyContent:'center'}}>
             Products
         </Text>
     </View>
     <View style={{marginLeft:10,backgroundColor:'#D9344E',width:'26%',height:'70%',borderRadius:18,justifyContent:'center',alignItems:'center'}}>
     <Text style={{color:"#FFFFFF",fontWeight:'600',fontSize:12,justifyContent:'center'}}>
             Clothing
         </Text>
     </View>
      </View>
  <TouchableOpacity>
  <View style={{position:'relative',backgroundColor:'#F5F5F5',marginLeft:5,marginRight:20,marginTop:70,marginBottom:20, width: '98%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
      <FontAwesome5  style={{paddingLeft:20}}name="trash" size={24} color="grey" />
              <Text style={{padding:15,color:"#002441",fontWeight:'600',fontSize:12,justifyContent:'center'}}>
              Delete account
         </Text>
       
      </View>

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
export default MyStore;
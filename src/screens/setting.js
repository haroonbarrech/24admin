import React from "react";
import { View ,Image,FlatList, Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView, Animated} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Setting= props => {
    console.log(props);
    return(
        
        <SafeAreaView style={{}}>
        <TouchableOpacity onPress={()=>{props.navigation.navigate('MyProfile')}}>
             <View style={{position:'relative',backgroundColor:'white',marginLeft:20,marginRight:20,marginTop:20, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
             <Ionicons style={{paddingLeft:20}}name="md-person-outline" size={24} color="black" />
             <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
           My Profile
        </Text>
        
        <FontAwesome style={{alignItems:'flex-end',position:'absolute',right:20}} name="angle-right" size={24} color="black" />
        
     </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>{props.navigation.navigate('MyStore')}}>
             <View style={{position:'relative',backgroundColor:'white',marginLeft:20,marginRight:20,marginTop:10, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
             <Entypo style={{paddingLeft:20}}name="shop" size={24} color="black" />
             <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
           My Stores
        </Text>
        
        <FontAwesome style={{alignItems:'flex-end',position:'absolute',right:20}} name="angle-right" size={24} color="black" />
        
     </View>
     </TouchableOpacity>
     <TouchableOpacity>
             <View style={{position:'relative',backgroundColor:'white',marginLeft:20,marginRight:20,marginTop:10, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
             <FontAwesome style={{paddingLeft:28}}name="rupee" size={24} color="black" />
             <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
           Payment
        </Text>
        
        <FontAwesome style={{alignItems:'flex-end',position:'absolute',right:20}} name="angle-right" size={24} color="black" />
        
     </View>
     </TouchableOpacity>
     <TouchableOpacity On onPress={()=>{props.navigation.navigate('Support')}}>
             <View style={{position:'relative',backgroundColor:'white',marginLeft:20,marginRight:20,marginTop:10, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
             <Ionicons style={{paddingLeft:20}}name="md-help-outline" size={24} color="black" />
             <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
           Support
        </Text>
        
        <FontAwesome style={{alignItems:'flex-end',position:'absolute',right:20}} name="angle-right" size={24} color="black" />
        
     </View>
     </TouchableOpacity>
     <TouchableOpacity on onPress={()=>{props.navigation.navigate('Faq')}}>
             <View style={{position:'relative',backgroundColor:'white',marginLeft:20,marginRight:20,marginTop:10, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
             <SimpleLineIcons style={{paddingLeft:20}}name="notebook" size={24} color="black" />
             <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
           FAQ's
        </Text>
        
        <FontAwesome style={{alignItems:'flex-end',position:'absolute',right:20}} name="angle-right" size={24} color="black" />
        
     </View>
     </TouchableOpacity>
     <TouchableOpacity>
             <View style={{position:'relative',backgroundColor:'white',marginLeft:20,marginRight:20,marginTop:10, width: '90%',flexDirection:'row',height:48,alignItems:'center',borderRadius:18}}>
             <MaterialCommunityIcons style={{paddingLeft:20}}name="logout" size={24} color="black" />
             <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
          Log Out
        </Text>
        
        <FontAwesome style={{alignItems:'flex-end',position:'absolute',right:20}} name="angle-right" size={24} color="black" />
        
     </View>
     </TouchableOpacity>
     <View style={{height:"23%",position:'relative',top:170,alignItems:'center'}}>
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
export default Setting;
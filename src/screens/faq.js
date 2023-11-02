import React from "react";
import { View ,Image,FlatList, Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView, Animated} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Entypo } from '@expo/vector-icons';
const Faq= props => {
    console.log(props);
    return(
        
 <SafeAreaView>
        <View style={{backgroundColor:'white',marginTop:20,borderRadius:18}}>
          <View style={{marginLeft:10,marginRight:20,marginTop:10, flexDirection:'row',height:50,justifyContent:'space-between',alignItems:'center',borderRadius:12}}>
    
             <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
             How to get the offers
        </Text> 
        <Entypo style={{paddingRight:20}}name="chevron-small-down" size={24} color="black" />
     </View>
     <Text style={{padding:15,color:"#382E30",fontWeight:'400',fontSize:14,justifyContent:'center'}}>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n
        </Text> 
        <Text style={{padding:15,color:"#382E30",fontWeight:'400',fontSize:14,justifyContent:'center'}}>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </Text> 
        <Text style={{padding:15,color:"#382E30",fontWeight:'400',fontSize:14,justifyContent:'center'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n
        </Text> 
</View>
<View style={{backgroundColor:'white',marginTop:10,borderRadius:18}}>
          <View style={{marginLeft:10,marginRight:20,marginTop:10, flexDirection:'row',height:50,justifyContent:'space-between',alignItems:'center',borderRadius:12}}>
    
             <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
             How do I add my offer in app
             </Text>
        <Entypo style={{paddingRight:20}}name="chevron-small-down" size={24} color="black" />
     </View>
     
</View>
<View style={{backgroundColor:'white',marginTop:6,borderRadius:18}}>
          <View style={{marginLeft:10,marginRight:20,marginTop:10, flexDirection:'row',height:50,justifyContent:'space-between',alignItems:'center',borderRadius:12}}>
    
             <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
             How to get support
             </Text>
        <Entypo style={{paddingRight:20}}name="chevron-small-down" size={24} color="black" />
     </View>
     
</View>
<View style={{backgroundColor:'white',marginTop:6,borderRadius:18}}>
          <View style={{marginLeft:10,marginRight:20,marginTop:10, flexDirection:'row',height:50,justifyContent:'space-between',alignItems:'center',borderRadius:12}}>
    
          <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
          How to set alarm
             </Text>
        <Entypo style={{paddingRight:20}}name="chevron-small-down" size={24} color="black" />
     </View>
     
</View>
<View style={{backgroundColor:'white',marginTop:6,borderRadius:18}}>
          <View style={{marginLeft:10,marginRight:20,marginTop:10, flexDirection:'row',height:50,justifyContent:'space-between',alignItems:'center',borderRadius:12}}>
    
             <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:14,justifyContent:'center'}}>
             How to purchase products
             </Text>
        <Entypo style={{paddingRight:20}}name="chevron-small-down" size={24} color="black" />
     </View>
     
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
export default Faq;
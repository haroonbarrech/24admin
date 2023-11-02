
import React from "react";
import { View ,Image, Text,TextInput, StyleSheet, TouchableOpacity} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";

const OfferDetailed= props => {
    console.log(props);
    return(
        
<SafeAreaView style={{backgroundColor:'white',display:'flex',flex:1}}>
<View style={{justifyContent:"center",alignItems:'center'}}>
             <Image
        style={{height:responsiveHeight(40),width:responsiveWidth(90),borderRadius:22,borderWidth:1}}
        source={require('../../assets/shirt3.png')}
      />
            </View>
            <View style={{height:50,marginTop:20,justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
            <Text style={{paddingLeft:15,color:"#524D62",fontSize:18,fontWeight:'700'}}>
          Nike Cotton T-shirt
           </Text>
           <View style={{height:responsiveHeight(5),alignItems:'center',justifyContent:'center',width:responsiveWidth(28),backgroundColor:'#FFA800',marginLeft:1,marginRight:1,borderRadius:12}}>
      <Text style={{color:"white",fontSize:12,fontWeight:'600',justifyContent:'center'}}>
          20 % Off
           </Text>
      </View>

            </View>
            <Text style={{paddingLeft:15,color:"#8A8492",fontSize:11,fontWeight:'400'}}>
          Nike Store
           </Text>
           <View style={{height:50,marginTop:20,alignItems:'center',flexDirection:'row'}}>
            <Text style={{paddingLeft:15,color:"#382E30",fontSize:14,fontWeight:'600'}}>
          Offer Price :
           </Text>
           <Text style={{color:"#382E30",fontSize:22,fontWeight:'600'}}>
           ₹303
           </Text>
           <Text style={{paddingLeft:120,color:"#382E30",fontSize:12,fontWeight:'400'}}>
          Regular Price :
           </Text>
           <Text style={{paddingLeft:1,textDecorationLine:'line-through',color:"#8A8492",fontSize:16,fontWeight:'500'}}>
           ₹353
           </Text>
            </View>
            <View style={{marginLeft:10,backgroundColor:'#F5F5F5',justifyContent:'center',alignItems:'center',width:370,height:34,borderRadius:18,flexDirection:'row'}}>
            <Text style={{paddingLeft:15,color:"black",fontWeight:'400',fontSize:12,justifyContent:'center'}}>
           Expiry date:23 Nov 2022
           </Text>
           <Text style={{paddingLeft:15,color:"black",fontWeight:'400',fontSize:12,justifyContent:'center'}}>
           Expiry Time:2.30 pm
           </Text>
            </View>
            <View style={{marginLeft:10,marginTop:20,backgroundColor:'#FBF5F6',justifyContent:'center',alignItems:'center',width:370,height:34,borderRadius:18,flexDirection:'row'}}>
            <Text style={{color:"#382E30",fontSize:12,fontWeight:'600',justifyContent:'center'}}>
           Views:
           </Text>
           <Text style={{color:"#D9344E",fontSize:12,fontWeight:'600',justifyContent:'center'}}>
           24
           </Text>
            </View>
            
            <View style={{marginTop:5,height:responsiveHeight(6)}}>
            <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:16,justifyContent:'center'}}>
           Description
        </Text>
            </View>
            <Text style={{padding:15,color:"#8A8492",fontWeight:'400',fontSize:12,justifyContent:'center'}}>
           DLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
             ex ea commodo consequat
        </Text>
          
      
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
export default OfferDetailed;
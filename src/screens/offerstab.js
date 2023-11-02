import React from "react";
import { View ,Image, Text,TextInput, StyleSheet, TouchableOpacity} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import OfferDetailed from "./offerdetailed";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const OffersTab= props => {
    console.log(props);
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
       
            <View style={{marginTop:5,height:responsiveHeight(6)}}>
            <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:16,justifyContent:'center'}}>
           Live Offers
        </Text>
            </View>
            <View style={{marginTop:5,height:responsiveHeight(22),backgroundColor:'white',marginLeft:15,marginRight:15,borderRadius:18}}>
            <View style={{marginTop:5,height:responsiveHeight(15),flexDirection:'row',justifyContent:'center',marginLeft:1,marginRight:1,borderRadius:18}}>
            <TouchableOpacity onPress={() => { props.navigation.navigate(OfferDetailed);}}>
            <Image
        style={{height:110,width:130,borderRadius:22}}
        source={require('../../assets/shirt3.png')}
      />
            </TouchableOpacity>
        
    <View style={{marginTop:5,height:responsiveHeight(20),width:responsiveWidth(55),marginLeft:1,marginRight:1,borderRadius:18}}>
    <Text style={{paddingLeft:15,color:"black",fontWeight:'600',fontSize:14,}}>
           Nike Cotton T-Shirt
        </Text>
        <View style={{height:20,flexDirection:'row',alignItems:'center'}}>
        <Text style={{paddingLeft:15,color:"black",fontWeight:'400',fontSize:12,justifyContent:'center'}}>
           Offer Price:
        </Text>
        <Text style={{paddingLeft:1,color:"#5C5962",fontWeight:'600',fontSize:16,justifyContent:'center'}}>
        ₹421
        </Text>
        <Text style={{paddingLeft:1,color:"black",fontWeight:'400',fontSize:12,justifyContent:'center'}}>
        / 1 piece
        </Text>
        
        </View>
      
        <View style={{marginTop:5,height:56,width:responsiveWidth(55),backgroundColor:'#f5f5f5',marginLeft:1,marginRight:1,borderRadius:18}}>
        <Text style={{paddingTop:10,paddingLeft:15,color:"black",fontWeight:'400',fontSize:12,justifyContent:'center'}}>
           Expiry date:23 Nov 2022
           </Text>
           <Text style={{paddingLeft:15,color:"black",fontWeight:'400',fontSize:12,justifyContent:'center'}}>
           Expiry Time:2.30 pm
           </Text>
            </View>
    
    </View>

      </View>
      <View style={{height:responsiveHeight(5),width:responsiveWidth(90),justifyContent:'space-between',flexDirection:'row',marginLeft:1,marginRight:1,borderRadius:18}}>
      <View style={{flexDirection:'row',height:responsiveHeight(5),alignItems:'center',justifyContent:'center',width:responsiveWidth(28),backgroundColor:'#fdf5f6',marginLeft:1,marginRight:1,borderRadius:18}}>
      <Text style={{color:"#382E30",fontSize:12,fontWeight:'600',justifyContent:'center'}}>
           Views:
           </Text>
           <Text style={{color:"#D9344E",fontSize:12,fontWeight:'600',justifyContent:'center'}}>
           24
           </Text>
      </View>
      <View style={{height:responsiveHeight(5),alignItems:'center',justifyContent:'center',width:responsiveWidth(28),backgroundColor:'#FFA800',marginLeft:1,marginRight:1,borderRadius:18}}>
      <Text style={{color:"white",fontSize:12,fontWeight:'600',justifyContent:'center'}}>
          20 % Off
           </Text>
      </View>
   
      <LinearGradient
        // Button Linear Gradient
        colors={['#FC7D91', '#D9344E']}
        style={{height:responsiveHeight(5),alignItems:'center',justifyContent:'center',width:responsiveWidth(28),marginLeft:1,marginRight:1,borderRadius:18}}>
       <Text style={{color:"white",fontSize:12,fontWeight:'600',justifyContent:'center'}}>
           Edit Offer
           </Text>
      </LinearGradient>
      </View>


            </View>
            <View style={{marginTop:5,height:responsiveHeight(6)}}>
            <Text style={{padding:15,color:"#382E30",fontWeight:'600',fontSize:16,justifyContent:'center'}}>
           Expired Offers
        </Text>
            </View>
            <View style={{marginTop:5,height:responsiveHeight(22),backgroundColor:'white',marginLeft:15,marginRight:15,borderRadius:18}}>
            <View style={{marginTop:5,height:responsiveHeight(15),flexDirection:'row',justifyContent:'center',marginLeft:1,marginRight:1,borderRadius:18}}>
            <TouchableOpacity onPress={() => { props.navigation.navigate(OfferDetailed);}}>
            <Image
        style={{height:110,width:130,borderRadius:22}}
        source={require('../../assets/shirt3.png')}
      />
            </TouchableOpacity>
        
    <View style={{marginTop:5,height:responsiveHeight(20),width:responsiveWidth(55),marginLeft:1,marginRight:1,borderRadius:18}}>
    <Text style={{paddingLeft:15,color:"black",fontWeight:'600',fontSize:14,}}>
           Nike Cotton T-Shirt
        </Text>
        <View style={{height:20,flexDirection:'row',alignItems:'center'}}>
        <Text style={{paddingLeft:15,color:"black",fontWeight:'400',fontSize:12,justifyContent:'center'}}>
           Offer Price:
        </Text>
        <Text style={{paddingLeft:1,color:"#5C5962",fontWeight:'600',fontSize:16,justifyContent:'center'}}>
        ₹421
        </Text>
        <Text style={{paddingLeft:1,color:"black",fontWeight:'400',fontSize:12,justifyContent:'center'}}>
        / 1 piece
        </Text>
        
        </View>
      
        <View style={{marginTop:5,height:56,width:responsiveWidth(55),backgroundColor:'#f5f5f5',marginLeft:1,marginRight:1,borderRadius:18}}>
        <Text style={{paddingTop:10,paddingLeft:15,color:"black",fontWeight:'400',fontSize:12,justifyContent:'center'}}>
           Expiry date:23 Nov 2022
           </Text>
           <Text style={{paddingLeft:15,color:"black",fontWeight:'400',fontSize:12,justifyContent:'center'}}>
           Expiry Time:2.30 pm
           </Text>
            </View>
    
    </View>

      </View>
      <View style={{height:responsiveHeight(5),width:responsiveWidth(90),justifyContent:'space-between',flexDirection:'row',marginLeft:1,marginRight:1,borderRadius:18}}>
      <View style={{flexDirection:'row',height:responsiveHeight(5),alignItems:'center',justifyContent:'center',width:responsiveWidth(28),backgroundColor:'#fdf5f6',marginLeft:1,marginRight:1,borderRadius:18}}>
      <Text style={{color:"#382E30",fontSize:12,fontWeight:'600',justifyContent:'center'}}>
           Views:
           </Text>
           <Text style={{color:"#D9344E",fontSize:12,fontWeight:'600',justifyContent:'center'}}>
           24
           </Text>
      </View>
      <View style={{height:responsiveHeight(5),alignItems:'center',justifyContent:'center',width:responsiveWidth(28),backgroundColor:'#FFA800',marginLeft:1,marginRight:1,borderRadius:18}}>
      <Text style={{color:"white",fontSize:12,fontWeight:'600',justifyContent:'center'}}>
          20 % Off
           </Text>
      </View>
   
      <LinearGradient
        // Button Linear Gradient
        colors={['#FC7D91', '#D9344E']}
        style={{height:responsiveHeight(5),alignItems:'center',justifyContent:'center',width:responsiveWidth(28),marginLeft:1,marginRight:1,borderRadius:18}}>
       <Text style={{color:"white",fontSize:12,fontWeight:'600',justifyContent:'center'}}>
           Edit Offer
           </Text>
      </LinearGradient>
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
        
    },
});
export default OffersTab;


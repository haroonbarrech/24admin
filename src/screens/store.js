import React from "react";
import { View ,Image,TextInput, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonMain from "../components/buttonmain";
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import List from "../components/flatlist";
const Store= props => {
    console.log(props);
    return(
        
       
        <SafeAreaView style={{backgroundColor:'#fafafa',flex:1}}>
        <ScrollView>
        <View style={{height:responsiveHeight(5)}}>
        </View>
        <View style={{borderBottomWidth:1,borderColor:'lightgrey',height:responsiveHeight(5),justifyContent:'center'}}>
        <TouchableOpacity>
        <Entypo style={{paddingLeft:10}} name="chevron-small-left" size={36} color="black" />
        </TouchableOpacity>
        </View>
        {/* ----------------------View for height-----------------------*/}
        <View style={{height:responsiveHeight(2)}}>
        </View>
       
        <View style={{}}>
        <Text style={{paddingLeft:22,color:"#ff5770",fontWeight:'700',fontSize:responsiveFontSize(3.22)}}>
           Set up your store
        </Text>
        </View>
        <View style={{padding:10}}>
        <Text style={{paddingLeft:10,fontWeight:'bold'}}>Store Name*</Text>
        <TextInput
        style={{paddingLeft:20,marginLeft:13,borderWidth:1,borderColor:'grey',borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6)}}
        placeholder="Brookfield,Cambatore"
        keyboardType="numeric"
      />
        
       <Text style={{marginTop:25,paddingLeft:10,fontWeight:'bold'}}>Store Main Location*</Text>
       <View style={{ position: 'relative', display: 'flex', flexDirection: 'row',
        paddingLeft:20,borderWidth:1,marginLeft:13,borderColor:'grey',borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6),
         justifyContent: 'center', alignItems: 'center'}}>
<View style={{width: '100%', borderBottomColor: 'grey',  position: 'relative', display: 'flex', 
flexDirection: 'row', justifyContent: 'space-between' }}>
  <TextInput
  style={{width: '80%'}}    
        placeholder=" Brookfield,Cambatore"
   />
    <TouchableOpacity>
    <MaterialIcons name="my-location" size={24} color="lightgrey" style={{paddingRight:10,width: '100%'}}  />
    </TouchableOpacity>
</View>
</View>
       <TouchableOpacity>
        <Text style={{paddingLeft:10,marginTop:6,fontWeight:'bold',color:'#ff5770'}}>Add more</Text>
        </TouchableOpacity>
      <Text style={{marginTop:25,paddingLeft:10,fontWeight:'bold'}}>Watsapp Number*</Text>
       <TextInput
        style={{paddingLeft:20,marginLeft:13,borderWidth:1,borderColor:'grey',borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6)}}
        placeholder="+91 999 999 999"
        keyboardType="numeric"
      />
      <Text style={{marginTop:25,paddingLeft:10,fontWeight:'bold'}}>Website Link (Optional)</Text>
       <TextInput
        style={{paddingLeft:20,marginLeft:13,borderWidth:1,borderColor:'grey',borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6)}}
        placeholder="www.24seller.com"
        keyboardType="numeric"
      />
         <Text style={{marginTop:25,paddingLeft:10,fontWeight:'bold'}}>Instagram Link (Optional)</Text>
       <TextInput
        style={{paddingLeft:20,marginLeft:13,borderWidth:1,borderColor:'grey',borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6)}}
        placeholder="24_Seller"
        keyboardType="numeric"
      />
       <Text style={{marginTop:25,paddingLeft:10,fontWeight:'bold'}}>Facebook Link (Optional)</Text>
        <TextInput
        style={{paddingLeft:20,borderWidth:1,marginLeft:13,borderColor:'grey',borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6)}}
        placeholder="24_Seller"
        keyboardType="text"
      />
       <View style={{height:responsiveHeight(30)}}>
       <View style={{justifyContent:'center',height:responsiveHeight(8)}}>
       
       <Text style={{paddingLeft:10,fontWeight:'bold',fontSize:responsiveFontSize(2.5),color:'grey'}}>Selected Related Categories</Text>
       </View>

       <List/>

       </View> 
        </View>
        
  
    <TouchableOpacity onPress={() => { props.navigation.navigate('Home');}}>
       <LinearGradient
        // Button Linear Gradient
        colors={['#FC7D91', '#D9344E',]}
        style={{marginLeft:25,width:350,marginTop:8,height:46,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:18,marginRight:10}}>
        <Text style={{paddingLeft:3,color:"white",fontSize:12,fontWeight:'600'}}>Go to the Next page</Text>
      </LinearGradient>
       </TouchableOpacity>
          {/* ----------------------View for height-----------------------*/}
          <View style={{height:responsiveHeight(3)}}>
        </View>
      
       
        <View style={{alignItems:'center',flexDirection:'row',alignItems:'center',justifyContent:'center',height:responsiveHeight(5)}}>
        
        <Text style={{paddingLeft:10,fontSize:responsiveFontSize(2),fontWeight:'bold',color:'#4d817a'}}>By signing up you agree to our</Text>
        <TouchableOpacity>
       <Text style={{paddingLeft:10,marginTop:10,fontWeight:'bold',color:'#ff5770'}}>T&C</Text>
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
export default Store;
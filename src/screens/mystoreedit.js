import React from "react";
import { View ,Image,TextInput,FlatList, Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView, Animated} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";
import * as selectCatAction from '../store/actions/selectCatAction';
//import list1 from "../dummydata/flatlist1";
import List from "../components/flatlist";
const MyStoreEdit= props => {
    const dispatch = useDispatch();
    const selectedCats = useSelector((state) => {state.selectedCats});
    console.log('dsahdgajvsafjsaa sdfsad');
    console.log(selectedCats);
    console.log('dsahdgajvsafjsaa sdfsad');
  

    return(
        
        <SafeAreaView style={{backgroundColor:'white',display:'flex',flex:1}}>
        <View>
     <Text style={{lineHeight:10,paddingLeft:20,paddingTop:30,paddingBottom:3,fontWeight:'600',fontSize:12}}>Store Name*</Text>
        <TextInput
        style={{height:45,paddingLeft:20,borderWidth:1,borderColor:'#F8EBED',borderRadius:18,marginLeft:15,marginRight:15}}
        placeholder="Enter your Email"
        keyboardType="text"
      />
       <Text style={{lineHeight:10,paddingLeft:20,paddingTop:25,paddingBottom:3,fontWeight:'600',fontSize:12}}>Store Main Location</Text>
        <View style={{height:45,paddingLeft:20,borderWidth:1,alignItems:'center',borderColor:'#F8EBED',borderRadius:18,marginLeft:15,marginRight:15,flexDirection:'row'}}>
        <TextInput
        style={{width:"88%"}}
        placeholder="Brookfield, Coimbatore"
        keyboardType="text"
      />
      <TouchableOpacity>
      <MaterialIcons style={{}}name="my-location" size={24} color="lightgrey" />
      </TouchableOpacity>

      </View>

      <Text style={{lineHeight:10,paddingLeft:20,paddingTop:25,paddingBottom:3,fontWeight:'600',fontSize:12}}>Store Branches (optional)</Text>
        <TextInput
        style={{height:45,paddingLeft:20,borderWidth:1,borderColor:'#F8EBED',borderRadius:18,marginLeft:15,marginRight:15}}
        placeholder="Pollachi"
        keyboardType="text"
      />
      <TouchableOpacity>
      <Text style={{lineHeight:10,paddingLeft:20,paddingTop:8,paddingBottom:10,fontWeight:'600',fontSize:12,color:"#D9344E"}}>Add more</Text>
      </TouchableOpacity>

      <Text style={{lineHeight:10,paddingLeft:20,paddingTop:15,paddingBottom:3,fontWeight:'600',fontSize:12}}> Whatsapp number</Text>
        <TextInput
        style={{height:45,paddingLeft:20,borderWidth:1,borderColor:'#F8EBED',borderRadius:18,marginLeft:15,marginRight:15}}
        placeholder=" www.24seller.com  "
        keyboardType="text"
      />
      <Text style={{lineHeight:10,paddingLeft:20,paddingTop:25,paddingBottom:3,fontWeight:'600',fontSize:12}}>Website link (optional)</Text>
        <TextInput
        style={{height:45,paddingLeft:20,borderWidth:1,borderColor:'#F8EBED',borderRadius:18,marginLeft:15,marginRight:15}}
        placeholder=" www.24seller.com "
        keyboardType="text"
      />
      <Text style={{lineHeight:10,paddingLeft:20,paddingTop:25,paddingBottom:3,fontWeight:'600',fontSize:12}}>Instagram link (optional)</Text>
        <TextInput
        style={{height:45,paddingLeft:20,borderWidth:1,borderColor:'#F8EBED',borderRadius:18,marginLeft:15,marginRight:15}}
        placeholder=" 24seller"
        keyboardType="text"
      />
       <Text style={{lineHeight:10,paddingLeft:20,paddingTop:25,paddingBottom:3,fontWeight:'600',fontSize:12}}>Facebook link (optional)</Text>
        <TextInput
        style={{height:45,paddingLeft:20,borderWidth:1,borderColor:'#F8EBED',borderRadius:18,marginLeft:15,marginRight:15}}
        placeholder=" 24seller"
        keyboardType="text"
      />
             <Text style={{lineHeight:10,marginTop:15,marginBottom:15,paddingLeft:20,paddingTop:20,fontWeight:'600',fontSize:16}}>Select related categories</Text>
    <List/>

   
    
       <Text style={{lineHeight:10,marginTop:10,marginBottom:10,paddingLeft:20,paddingTop:30,fontWeight:'600',fontSize:16}}>Delivery options </Text>
       <Text style={{lineHeight:10,paddingLeft:20,paddingTop:30,paddingBottom:3,fontWeight:'600',fontSize:12}}>Swiggy link (optional)</Text>
        <TextInput
        style={{height:45,paddingLeft:20,borderWidth:1,borderColor:'#F8EBED',borderRadius:18,marginLeft:15,marginRight:15}}
        placeholder="Enter your Email"
        keyboardType="text"
      />
      <Text style={{lineHeight:10,paddingLeft:20,paddingTop:30,paddingBottom:3,fontWeight:'600',fontSize:12}}>Dunzo link (optional)</Text>
        <TextInput
        style={{height:45,paddingLeft:20,borderWidth:1,borderColor:'#F8EBED',borderRadius:18,marginLeft:15,marginRight:15}}
        placeholder="Enter your Email"
        keyboardType="text"
      />
      <Text style={{lineHeight:10,paddingLeft:20,paddingTop:30,paddingBottom:3,fontWeight:'600',fontSize:12}}>Other delivery link (optional)</Text>
        <TextInput
        style={{height:45,paddingLeft:20,borderWidth:1,borderColor:'#F8EBED',borderRadius:18,marginLeft:15,marginRight:15}}
        placeholder="Enter your Email"
        keyboardType="text"
      />
      <TouchableOpacity>
      <LinearGradient
        // Button Linear Gradient
        colors={['#FC7D91', '#D9344E']}
        style={{marginTop:20,marginLeft:20,marginBottom:10,width:"90%",height:46,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:22,marginRight:10}}>
        <Text style={{paddingLeft:3,color:"white",fontSize:12,fontWeight:'600'}}>Save Changes</Text>
      </LinearGradient>
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
export default MyStoreEdit;
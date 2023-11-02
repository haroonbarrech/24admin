import React from "react";
import { View ,Image,TextInput, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonMain from "../components/buttonmain";
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const Documents= props => {
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
        <Text style={{paddingLeft:15,color:"#ff5770",fontWeight:'700',fontSize:responsiveFontSize(3.2)}}>
           Upload Verfications Documents
        </Text>
        </View>
        <View style={{padding:10}}> 
       <Text style={{marginTop:25,marginBottom:5,paddingLeft:10,fontWeight:'bold'}}>Address Proof</Text>
       <View style={{ position: 'relative', display: 'flex', flexDirection: 'row',
        paddingLeft:20,borderWidth:1,marginLeft:13,borderColor:'grey',borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6),
         justifyContent: 'center', alignItems: 'center'}}>
<View style={{width: '100%', borderBottomColor: 'grey',  position: 'relative', display: 'flex', 
flexDirection: 'row', justifyContent: 'space-between' }}>
  <TextInput
  style={{width: '80%'}}    
        placeholder=" AdhaarCard.pdf"
   />
    <TouchableOpacity>
    <Feather name="upload" size={24} color="black"  style={{paddingRight:10,width: '100%'}}  />
    </TouchableOpacity>
</View>
</View>
      <Text style={{marginTop:25,marginBottom:5,paddingLeft:10,fontWeight:'bold'}}>Address Proof</Text>
       <View style={{ position: 'relative', display: 'flex', flexDirection: 'row',
        paddingLeft:20,borderWidth:1,marginLeft:13,borderColor:'grey',borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6),
         justifyContent: 'center', alignItems: 'center'}}>
<View style={{width: '100%', borderBottomColor: 'grey',  position: 'relative', display: 'flex', 
flexDirection: 'row', justifyContent: 'space-between' }}>
  <TextInput
  style={{width: '80%'}}    
        placeholder=" AdhaarCard.pdf"
   />
    <TouchableOpacity>
    <Feather name="upload" size={24} color="black"  style={{paddingRight:10,width: '100%'}}  />
    </TouchableOpacity>
</View>
</View>
      <Text style={{marginTop:25,marginBottom:5,paddingLeft:10,fontWeight:'bold'}}>Address Proof</Text>
       <View style={{ position: 'relative', display: 'flex', flexDirection: 'row',
        paddingLeft:20,borderWidth:1,marginLeft:13,borderColor:'grey',borderRadius:18,width:responsiveWidth(90),height:responsiveHeight(6),
         justifyContent: 'center', alignItems: 'center'}}>
<View style={{width: '100%', borderBottomColor: 'grey',  position: 'relative', display: 'flex', 
flexDirection: 'row', justifyContent: 'space-between' }}>
  <TextInput
  style={{width: '80%'}}    
        placeholder=" AdhaarCard.pdf"
   />
    <TouchableOpacity>
    <Feather name="upload" size={24} color="black"  style={{paddingRight:10,width: '100%'}}  />
    </TouchableOpacity>
</View>
</View>
       
  
       
  



       </View> 
       <View style={{height:responsiveHeight(10)}}>
        </View>
       <View style={{height:responsiveHeight(18),justifyContent:"space-between"}}>
      
      
    
    <TouchableOpacity onPress={() => { props.navigation.navigate('Store');}}>
       <LinearGradient
        // Button Linear Gradient
        colors={['#FC7D91', '#D9344E',]}
        style={{marginLeft:25,width:350,marginTop:8,height:46,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:18,marginRight:10}}>
        <Text style={{paddingLeft:3,color:"white",fontSize:12,fontWeight:'600'}}>Go to the Next page</Text>
      </LinearGradient>
       </TouchableOpacity>
    <View style={{ marginLeft:15,display: 'flex',borderRadius:26,backgroundColor:'lightgrey',justifyContent:"center",
        alignItems:'center', width: responsiveWidth(90),height: responsiveHeight(7)}}>
    <ButtonMain title="Skip" textColor="#ff5770" size={responsiveFontSize(2)} weight="bold" onPress={() => { props.navigation.navigate('LogIn');}}/>
    </View>
    </View>
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
export default Documents;
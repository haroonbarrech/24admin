import React from "react";
import { View ,Image,FlatList, Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView, Animated} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { useSelector, useDispatch } from "react-redux";
import * as selectCatAction from '../store/actions/selectCatAction';

const List= props => {

    const list1 = [
        {
            id: 1,
            text: 'Clothing',
         
        },
        {
            id: 2,
            text: 'Shoes',
    
        },
        {
            id: 3,
            text: 'Food',
    
        },
        {
            id: 4,
            text: 'Grocery',
    
        },
        {
            id: 5,
            text: 'Accessories',
    
        },
        {
            id: 6,
            text: 'Clothing',
    
        },
        {
            id: 7,
            text: 'Clothing',
    
        },
        {
            id: 8,
            text: 'Clothing',
    
        },
        {
            id: 9,
            text: 'Clothing',
    
        },
        {
            id: 10,
            text: 'Clothing',
    
        },
        {
            id: 11,
            text: 'Clothing',
    
        },
        {
            id: 12,
            text: 'Clothing',
    
        },
    
    ];
    const dispatch = useDispatch();
    const renderNow = ({ item }) => {
       //  console.log(item);
       
         return(
             <TouchableOpacity style={{}} onPress={()=>{
                 dispatch(selectCatAction.toggleSelect(item.id));
 
             }}>
                    
             <View style={{marginLeft:10,marginTop:10,backgroundColor:'#FBF5F6',borderRadius:12,justifyContent:'center',alignItems:'center',width:responsiveWidth(20),height:responsiveHeight(5)}}>
             <Text style={{fontWeight:'600',fontSize:12,color:'black' }}>{item.text}</Text>
             </View>
        
                   </TouchableOpacity>
 )}
    
    return(
        
 
        <View style={{flexDirection:'row', display: 'flex'}}>   
        <FlatList
      data={list1} 
      numColumns={4}
      
      keyExtractor={(item) => item.id}
      renderItem={renderNow}
    />
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
export default List;
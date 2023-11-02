import React, { useState } from "react";
import { View ,BodyButton,Pressable,Image,TextInput, Text, StyleSheet, TouchableOpacity} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

//------------------------------------------------------------------------------------
import { Entypo } from '@expo/vector-icons';


const Home= props => {

   const [tableHead, setTableHead] = useState(['Product Name', 'Offers', 'Posted Date and Time']);
   const [tableData, setTableData] = useState([
      ['T-Shirts', 'Buy 1 Get 1', '03/02/23 - 08:00 24/02/23 - 20:30'],
      ['Shirts', 'Buy 1 Get 1', '03/02/23 - 08:00 24/02/23 - 20:30'],
      ['Shoes', '20% off', '03/02/23 - 08:00 24/02/23 - 20:30'],
      ['Bags', 'Buy 1 Get 1', '03/02/23 - 08:00 24/02/23 - 20:30']
    ]);

    const [widthArr, setWidthArr] = useState([140, 100, 150]);
   
    
    return(
 
              <View>
           <View style={{backgroundColor:'white',height:responsiveHeight(8),justifyContent:"center",alignItems:'center'}}>
           <View style={{backgroundColor:'#f5f5f5',height:responsiveHeight(4),width:responsiveWidth(90),marginLeft:8,marginRight:8,borderRadius:18,flexDirection:'row',alignItems:'center'}}>
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
      </View>
       <View style={{marginTop:8,backgroundColor:'white',display:'flex',flexWrap:'wrap',padding:10,justifyContent:'space-between',flexDirection:"row",marginRight:15,marginLeft:15,borderRadius:18}}>
         <View style={{marginTop:8,justifyContent:'center',alignItems:'center',backgroundColor:'#fff0da',width:responsiveWidth(40),height:responsiveHeight(13),marginLeft:5,borderRadius:18}}>
          <Text style={{color:"#594f50",fontWeight:'700',fontSize:responsiveFontSize(3),}}>
           32
        </Text>
        <Text style={{color:"#594f50",fontWeight:'700',fontSize:responsiveFontSize(2),}}>
           Views
        </Text>
         </View>
         <View style={{marginTop:8,justifyContent:'center',alignItems:'center',backgroundColor:'#fbebed',width:responsiveWidth(40),height:responsiveHeight(13),marginLeft:5,borderRadius:18}}>
             <Text style={{color:"#594f50",fontWeight:'700',fontSize:responsiveFontSize(3),}}>
           02
        </Text>
        <Text style={{color:"#594f50",fontWeight:'700',fontSize:responsiveFontSize(2),}}>
           Alarms
        </Text>

         </View>
            <View style={{marginTop:8,justifyContent:'center',alignItems:'center',backgroundColor:'#eff8ff',width:responsiveWidth(40),height:responsiveHeight(13),marginLeft:5,borderRadius:18}}>
                <Text style={{color:"#594f50",fontWeight:'700',fontSize:responsiveFontSize(3),}}>
           23
        </Text>
        <Text style={{color:"#594f50",fontWeight:'700',fontSize:responsiveFontSize(2),}}>
           Products
        </Text>
         </View>
         <View style={{marginTop:8,justifyContent:'center',alignItems:'center',backgroundColor:'#ebfaeb',width:responsiveWidth(40),height:responsiveHeight(13),marginLeft:5,borderRadius:18}}>
             <Text style={{color:"#594f50",fontWeight:'700',fontSize:responsiveFontSize(3),}}>
           08
        </Text>
        <Text style={{color:"#594f50",fontWeight:'700',fontSize:responsiveFontSize(2),}}>
           Others
        </Text>

         </View>
      </View>
             <View style={{marginTop:8,backgroundColor:'#fafafa',alignItems:'center',height:responsiveHeight(10),display:'flex',flexWrap:'wrap',paddingLeft:10,flexDirection:"row"}}>
<Text style={{color:"#544e63",fontWeight:'700',fontSize:responsiveFontSize(3.75)}}>
           Offers Posted
        </Text>

      </View>
       
      <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={tableHead} widthArr={widthArr} style={styles.header} />
      </Table>
      <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
               
                    />
                  ))
                }
              </Table>
              <View style={{justifyContent:'center',marginTop:20,alignItems:"center",height:50}}>
              <View style={{backgroundColor:'white',width:128,height:40,justifyContent:'center',alignItems:'center',flexDirection:'row',borderRadius:12}}>
              <Text style={{fontSize:12,fontWeight:'600'}}>
               View More
              </Text>
              <Entypo  style={{paddingLeft:30}}name="chevron-small-down" size={24} color="black" />
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
        backgroundColor:"red",
        
    },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff',alignItems:'center' },
    head: {  height: 30,  backgroundColor: '#f1f8ff'  },
    header: { height: 30, color:'#D9344E',backgroundColor: '#E6E6E6' },
    wrapper: { flexDirection: 'row' ,alignItems:'center'},
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 38 },
    text: { textAlign: 'center' },
    footer: { backgroundColor:'red',paddingTop:20,paddingBottom:20,borderRadius:18,justifyContent:'center',alignItems:'center'},
        footer1: { backgroundColor:'white',paddingTop:16,paddingBottom:16,width:"35%",borderRadius:18,},

});
export default Home;
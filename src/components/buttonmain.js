import React from "react";
import { View ,Image, Text, StyleSheet, TouchableOpacity} from "react-native";

const ButtonMain= props => {
    console.log(props);
    return(
        
        <TouchableOpacity
        style={{width: '100%'}}
        onPress={props.onPress}
        >
             <View style={styles.button}>
       <Text 
                style={{
                    color: props.textColor,
                    fontSize:props.size,
                    fontWeight:props.weight,
                }}>
                    {props.title}
                </Text>
            </View>
            
        </TouchableOpacity>
    
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
export default ButtonMain;
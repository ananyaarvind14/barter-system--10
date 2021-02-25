import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Header} from 'react-native-elements';

const MyHeader = props=>{
    return(
       <Header
          centerComponent={
              {
                  text:props.title,

                  style:{
                  
                   color:"#7bfaf3",
                    fontSize:20,
                    fontWeight:"bold",
                    width:1200,
                    textAlign:"center"
                  }
              }
          }
            backgroundColor="#6adcf1"  
       />
    )
}

export default MyHeader
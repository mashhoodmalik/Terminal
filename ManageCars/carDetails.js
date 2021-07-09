import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator,
    Image,
    TextInput,
    ScrollView,
    SafeAreaView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackSvg from '../assets/svgs/back.svg'
import MenuSvg from '../assets/svgs/menudark.svg'
import { icons } from '../assets';

const CarDetails = (props) => {
//test
const{data}=props.route.params
    
      const mainHeader=()=>{
          return(
<View style={{ 
    backgroundColor:'#FFFF',
    flexDirection: 'row', justifyContent: 'space-between', padding: 20, }}>
        <TouchableOpacity
        onPress={()=>{props.navigation.goBack()}}
        >

     
      <Image source={icons.back}/>
        </TouchableOpacity>
        <Text>
           Car Details
        </Text>
        <Text>
            
        </Text>
       

       

      </View>

          )
      }

      const carCard=()=>{
        
          return(


          <View style={{
              
              flexDirection:'row',
              alignItems:'center',
              shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,
              justifyContent:'space-between', backgroundColor:'white', margin:15, borderRadius:25}}>

                <View style={{margin:15}}>
                        <Text style={{fontSize:17,fontStyle:'italic'}}>
                            car Name:  <Text>{data.make}</Text>
                        </Text>
                        <Text style={{fontSize:17,fontStyle:'italic'}}>
                            car Modal:  <Text>{data.model}</Text>
                        </Text>
                        <Text style={{fontSize:17,fontStyle:'italic'}}>
                            car Color:  <Text>{data.color}</Text>
                        </Text>
                        <Text style={{fontSize:17,fontStyle:'italic'}}>
                            car yaer:  <Text>{data.mYear}</Text>
                        </Text>
                        <Text style={{fontSize:17,fontStyle:'italic'}}>
                            car Engine:  <Text>{data.enginePower}</Text>
                        </Text>
                </View>
                <View style={{margin:15}}>
                <Image style={{height:80,width:100}} source={{uri:data.photo}}/>
                </View>
          </View>

          )
      }
    
    return (
        <SafeAreaView>
         
        
        {mainHeader()}
     {carCard()}
        </SafeAreaView>
    )
};
export default CarDetails;

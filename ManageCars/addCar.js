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

const data = [
    {
      make: "Aenean leo",
      modal:"city",
      make:"honda",
        year:"2006",
        engine:"1300",
        color:"Silver",
      imgUrl: "https://picsum.photos/id/11/200/300"
    },
    {
        make: "Aenean leo",
        modal:"civic",
        make:"honda",
          year:"2008",
          engine:"1300",
          color:"Black",
        imgUrl: "https://picsum.photos/id/11/200/300"
      },
    
  ]

const AddCar = (props) => {
//test
    const storeAsyncData = async (data) => {
        console.group("store Data function called")
        try {
          await AsyncStorage.setItem('@Data', data);
        } catch (e) {
            console.log(e)
        }
      };

     const retrieveAsyncData = async () => {
         console.group("reterive function called")
        try {
          const myData = await AsyncStorage.getItem('@Data');
          const parseMyData = JSON.parse(myData);
          if (myData !== null) {
            console.log("User Data is :", parseMyData)
            
          }
        } catch (e) {
            console.log(e)
        }
      };
      const mainHeader=()=>{
          return(
<View style={{ 
    backgroundColor:'lightgrey',
    flexDirection: 'row', justifyContent: 'space-between', padding: 20, }}>
        <TouchableOpacity
        onPress={()=>{props.navigation.goBack()}}
        >

     
        <Text>
           GO BACK
        </Text>
        </TouchableOpacity>
        <Text>
           ADD CAR
        </Text>
        
     
        <Text>
         
        </Text>
       

       

      </View>

          )
      }

      const carCard=(data)=>{
          return(


         <View style={{justifyContent:'center',alignItems:'center'}}>
             <View style={{marginTop:5}}>

             
             <TextInput  
                    style={{height: 40,backgroundColor: 'azure', fontSize: 20,width:'80%'}}  
                    placeholder="Type here to translate!"  
                    onChangeText={(text) => console.log(text)}  
                />  
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
export default AddCar;

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
import { Icon, icons } from '../assets';
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

const ManageCarBrands = (props) => {
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

     
        <Image source={icons.back}/>
        </TouchableOpacity>
        <Text>
          MANGE CAR BRANDS
        </Text>
        
     
        <Text>
         
        </Text>
       

       

      </View>

          )
      }

      const carCard=(data)=>{
          return(


          <TouchableOpacity 
          
          
          style={{
              
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
                        <Text>
                           {data.make}
                        </Text>
                        <Text>
                           { data.modal}
                        </Text>
                        <Text>
                           {data.year}
                        </Text>
                        <Text>
                           {data.engine}
                        </Text>
                        <Text>
                           {data.color}
                        </Text>
                </View>
                <View style={{margin:15}}>
                <Image  
                resizeMode='contain'
                source={{ uri: data.imgUrl }}
                />
                </View>
          </TouchableOpacity>

          )
      }
    
    return (
        <SafeAreaView>
         
        
        {mainHeader()}
        <FlatList
          vertical={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 5, }}
          renderItem={({ item, index }) => {
            return (
              <View>
             {carCard(item)}
              </View>
    
            );
          }}
        
          enableEmptySections={true}
          keyExtractor={(item, index) => index.toString()}
        />

    
        </SafeAreaView>
    )
};
export default ManageCarBrands;

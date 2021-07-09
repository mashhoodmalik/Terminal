import React, { Component } from 'react';
import { Icon, icons } from '../assets';
import { View, StyleSheet, Image, Text,TouchableOpacity,ScrollView ,FlatList} from 'react-native';
class drawerScreen extends Component {

    constructor() {
        super();
       
    }
   
   

    render() {
        return (
            <View style={{ width: '100%',
            
            flex:1,
            backgroundColor: "Orange",
            paddingTop: 20,}}>
                <View>
                    <TouchableOpacity
                    onPress={()=>
                    
                    this.props.navigation.toggleDrawer()}
                    >
                   
                    <Image
                    style={{height:20,width:20,marginLeft:10}}
                    source={icons.back}/>
                    </TouchableOpacity>
                   
                
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:23}}>
                  <View style={{flexDirection:'row',marginLeft:15}}>
                      
                 
                    <TouchableOpacity
                    onPress={()=>{this.props.navigation.navigate('manageCars')}}
                    style={{marginLeft:18,marginTop:0.5}}>
                    <Text style={{fontSize:16,color:"#000"}}>
                       Manage Cars
                        </Text>
                    </TouchableOpacity>
                   
                    </View>



                
                  </View>
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:23}}>
                  <View style={{flexDirection:'row',marginLeft:15}}>
                      
                 
                    <TouchableOpacity
                    onPress={()=>{this.props.navigation.navigate('manageCarBrand')}}
                    style={{marginLeft:18,marginTop:0.5}}>
                    <Text style={{fontSize:16,color:"#000"}}>
                      Manage Car Brands
                        </Text>
                    </TouchableOpacity>
                   
                    </View>



                
                  </View>
               </View>
        );
    }
}


export default drawerScreen;
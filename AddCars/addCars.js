import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator,
    Image,
    StyleSheet,
    TextInput,
    Platform,
    ScrollView,
    SafeAreaView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-tiny-toast'
import storage from '@react-native-firebase/storage';
import { icons } from '../assets';
const addCars = (props) => {
//test
const [Make, setMake] = useState('');
const [Model, setModel] = useState('');
const [MYear, setMYear] = useState('');
const [EnginePower, setEnginePower] = useState('');
const [Color, setColor] = useState('');
const [chapterNo, setChapterNo] = useState(false);
const [chapterVal, setChapterVal] = useState(false);
const [ModelVal, setModelVal] = useState(false);
const [MYearVal, setMYearVal] = useState(false);
const [EnginePowerVal, setEnginePowerVal] = useState(false);
const [ColorVal, setColorVal] = useState(false);
const [circleImage, setCircleImage] = useState('');
const [ImageValidation, setImageValidation] = useState(false);

useEffect(()=> {
 
},[])


async function SaveCar() {
    var type = 'Images';
    // console.log("model,",Model)
    // if (!Make) {
    //     setModelVal(true)
    // }
    // else if (!Model) {
    //     setModelVal(true)
    // }
    // else if (!MYear) {
    //     setMYearVal(true)
    // }
    // else if (!EnginePower) {
    //     setEnginePowerVal(true)
    // }
    // else if (!Color) {
    //     setColorVal(true)
    // } else {
  
        Toast.showLoading('Saving Car Data...')

        console.log("all called")
     
        var finalUrl = circleImage.replace('file:///data/user/0/com.mashoodlabfinalterm/cache/react-native-image-crop-picker/', '')
        var path = 'CarImages/' + type + '/' + finalUrl + ''
        const reference = storage().ref(path);

        const task = reference.putFile(circleImage);

        task.on('state_changed', taskSnapshot => {
            console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
        });

        task.then(async () => {

            var url = await storage()
                .ref(path)
                .getDownloadURL();


            if (url) {





                var S4 = function () {
                    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                };
                var randomNumber = S4() + S4() + S4() + S4() + S4() + S4();
                console.log("random id is:", S4() + S4() + S4() + S4() + S4() + S4())

                // var randomNumber = 'pGAjhpAreNttoLhEfxz' + '' + Math.floor(Math.random() * 100) + 1;
                // console.log('aakash', randomNumber.toString())



                // setSendingData(true)

                firestore()
                    .collection('manageCars')
                    .doc(randomNumber)
                    .set({
                        color:Color ,
                        enginePower: EnginePower,
                        mYear: MYear,
                        make: Make,
                        model: Model,
                        photo: url,
                       id: randomNumber,

                    })
                    .then(() => {
                        // setSendingData(false)
                        Toast.hide()
                        Toast.showSuccess('Car data added')
                    //    console.log("data added")

                    });


            }

        });
    // }
}



const openGallery = () => {

    ImagePicker.openPicker({
        cropping: true,
        cropperCircleOverlay: true,
        freeStyleCropEnabled: true
    }).then(response => {
        console.log("images: ", response);

        let file = {
            name: new Date() + '.jpg',
            type: 'image/jpeg',
            uri:
                Platform.OS === 'android'
                    ? response.path
                    : response.path.replace('file://', ''),
        };


        let image = {
            name: new Date() + '.jpg',
            type: 'image/jpeg',
            uri:
                Platform.OS === 'android'
                    ? response.path
                    : response.path.replace('file://', ''),
        };


        setCircleImage(image.uri)
        setImageValidation(false)

    });

}

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
    ADD Cars
  </Text>
  <Text>
      
  </Text>
 

 

</View>

    )
}

  
    return (
        <SafeAreaView>
            <ScrollView>
            {mainHeader()}
        <View style={{padding:20}}>
           
      

        <Text style={styles.selecttitle}>ADD Make *</Text>
<TextInput
    style={styles.textinput}
    placeholderTextColor={'rgb(145,155,173)'}
    placeholder={'Add make'}
    value={Make}
    onChangeText={(text) => {setMake(text),setChapterVal(false) }} />

{chapterVal == true ? <Text style={{
    marginTop: 4,
    fontSize: 12,
    color:'#E92828'
}}>* Please enter Make</Text> : null}


<Text style={styles.selecttitle}>ADD Model *</Text>
<TextInput
    style={styles.textinput}
    placeholderTextColor={'rgb(145,155,173)'}
    placeholder={'Add Model No'}
    value={Model}
    onChangeText={(text) => {setModel(text),setModelVal(false) }} />

{ModelVal == true ? <Text style={{
    marginTop: 4,
    fontSize: 12,
    color:'#E92828'
}}>* Please enter Model No</Text> : null}


<Text style={styles.selecttitle}>ADD Manufacturing Year *</Text>
<TextInput
    style={styles.textinput}
    placeholderTextColor={'rgb(145,155,173)'}
    placeholder={'Add Manufacturing Year'}
    value={MYear}
    onChangeText={(text) => {setMYear(text),setMYearVal(false) }} />

{MYearVal == true ? <Text style={{
    marginTop: 4,
    fontSize: 12,
    color:'#E92828'
}}>* Please enter Manufacturing Year</Text> : null}



<Text style={styles.selecttitle}>ADD Engine Power *</Text>
<TextInput
    style={styles.textinput}
    placeholderTextColor={'rgb(145,155,173)'}
    placeholder={'Add Engine Power'}
    value={EnginePower}
    onChangeText={(text) => {setEnginePower(text),setEnginePowerVal(false) }} />

{EnginePowerVal == true ? <Text style={{
    marginTop: 4,
    fontSize: 12,
    color:'#E92828'
}}>* Please enter Engine Power</Text> : null}




<Text style={styles.selecttitle}>ADD Car Color *</Text>
<TextInput
    style={styles.textinput}
    placeholderTextColor={'rgb(145,155,173)'}
    placeholder={'Add Car Color'}
    value={Color}
    onChangeText={(text) => {setColor(text),setColorVal(false) }} />

{ColorVal == true ? <Text style={{
    marginTop: 4,
    fontSize: 12,
    color:'#E92828'
}}>* Please enter Car Color</Text> : null}


<Text style={styles.selecttitle}>Image Upload</Text>

{circleImage === null || circleImage === "" ? <TouchableOpacity
    activeOpacity={0.99}
    onPress={() => openGallery()}>
    <View style={[styles.CategoriesViews, { height: circleImage == "" ? 50 : 110 }]}>
        <View style={styles.FirstView}>
            <Text style={[styles.selectclass, { marginLeft: -10 }]}>Please Attached Image</Text>

        </View>
    </View>
</TouchableOpacity> :
    <Image
        source={{ uri: circleImage }}
        style={{ height: 80, width: 80, borderRadius: 10, marginTop: 10, marginBottom: 10 }}
    />}
{ImageValidation ? <Text style={{
    marginTop: 4,
    fontFamily: fonts['Gotham-Medium'],
    fontSize: 12,
    color: Colors.absent
}}>* Please select Image</Text> : null}



<TouchableOpacity
                                    onPress={() => SaveCar()}
                                    style={{ flexDirection: 'row', justifyContent: 'center',backgroundColor:'#1A595A',borderRadius:5 }}>

                                    <Text style={styles.UploadDocument}>ADD Car</Text>



                                </TouchableOpacity>


        </View>
        </ScrollView>
        </SafeAreaView>
    )
};
export default addCars;
const styles=StyleSheet.create({
    textinput:{
       height: 40,
        borderRadius: 6,
        padding: Platform.OS == "ios" ? 15 : 0,
        paddingTop: Platform.OS == "ios" ? 15 : 0,
        paddingLeft: 15,
        justifyContent: 'center',
        backgroundColor:'#FFFFFF',
        fontSize: 14,
        color: 'rgb(145,155,173)',
        elevation: 1,
        shadowColor: "rgba(0,0,0,0.8)",
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: Platform.OS == 'ios' ? 0.15 : 0.7,},


        selecttitle:{
            marginTop: 15,
            fontSize: 14,
            color: '#181818',
            marginTop: 20,
            marginBottom: 4,
        },
        CategoriesViews: {
            marginBottom: 10,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            elevation: 1,
            shadowColor: "rgba(0,0,0,0.8)",
            shadowOffset: { width: 0, height: 0.5 },
            shadowOpacity: Platform.OS == 'ios' ? 0.15 : 0.7,
        },
        FirstView: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 25,
            marginRight: 15
        },
        selectclass: {
            fontSize: 14,
            color:'rgb(145,155,173)'
        },
        UploadDocument: {
            marginTop: 15,
            fontSize: 14,
            color:'#FFFFFF',
            marginTop: 10,
            marginBottom: 10
        },
})

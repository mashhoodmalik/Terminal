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
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { Icon, icons } from '../assets';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-tiny-toast'
// const data = [
//     {
//       make: "Aenean leo",
//       modal:"city",
//       make:"honda",
//         year:"2006",
//         engine:"1300",
//         color:"Silver",
//       imgUrl: "https://picsum.photos/id/11/200/300"
//     },
//     {
//         make: "Aenean leo",
//         modal:"civic",
//         make:"honda",
//           year:"2008",
//           engine:"1300",
//           color:"Black",
//         imgUrl: "https://picsum.photos/id/11/200/300"
//       },

//   ]

const ManageCars = (props) => {
    //test

    const [data, setData] = useState('')
    useEffect(() => {
        var localCarArray = []
        const carData = firestore()
            .collection('manageCars')
            .onSnapshot(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    localCarArray.push(documentSnapshot.data())
                });
                setData(localCarArray)
                console.log('car data', localCarArray)

            });
    }, [])
    async function deleteCar(Id) {

        Toast.showLoading("Deleting...")
        var docId = firestore().collection("manageCars").where('id', "==", Id).get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                var docId = doc.id;


                firestore()
                    .collection('manageCars')
                    .doc(docId)
                    .delete()
                    .then(() => {
                        console.log('car data deleted!');
                        Toast.hide()

                    });
            });
        });


    }
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
    const mainHeader = () => {
        return (
            <View style={{
                backgroundColor: 'lightgrey',
                alignItems: 'center',
                flexDirection: 'row', justifyContent: 'space-between', padding: 20,
            }}>
                <TouchableOpacity
                    onPress={() => { props.navigation.goBack() }}
                >

                    <Image source={icons.back} />


                </TouchableOpacity>
                <Text>
                    Manage cars
                </Text>
                <TouchableOpacity
                    onPress={() => { props.navigation.navigate('addcars') }}
                >


                    <Text>
                        + Add Car
                    </Text>
                </TouchableOpacity>




            </View>

        )
    }

    const carCard = (data) => {
        return (


            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('carDetails', {
                        data: data
                    })
                }}

                style={{

                    flexDirection: 'row',
                    alignItems: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,

                    elevation: 12,
                    justifyContent: 'space-between', backgroundColor: 'lightgrey', margin: 15, borderRadius: 25
                }}>

                <View style={{ margin: 15 }}>
                    <TouchableOpacity
                        onPress={() => {

                            deleteCar(data.id)

                        }}
                    >
                        <Image
                            style={{ height: 20, width: 20 }}
                            source={icons.trash} />
                    </TouchableOpacity>

                    <Text>
                        Make: {data.make}
                    </Text>
                    <Text>
                        Model: {data.model}
                    </Text>
                    <Text>
                        Year: {data.mYear}
                    </Text>
                    <Text>
                        Enigine: {data.enginePower}
                    </Text>
                    <Text>
                        Color: {data.color}
                    </Text>
                </View>
                <View style={{ margin: 15 }}>
                    <Image
                        resizeMode='contain'
                        style={{ width: 80, height: 80 }}
                        source={{ uri: data.photo }}
                    />
                </View>
            </TouchableOpacity>

        )
    }

    return (
        <SafeAreaView

            style={{
                flex: 1,
                backgroundColor: 'white'
            }}>


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
export default ManageCars;

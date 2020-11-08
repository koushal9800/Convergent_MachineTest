import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {  Divider } from 'react-native-elements';

function FilterScreen (){
    return(
        <View style={{ flex:1 }} >
            <Text style={{ padding:20, fontWeight:'bold', fontSize:18 }} > Sort Items by </Text>


            <View style={{ flexDirection:'row', justifyContent:'space-around', paddingTop:15 }} >

                <View
                style={{
                    shadowColor: 'black',
                    shadowOffset: { widht: 0, height: 2 },
                    shadowOpacity: 0.26,
                    shadowRadius: 6,
                    elevation: 10,
                    backgroundColor: 'white',
                    // padding: 20,
                    //borderRadius: 10,
                    height:100,
                    MarginTop:10, 
                    //alignItems:'center',
                    justifyContent:'center',
                    width:100, 
                    alignItems:'center'
                }}
                >

                    <Image
                    style={{ width:60, height:60, resizeMode:'contain' }}
                    source={require('../assests/icons/icon80.png')}
                    />

                    <Text 
                    style={{ fontSize:12, textAlign:'center', color:'#22478b' }}
                    >
                        Price High to Low
                    </Text>

                </View>




                <View
                style={{
                    shadowColor: 'black',
                    shadowOffset: { widht: 0, height: 2 },
                    shadowOpacity: 0.26,
                    shadowRadius: 6,
                    elevation: 10,
                    backgroundColor: 'white',
                    // padding: 20,
                    //borderRadius: 10,
                    height:100,
                    MarginTop:10,  
                    //alignItems:'center',
                    justifyContent:'center',
                    width:100,
                    alignItems:'center'
                }}
                >

<Image
                    style={{ width:60, height:60, resizeMode:'contain' }}
                    source={require('../assests/icons/icon81.png')}
                    />

                    <Text 
                    style={{ fontSize:12, textAlign:'center', color:'#22478b' }}
                    >
                        Price Low to High
                    </Text>

                </View>




                <View
                style={{
                    shadowColor: 'black',
                    shadowOffset: { widht: 0, height: 2 },
                    shadowOpacity: 0.26,
                    shadowRadius: 6,
                    elevation: 10,
                    backgroundColor: 'white',
                    // padding: 20,
                    //borderRadius: 10,
                    height:100,
                    MarginTop:10,  
                    ///alignItems:'center',
                    justifyContent:'center',
                    width:100,
                    alignItems:'center'
                }}
                >

<Image
                    style={{ width:60, height:60, resizeMode:'contain' }}
                    source={require('../assests/icons/icon82.png')}
                    />

                    <Text 
                    style={{ fontSize:12, textAlign:'center', color:'#22478b' }}
                    >
                        Newest First
                    </Text>

                </View>




                <View
                style={{
                    shadowColor: 'black',
                    shadowOffset: { widht: 0, height: 2 },
                    shadowOpacity: 0.26,
                    shadowRadius: 6,
                    elevation: 10,
                    backgroundColor: 'white',
                    // padding: 20,
                    //borderRadius: 10,
                    height:100,
                    MarginTop:10, //alignItems:'center',
                    justifyContent:'center',
                    width:100,
                    alignItems:'center'
                }}
                >

<Image
                    style={{ width:60, height:60, resizeMode:'contain' }}
                    source={require('../assests/icons/icon83.png')}
                    />

                    <Text 
                    style={{ fontSize:12, textAlign:'center', color:'#22478b' }}
                    >
                       Alphabetically
                    </Text>

                </View>

            </View>



                <View style={{ padding:20 }} >
                    <Text style={{ fontSize:20, fontWeight:'bold' }}  >Filter By</Text>
                </View>


                <View style={{ flexDirection:'row', padding:20, justifyContent:'space-between' }} >

                    <View  style={{ flexDirection:'row' }}  >
                        <Text style={{ color:'red', fontSize:18 }} > Category </Text>
                        <AntDesign style={{ paddingTop:8 }}
                        name="right"
                        color="#707070"
                        size={20}
                        />

<Text style={{ fontSize:18 }} > Sub Category </Text>


                    </View>
                    <AntDesign style={{ paddingTop:8 }}
                        name="right"
                        color="#707070"
                        size={20}
                        />

                </View>
                <Divider style={{ height:1, backgroundColor:'#707070' }} /> 




                <View style={{ flexDirection:'row', padding:30, justifyContent:'space-between' }} >

                 
                        <Text style={{ fontSize:18 }} > Brand </Text>
                        <AntDesign style={{ paddingTop:8 }}
                        name="right"
                        color="#707070"
                        size={20}
                        />

                </View>
                <Divider style={{ height:1, backgroundColor:'#707070' }} /> 



                <View style={{ flexDirection:'row', padding:30, justifyContent:'space-between' }} >

                 
                        <Text style={{  fontSize:18 }} > Color </Text>
                        <AntDesign style={{ paddingTop:8 }}
                        name="right"
                        color="#707070"
                        size={20}
                        />

                </View>
                <Divider style={{ height:1, backgroundColor:'#707070' }} /> 



                <View style={{ flexDirection:'row', padding:30, justifyContent:'space-between' }} >

                 
                        <Text style={{  fontSize:18 }} > Size </Text>
                        <AntDesign style={{ paddingTop:8 }}
                        name="right"
                        color="#707070"
                        size={20}
                        />

                </View>
                <Divider style={{ height:1, backgroundColor:'#707070' }} /> 




                <View style={{ flexDirection:'row', padding:30, justifyContent:'space-between' }} >

                 
                        <Text style={{  fontSize:18 }} > Price Range </Text>
                        <AntDesign style={{ paddingTop:8 }}
                        name="right"
                        color="#707070"
                        size={20}
                        />

                </View>
                <Divider style={{ height:1, backgroundColor:'#707070' }} /> 




                <TouchableOpacity style={{ justifyContent:'center', alignItems:'center', marginTop:30,  }} >
          <View style={{ width:'80%', height:60, borderRadius:10, backgroundColor:'red', alignItems:'center', justifyContent:'center' }} >
            <Text style={{ fontSize:20, color:'#fff', fontWeight:'bold' }} > Apply</Text>
          </View>
        </TouchableOpacity>

        </View>
    )
}

export default FilterScreen;
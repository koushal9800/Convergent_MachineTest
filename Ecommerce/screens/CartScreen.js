import React from 'react';
import { View, Text, ScrollView,TouchableOpacity,Image } from 'react-native';
import {  Divider } from 'react-native-elements';

function CartScreen (){
    return(
        <ScrollView style={{ flex:1 }} >

            <View style={{ flexDirection:'row', justifyContent:'space-between', padding:10,  }} >
                <Text style={{ textAlign:'center', fontWeight:'bold', paddingTop:10 }} > Total : KD 12.640 </Text>
                <TouchableOpacity
                style={{ width:100, height:40, borderRadius:20, backgroundColor:'red', justifyContent:'center' }}
                >
                    <Text style={{ textAlign:'center', fontWeight:'bold', color:'white' }} > 04 Items </Text>
                </TouchableOpacity>
            </View>
            <Divider style={{ height:1, backgroundColor:'black' }} /> 


            <View style={{ flexDirection:'row', padding:10 }} >
                <Image 
                style={{ width:30, height:30 }}
                source={require('../assests/icons/icon36.jpg')}
                />
                <Text style={{ fontSize:16 }} > Sold by </Text>
                <Text style={{ color:'#3961af', fontWeight:'bold', fontSize:16 }} > Natures Baby </Text>
            </View>


            <View style={{ justifyContent:'center', alignItems:'center', paddingTop:10, paddingBottom:10 }} >
                <View style={{ 
                    shadowColor: 'black',
                    shadowOffset: { widht: 0, height: 2 },
                    shadowOpacity: 0.26,
                    shadowRadius: 6,
                    elevation: 10,
                    backgroundColor: 'white',
                    // padding: 20,
                    //borderRadius: 10,
                    height:120,
                    MarginTop:10, flexDirection:'row', 
                    //alignItems:'center',
                    justifyContent:'space-around',
                    width:'95%'
                 }} >
                     <Image 
                   
                     source={require('../assests/icons/icon35.png')}
                     />

                     <View style={{ paddingTop:10 }} >
                         <Text style={{ fontWeight:'bold' }} >Apple Iphone XS(Gold Color) </Text>
                         <View style={{ flexDirection:'row' }} >
                             <Text style={{ color:'red' }} >KD 4.600</Text>
                             <Text style={{ textDecorationLine:'line-through' }} > Kd 8.600  </Text>
                         </View>
                         <View style={{ flexDirection:'row' }} >
                         <TouchableOpacity style={{ width:25, height:25, backgroundColor:'#3498DB', alignItems:'center', justifyContent:'center'  }} >
          <Text style={{ fontSize:20, fontWeight:'bold', color:'white', textAlign:'center' }} > - </Text>
        </TouchableOpacity>

        <View style={{ paddingLeft:10 }} > 
        <Text style={{ fontSize:18, textAlign:'center',  }} > 2 </Text>
        </View>

        <TouchableOpacity style={{ width:25, height:25, backgroundColor:'#3498DB',justifyContent:'center', alignItems:'center', marginLeft:10 }} >
          <Text style={{ fontSize:20, fontWeight:'bold', color:'white', textAlign:'center' }}  > + </Text>
        </TouchableOpacity>
                         </View>
                     </View>


                     <Image
                     style={{ width:30, height:30, resizeMode:'contain', marginTop:5 }}
                     source={require('../assests/icons/delete.png')}
                     />

                </View>
            </View>







            <View style={{ justifyContent:'center', alignItems:'center', paddingTop:10, paddingBottom:10 }} >
                <View style={{ 
                    shadowColor: 'black',
                    shadowOffset: { widht: 0, height: 2 },
                    shadowOpacity: 0.26,
                    shadowRadius: 6,
                    elevation: 10,
                    backgroundColor: 'white',
                    // padding: 20,
                    //borderRadius: 10,
                    height:120,
                    MarginTop:10, flexDirection:'row', 
                    //alignItems:'center',
                    justifyContent:'space-around',
                    width:'95%'
                 }} >
                     <Image 
                   
                     source={require('../assests/icons/icon37.jpg')}
                     />

                     <View style={{ paddingTop:10 }} >
                         <Text style={{ fontWeight:'bold', textAlign:'justify' }} >MI LED Smart TV 4A Pro 108 cm(43) {"\n"}with Android </Text>
                         <View style={{ justifyContent:'space-between', flexDirection:'row', paddingTop:10 }} >
                         <View style={{ flexDirection:'row' }} >
                         <TouchableOpacity style={{ width:25, height:25, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:'black'  }} >
          <Text style={{ fontSize:20, fontWeight:'bold',  textAlign:'center' }} > - </Text>
        </TouchableOpacity>

        <View style={{ paddingLeft:10 }} > 
        <Text style={{ fontSize:18, textAlign:'center',  }} > 2 </Text>
        </View>

        <TouchableOpacity style={{ width:25, height:25,  borderWidth:1, borderColor:'black' ,justifyContent:'center', alignItems:'center', marginLeft:10 }} >
          <Text style={{ fontSize:20, fontWeight:'bold',  textAlign:'center' }}  > + </Text>
        </TouchableOpacity>
                         </View>

                         <View style={{ flexDirection:'row' }} >
                             <Text style={{ color:'red' }} >KD 4.600</Text>
                             <Text style={{ textDecorationLine:'line-through' }} > Kd 8.600  </Text>
                         </View>
                         </View>
                     </View>


                     <Image
                     style={{ width:30, height:30, resizeMode:'contain', marginTop:5 }}
                     source={require('../assests/icons/delete.png')}
                     />

                </View>
            </View>





            <View style={{ justifyContent:'center', alignItems:'center', paddingTop:10, paddingBottom:10 }} >
                <View style={{ 
                    shadowColor: 'black',
                    shadowOffset: { widht: 0, height: 2 },
                    shadowOpacity: 0.26,
                    shadowRadius: 6,
                    elevation: 10,
                    backgroundColor: 'white',
                    // padding: 20,
                    //borderRadius: 10,
                    height:120,
                    MarginTop:10, flexDirection:'row', 
                    //alignItems:'center',
                    justifyContent:'space-around',
                    width:'95%'
                 }} >
                     <Image 
                   
                     source={require('../assests/icons/icon35.png')}
                     />

                     <View style={{ paddingTop:10 }} >
                         <Text style={{ fontWeight:'bold', textAlign:'justify' }} >MI LED Smart TV 4A Pro 108 cm(43) {"\n"}with Android </Text>
                         <Text style={{ color:'#707070' }} > This is short details show here </Text>
                         <View style={{ justifyContent:'space-between', flexDirection:'row', paddingTop:10 }} >


                         <View style={{ flexDirection:'row' }} >
                             <Text style={{ color:'red' }} >KD 4.600</Text>
                             <Text style={{ textDecorationLine:'line-through' }} > Kd 8.600  </Text>
                         </View>

                         <View style={{ flexDirection:'row' }} >
                         <TouchableOpacity style={{ width:25, height:25, alignItems:'center', justifyContent:'center', backgroundColor:'#3498DB',  }} >
          <Text style={{ fontSize:20, fontWeight:'bold',  textAlign:'center', color:'white' }} > - </Text>
        </TouchableOpacity>

        <View style={{ paddingLeft:10 }} > 
        <Text style={{ fontSize:18, textAlign:'center',  }} > 2 </Text>
        </View>

        <TouchableOpacity style={{ width:25, height:25,  backgroundColor:'#3498DB',justifyContent:'center', alignItems:'center', marginLeft:10 }} >
          <Text style={{ fontSize:20, fontWeight:'bold',  textAlign:'center', color:'white' }}  > + </Text>
        </TouchableOpacity>
                         </View>

                         
                         </View>
                     </View>


                     <Image
                     style={{ width:30, height:30, resizeMode:'contain', marginTop:5 }}
                     source={require('../assests/icons/delete.png')}
                     />

                </View>
            </View>




            <View style={{ flexDirection:'row', padding:10 }} >
                <Image 
                style={{ width:30, height:30 }}
                source={require('../assests/icons/icon34.png')}
                />
                <Text style={{ fontSize:16 }} > Sold by </Text>
                <Text style={{ color:'#3961af', fontWeight:'bold', fontSize:16 }} > Perfumes Kuwait </Text>
            </View>




            <View style={{ justifyContent:'center', alignItems:'center', paddingTop:10, paddingBottom:10 }} >
                <View style={{ 
                    shadowColor: 'black',
                    shadowOffset: { widht: 0, height: 2 },
                    shadowOpacity: 0.26,
                    shadowRadius: 6,
                    elevation: 10,
                    backgroundColor: 'white',
                    // padding: 20,
                    //borderRadius: 10,
                    height:120,
                    MarginTop:10, flexDirection:'row', 
                    //alignItems:'center',
                    justifyContent:'space-around',
                    width:'95%'
                 }} >
                     <Image 
                   
                     source={require('../assests/icons/icon35.png')}
                     />

                     <View style={{ paddingTop:10 }} >
                         <Text style={{ fontWeight:'bold' }} >Apple Iphone XS(Gold Color) </Text>
                         <View style={{ flexDirection:'row' }} >
                             <Text style={{ color:'red' }} >KD 4.600</Text>
                             <Text style={{ textDecorationLine:'line-through' }} > Kd 8.600  </Text>
                         </View>
                         <View style={{ flexDirection:'row' }} >
                         <TouchableOpacity style={{ width:25, height:25, backgroundColor:'#3498DB', alignItems:'center', justifyContent:'center'  }} >
          <Text style={{ fontSize:20, fontWeight:'bold', color:'white', textAlign:'center' }} > - </Text>
        </TouchableOpacity>

        <View style={{ paddingLeft:10 }} > 
        <Text style={{ fontSize:18, textAlign:'center',  }} > 2 </Text>
        </View>

        <TouchableOpacity style={{ width:25, height:25, backgroundColor:'#3498DB',justifyContent:'center', alignItems:'center', marginLeft:10 }} >
          <Text style={{ fontSize:20, fontWeight:'bold', color:'white', textAlign:'center' }}  > + </Text>
        </TouchableOpacity>
                         </View>
                     </View>


                     <Image
                     style={{ width:30, height:30, resizeMode:'contain', marginTop:5 }}
                     source={require('../assests/icons/delete.png')}
                     />

                </View>
            </View>







            <View style={{ justifyContent:'center', alignItems:'center', paddingTop:10, paddingBottom:10 }} >
                <View style={{ 
                    shadowColor: 'black',
                    shadowOffset: { widht: 0, height: 2 },
                    shadowOpacity: 0.26,
                    shadowRadius: 6,
                    elevation: 10,
                    backgroundColor: 'white',
                    // padding: 20,
                    //borderRadius: 10,
                    height:120,
                    MarginTop:10, flexDirection:'row', 
                    //alignItems:'center',
                    justifyContent:'space-around',
                    width:'95%'
                 }} >
                     <Image 
                   
                     source={require('../assests/icons/icon37.jpg')}
                     />

                     <View style={{ paddingTop:10 }} >
                         <Text style={{ fontWeight:'bold', textAlign:'justify' }} >MI LED Smart TV 4A Pro 108 cm(43) {"\n"}with Android </Text>
                         <View style={{ justifyContent:'space-between', flexDirection:'row', paddingTop:10 }} >
                         <View style={{ flexDirection:'row' }} >
                         <TouchableOpacity style={{ width:25, height:25, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:'black'  }} >
          <Text style={{ fontSize:20, fontWeight:'bold',  textAlign:'center' }} > - </Text>
        </TouchableOpacity>

        <View style={{ paddingLeft:10 }} > 
        <Text style={{ fontSize:18, textAlign:'center',  }} > 2 </Text>
        </View>

        <TouchableOpacity style={{ width:25, height:25,  borderWidth:1, borderColor:'black' ,justifyContent:'center', alignItems:'center', marginLeft:10 }} >
          <Text style={{ fontSize:20, fontWeight:'bold',  textAlign:'center' }}  > + </Text>
        </TouchableOpacity>
                         </View>

                         <View style={{ flexDirection:'row' }} >
                             <Text style={{ color:'red' }} >KD 4.600</Text>
                             <Text style={{ textDecorationLine:'line-through' }} > Kd 8.600  </Text>
                         </View>
                         </View>
                     </View>


                     <Image
                     style={{ width:30, height:30, resizeMode:'contain', marginTop:5 }}
                     source={require('../assests/icons/delete.png')}
                     />

                </View>
            </View>


            <TouchableOpacity style={{ justifyContent:'center', alignItems:'center', marginTop:30, marginBottom:20 }} >
          <View style={{ width:'80%', height:60, borderRadius:10, backgroundColor:'#43BE31', alignItems:'center', justifyContent:'center' }} >
            <Text style={{ fontSize:20, color:'#fff', fontWeight:'bold' }} > Proceed To Checkout </Text>
          </View>
        </TouchableOpacity>
            
        </ScrollView>
    )
}

export default CartScreen;
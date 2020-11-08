import React from 'react';
import { View, Text, Button, Image, ScrollView,TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';

import ProductCard from '../components/ProductCard';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';


function DetailsScreen() {
    return (
      <ScrollView style={{ flex: 1, }}>
      <Image 
      style={{ width:'100%', height:300, resizeMode:'cover' }}
      source={ require('../assests/icons/icon92.png') }
      />

      <View style={{ padding:10 }} >
      <Text style={{ padding:10, fontSize:18, fontWeight:'bold' }} >
        The Prime - Luxary Watch Boutique
      </Text>
      </View>

      <View style={{ flexDirection:'row',   paddingLeft:20, }} >
        <Text style={{ color:'red' }} >KD 4.600</Text>
        <Text style={{ textDecorationLine:'line-through',paddingLeft:10  }} >KD 4.600</Text>
        <View style={{ paddingLeft:10 }} >
        <TouchableOpacity style={{ width:25, height:25, backgroundColor:'#3498DB', alignItems:'center', justifyContent:'center'  }} >
          <Text style={{ fontSize:20, fontWeight:'bold', color:'white', textAlign:'center' }} > - </Text>
        </TouchableOpacity>
        </View>


        <View style={{ paddingLeft:10 }} > 
        <Text style={{ fontSize:18, textAlign:'center',  }} > 2 </Text>
        </View>

        <View style={{ paddingLeft:10 }} >
        <TouchableOpacity style={{ width:25, height:25, backgroundColor:'#3498DB',justifyContent:'center', alignItems:'center',  }} >
          <Text style={{ fontSize:20, fontWeight:'bold', color:'white', textAlign:'center' }}  > + </Text>
        </TouchableOpacity>
        </View>

      </View>


      <Text style={{ paddingTop:10, paddingLeft:20, fontWeight:'bold', fontSize:18,  }} >  
        Description
      </Text>
      <Text style={{ paddingTop:10, paddingLeft:20, color:'#707070', textAlign:'justify', paddingRight:10 }} >  
        Are you tired of accessing your entertainment on small screens? Bring Home this 108 cm (43) Full HD Ready LED Smart TV. This is the 2019 edition.
      </Text>


      <View style={{ height:60, backgroundColor:'#DAE0E2', marginTop:10 , flexDirection:'row', paddingLeft:20, alignItems:'center' }} >
        <Text style={{fontWeight:'bold', fontSize:16}} > Select Color  </Text>

        <View 
        style={{ width:30, height:30, borderRadius:30/2, backgroundColor:'#000' }}
        ></View>

<View 
        style={{ width:30, height:30, borderRadius:30/2, backgroundColor:'#E83350', marginLeft:10 }}
        ></View>

<View 
        style={{ width:30, height:30, borderRadius:30/2, backgroundColor:'#0A79DF', marginLeft:10 }}
        ></View>

      </View>


      <View style={{ height:60 , flexDirection:'row', paddingLeft:20, alignItems:'center', borderWidth:1, borderColor:'#707070', justifyContent:'space-evenly' }} >
        <Text style={{fontWeight:'bold', fontSize:16}} > Size </Text>

        <View 
        style={{ width:70, height:40, backgroundColor:'red', borderRadius:20, alignItems:'center', justifyContent:'center' }}
        >
          <Text style={{ fontSize:16, fontWeight:'bold', color:'white' }} >XS</Text>
        </View>


        <View 
        style={{ width:70, height:40,  borderRadius:20, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:'black' }}
        >
          <Text style={{ fontSize:16, fontWeight:'bold' }} >XL</Text>
        </View>



        <View 
        style={{ width:70, height:40, borderWidth:1, borderColor:'black',borderRadius:20, alignItems:'center', justifyContent:'center' }}
        >
          <Text style={{ fontSize:16, fontWeight:'bold' }} >XXL</Text>
        </View>


        <View 
        style={{ width:70, height:40, borderWidth:1, borderColor:'black', borderRadius:20, alignItems:'center', justifyContent:'center' }}
        >
          <Text style={{ fontSize:16, fontWeight:'bold' }} >2XL</Text>
        </View>


        <View 
        style={{ width:70, height:40, borderWidth:1, borderColor:'black', borderRadius:20, alignItems:'center', justifyContent:'center' }}
        >
          <Text style={{ fontSize:16, fontWeight:'bold' }} >3XL</Text>
        </View>
      </View>

      <Text style={{ paddingTop:10, paddingLeft:20, fontWeight:'bold', fontSize:20 }} > Product Features  </Text>
      <View style={{ justifyContent:'center', alignItems:'center', marginTop:10 }} >
      <Divider style={{ height:1, backgroundColor:'black',  width:'90%',  }} /> 
        </View>

      <View style={{ paddingLeft:20, justifyContent:'space-between', flexDirection:'row', paddingTop:10 }} >
        <Text style={{ fontSize:16, color:'#707070' }} >Brand </Text>
        <Text style={{ fontSize:16, paddingRight:20 }} > Reebok</Text>
      </View>
      <View style={{ justifyContent:'center', alignItems:'center', marginTop:10 }} >
      <Divider style={{ height:1, backgroundColor:'black',  width:'90%',  }} /> 
        </View>




        <View style={{ paddingLeft:20, justifyContent:'space-between', flexDirection:'row', paddingTop:10 }} >
        <Text style={{ fontSize:16, color:'#707070' }} >Material </Text>
        <Text style={{ fontSize:16, paddingRight:20 }} > Polyester</Text>
      </View>
      <View style={{ justifyContent:'center', alignItems:'center', marginTop:10 }} >
      <Divider style={{ height:1, backgroundColor:'black',  width:'90%',  }} /> 
        </View>



        <View style={{ paddingLeft:20, justifyContent:'space-between', flexDirection:'row', paddingTop:10 }} >
        <Text style={{ fontSize:16, color:'#707070' }} >Model Name </Text>
        <Text style={{ fontSize:16, paddingRight:20 }} > Galaxy J5 Prime</Text>
      </View>
      <View style={{ justifyContent:'center', alignItems:'center', marginTop:10 }} >
      <Divider style={{ height:1, backgroundColor:'black',  width:'90%',  }} /> 
        </View>


        <View style={{ paddingLeft:20, justifyContent:'space-between', flexDirection:'row', paddingTop:10 }} >
        <Text style={{ fontSize:16, color:'#707070' }} >Color </Text>
        <Text style={{ fontSize:16, paddingRight:20 }} > Black, Red, Green</Text>
      </View>
      <View style={{ justifyContent:'center', alignItems:'center', marginTop:10 }} >
      <Divider style={{ height:1, backgroundColor:'black',  width:'90%',  }} /> 
        </View>


        <TouchableOpacity style={{ justifyContent:'center', alignItems:'center', marginTop:10 }} >
          <View style={{ width:'80%', height:60, borderRadius:10, backgroundColor:'#43BE31', alignItems:'center', justifyContent:'center' }} >
            <Text style={{ fontSize:20, color:'#fff', fontWeight:'bold' }} > Add To Cart </Text>
          </View>
        </TouchableOpacity>


        <View style={{ flexDirection:'row', paddingTop:10,justifyContent:'space-evenly' }} > 

          <View style={{ flexDirection:'row', paddingLeft:20 }} >
            <FontAwesome 
            name="share"
            color="red"
            size={30}
            />
            <Text> Send to a Friend </Text>
            </View> 

            <View style={{ flexDirection:'row', paddingLeft:20,  }} >
              <Text>Share this product : </Text> 
              <Entypo 
              name="facebook-with-circle"
              color='#0A79DF'
              size={30}
              />
              <Entypo 
              name="twitter-with-circle"
              color='#67E6DC'
              size={30}
              />
              <Entypo 
              name="google--with-circle"
              color='#E71C23'
              size={30}
              />
            </View>

</View>


<View style={{ paddingBottom:10, paddingTop:10 }} >

  <View style={{ height:70, backgroundColor:'#DAE0E2',flexDirection:'row', alignItems:'center'  }} >

    <Image 
    style={{ width:100, height:100, resizeMode:'contain', marginLeft:20 }}
    source={ require('../assests/icons/icon65.png') }
    />

    <View style={{ marginLeft:10 }} >
      <Text style={{ fontSize:18, fontWeight:'bold' }} > Company Name Here </Text>
      <View style={{flexDirection:'row'}} >
      <Entypo 
              name="star"
              color='#0A79DF'
              size={30}
              />
              <Entypo 
              name="star"
              color='#0A79DF'
              size={30}
              />
              <Entypo 
              name="star"
              color='#0A79DF'
              size={30}
              />
              <Entypo 
              name="star-outlined"
              color='#0A79DF'
              size={30}
              />
              <Entypo 
              name="star-outlined"
              color='#0A79DF'
              size={30}
              />
      </View>
    </View>

    <TouchableOpacity style={{ 
      width:120, height:40, backgroundColor:'#25CCF7', marginLeft:10, justifyContent:'center'
     }} >
      <Text style={{ textAlign:'center', color:'#fff' }} > View Profile </Text>
    </TouchableOpacity>

  </View>

            </View>







            <View style={{ flexDirection:'row', justifyContent:'space-between', padding:20 }} >
            <Text style={{ fontSize:18, fontWeight:'bold' }} > Related Products </Text>
            <TouchableOpacity  
            style={{ borderWidth:1, borderColor:'red',backgroundColor:'red', width:80,height:30 }}
            >
                <Text style={{ textAlign:'center', color:'white' }} > SEE ALL </Text>
            </TouchableOpacity>
        </View>

        <View style={{ flexDirection:'row', justifyContent:'space-between' }} >

        <TouchableOpacity  onPress={ ()=> navigation.navigate('Details')} >
        <ProductCard productTitle="Featured Products"
        Image={require('../assests/icons/icon60.png')}
        Image2={require('../assests/icons/heart.png')}
        productDetails=" Apple iPhone7(Black) "
        productDiscountPrice="KD 6.800"
        productPrice="KD 8.640"
        />
        </TouchableOpacity>


        <TouchableOpacity >
<ProductCard productTitle="Featured Products"
        Image={require('../assests/icons/icon75.jpg')}
        Image2={require('../assests/icons/heart.png')}
        productDetails=" Apple iPhone7(Black) "
        productDiscountPrice="KD 6.800"
        productPrice="KD 8.640"
        />
        </TouchableOpacity>
        </View>



        <View style={{ flexDirection:'row', justifyContent:'space-between' }} >

<ProductCard productTitle="Featured Products"
Image={require('../assests/icons/icon35.png')}
Image2={require('../assests/icons/heart.png')}
productDetails=" Apple iPhone7(Black) "
productDiscountPrice="KD 6.800"
productPrice="KD 8.640"
/>

<ProductCard productTitle="Featured Products"
Image={require('../assests/icons/icon37.jpg')}
Image2={require('../assests/icons/love.png')}
productDetails=" Apple iPhone7(Black) "
productDiscountPrice="KD 6.800"
productPrice="KD 8.640"
/>
</View>

      </ScrollView>
    );
  }

  export default DetailsScreen;
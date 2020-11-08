import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity } from 'react-native';

import ProductCard from '../components/ProductCard';

function HomeScreen({ navigation,props }) {
    return (
      <ScrollView >


       

        <View style={{ flexDirection:'row', justifyContent:'space-around',  }}
        
        >
          <View style={{ padding:10, alignItems:'center' }} >
            <Image 
            style={{ width:70, height:70, resizeMode:'contain' }}
            source={require('../assests/icons/icon52.png')}
            />

            <Text style={{ }} >Sports</Text>
          </View>


          <View style={{ padding:10, alignItems:'center' }} >
            <Image 
            style={{ width:70, height:70, resizeMode:'contain' }}
            source={require('../assests/icons/icon50.png')}
            />

            <Text style={{ }} >Gifts</Text>
          </View>



          <View style={{ padding:10, alignItems:'center' }} >
            <Image 
            style={{ width:70, height:70, resizeMode:'contain' }}
            source={require('../assests/icons/spray.png')}
            />

            <Text style={{ }} >Perfumes</Text>
          </View>



          <View style={{ padding:10, alignItems:'center' }} >
            <Image 
            style={{ width:70, height:70, resizeMode:'contain' }}
            source={require('../assests/icons/icon47.png')}
            />

            <Text style={{ }} >Electronics</Text>
          </View>


          <View style={{ padding:10, alignItems:'center' }} >
            <Image 
            style={{ width:70, height:70, resizeMode:'contain' }}
            source={require('../assests/icons/women.png')}
            />

            <Text style={{ }} >Women</Text>
          </View>

          
        </View>





        <View style={{ justifyContent:'center', alignItems:'center' }} >
          <Image 
          style={{ width:'90%', height:200, resizeMode:'cover' }}
          source={require('../assests/icons/icon45.jpg')}
          />
        </View>


        

      
       <View style={{ flexDirection:'row', justifyContent:'space-between', padding:20 }} >
            <Text style={{ fontSize:18, fontWeight:'bold' }} > Featured Products </Text>
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
        

        
        <View style={{ flexDirection:'row', justifyContent:'space-between', padding:20 }} >
            <Text style={{ fontSize:18, fontWeight:'bold' }} > New Products </Text>
            <TouchableOpacity  
            style={{ borderWidth:1, borderColor:'red',backgroundColor:'red', width:80,height:30 }}
            >
                <Text style={{ textAlign:'center', color:'white' }} > SEE ALL </Text>
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




        


        <View style={{ flexDirection:'row', justifyContent:'space-between' }} >

        <ProductCard productTitle="Featured Products"
        Image={require('../assests/icons/icon59.jpg')}
        Image2={require('../assests/icons/heart.png')}
        productDetails=" Apple iPhone7(Black) "
        productDiscountPrice="KD 6.800"
        productPrice="KD 8.640"
        />

<ProductCard productTitle="Featured Products"
        Image={require('../assests/icons/icon70.jpg')}
        Image2={require('../assests/icons/love.png')}
        productDetails=" Apple iPhone7(Black) "
        productDiscountPrice="KD 6.800"
        productPrice="KD 8.640"
        />
        </View>



        

     
        <View style={{ flexDirection:'row', justifyContent:'space-between', padding:20 }} >
            <Text style={{ fontSize:18, fontWeight:'bold' }} > Top Sellers </Text>
            
        </View>



        <View style={{ flexDirection:'row', justifyContent:'space-evenly', padding:10 }} >
          <View style={{ width:100, height:100, borderColor:'black', borderWidth:1, alignItems:'center' }} >
          <Image style={{ resizeMode:'contain', width:95, height:'100%'}} 
          source={require('../assests/icons/icon65.png')}
          />
          </View>

          <View style={{ width:100, height:100, borderColor:'black', borderWidth:1, alignItems:'center' }} >
          <Image style={{ resizeMode:'contain', width:95, height:'100%'}} 
          source={require('../assests/icons/icon65.png')}
          />
          </View>


          <View style={{ width:100, height:100, borderColor:'black', borderWidth:1, alignItems:'center' }} >
          <Image style={{ resizeMode:'contain', width:95, height:'100%'}} 
          source={require('../assests/icons/icon65.png')}
          />
          </View>

          <View style={{ width:100, height:100, borderColor:'black', borderWidth:1, alignItems:'center' }} >
          <Image style={{ resizeMode:'contain', width:95, height:'100%'}} 
          source={require('../assests/icons/icon65.png')}
          />
          </View>
        </View>


       

     


        

        


      
          
       
        


        

        
        
      </ScrollView>
    );
  }

  export default HomeScreen;
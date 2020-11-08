import React from 'react';
import { View, Text,ScrollView, TouchableOpacity } from 'react-native';
import { SearchBar, Divider } from 'react-native-elements';
import ProductCard from '../components/ProductCard';


function SearchScreen (){
    return(
        <ScrollView style={{ flex:1 }} >
            <SearchBar style={{ backgroundColor:'white' }}
        placeholder="Search Products"
        //onChangeText={this.updateSearch}
        //value={search}
      />

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
        height:50,
        MarginTop:10, flexDirection:'row', 
        alignItems:'center',
        justifyContent:'space-around'
      }}
      >

          <Text style={{ fontSize:16 }} > All </Text>
          <Text style={{ fontSize:16, color:'red', textDecorationLine:'underline' }} > Clothings </Text>
          <Text  style={{ fontSize:16 }}> Makeup </Text>
          <Text  style={{ fontSize:16 }}> Sports </Text>
          <Text  style={{ fontSize:16 }}> Women </Text>

      </View>


      <View style={{ margin:15, justifyContent:'space-around',flexDirection:'row'  }} >

          <TouchableOpacity 
          style={{ width:60, height:40, backgroundColor:'red' ,borderRadius:20, alignItems:'center', justifyContent:'center' }}
          >
              <Text style={{ textAlign:'center', fontSize:16, color:'white' }} >All</Text>
          </TouchableOpacity>


          <TouchableOpacity 
          style={{ height:40, borderWidth:1, borderRadius:20, alignItems:'center', justifyContent:'center' }}
          >
              <Text style={{ textAlign:'center', fontSize:16,padding:10 }} >Aprons</Text>
          </TouchableOpacity>



          <TouchableOpacity 
          style={{ height:40, borderWidth:1, borderRadius:20, alignItems:'center', justifyContent:'center' }}
          >
              <Text style={{ textAlign:'center', fontSize:16,padding:10 }} >Dresses</Text>
          </TouchableOpacity>




          <TouchableOpacity 
          style={{ height:40, borderWidth:1, borderRadius:20, alignItems:'center', justifyContent:'center' }}
          >
              <Text style={{ textAlign:'center', fontSize:16,padding:10 }} >Top</Text>
          </TouchableOpacity>
      </View>


      <View style={{ marginTop:10 }} >
      <Divider style={{ height:1, backgroundColor:'black' }} /> 
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


        </ScrollView>
    )
}

export default SearchScreen;
import React from 'react';
import { View, Text,TouchableOpacity, Image } from 'react-native';


function ProductCard(props){
return(
    <View style={{ padding:20, flex:1 }} >
        

        <View 
        style={{ borderColor:'black', borderWidth:1, }}
        >
            <View style={{ paddingTop:10, flexDirection:'row', justifyContent:'space-around' }} >
                <Image 
                style={{ width:150, height:200, resizeMode:'contain',marginLeft:10 }}
                source={props.Image}
                />
                <View>
                <Image 
                style={{ width:30, height:30, resizeMode:'contain',justifyContent:'flex-end', }}
                source={props.Image2}
                />
                </View>
            </View>

            <View style={{ width:'100%', backgroundColor:'#4BCFFA',height:80,  justifyContent:'center' }} >
                <Text style={{ textAlign:'center', fontSize:16, fontWeight:'bold' }} > {props.productDetails} </Text>
                <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center', padding:10 }} >
                    <Text style={{ color:'red' }} > {props.productPrice} </Text>
                    <Text style={{ textDecorationLine:'line-through' }} > {props.productDiscountPrice} </Text>
                </View>
            </View>

        </View>
    </View>
)
}
export default ProductCard;
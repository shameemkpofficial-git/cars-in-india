import React from "react";
import { StyleSheet, View, Text, Flatlist, Image, TextInput, FlatList } from "react-native";
import  IonIcons  from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

function HomeB(){

    const cars = [
        {
            id:1,
            image: require('../Images/blackSkoda.jpeg'),
            location:'Kochi',
            price:'₹ 17,987',
            name:'SKODA OCTAVIA',
            driven:'235000KM',
            fuel:'Diesel',
            year:'2016',
            
        },
        {
            id:2,
            image: require('../Images/blueSkoda.jpeg'),
            location:'Kochi',
            price:'₹ 17,987',
            name:'SKODA OCTAVIA',
            driven:'235000KM',
            fuel:'Diesel',
            year:'2016',
            
        },
        {
            id:3,
            image: require('../Images/brownSkoda.jpeg'),
            location:'Kochi',
            price:'₹ 17,987',
            name:'SKODA OCTAVIA',
            driven:'235000KM',
            fuel:'Diesel',
            year:'2016',
            
        },
        {
            id:4,
            image: require('../Images/gereenSkoda.jpeg'),
            location:'Kochi',
            price:'₹ 17,987',
            name:'SKODA OCTAVIA',
            driven:'235000KM',
            fuel:'Diesel',
            year:'2016',
            
        },
        {
            id:5,
            image: require('../Images/redSkoda.jpeg'),
            location:'Kochi',
            price:'₹ 17,987',
            name:'SKODA OCTAVIA',
            driven:'235000KM',
            fuel:'Diesel',
            year:'2016',
            
        },
        
    ]

    const renderItem = ({ item }) =>(
        <View style={{height:247, width:180, backgroundColor:'#fff', marginLeft:10, marginBottom:10}}>

            <Image source={item.image} style={{height:109, width:172, marginLeft:5, marginTop:5}}></Image>
            <View style={{height:16, width:42, backgroundColor:'#3FB0E5', borderRadius:10, marginLeft:11}}>
                <Text style={{fontSize:8, marginLeft:10, color:'white', marginTop:2, height:10, width:21}}>Used</Text>
            </View>
            <IonIcons name='location' size={10} color='#8D97A8'
            style={{bottom:15, left:55}}></IonIcons>
            <Text style={{color:"#8D97A8", left:65, bottom:27, fontSize:9}}>{item.location}</Text>
            <Text style={{fontSize:10, color:'black', marginLeft:10, bottom:20, fontWeight:'bold', width:94}}>{item.name}</Text>
            <Text style={{marginLeft:10, fontSize:12, color:'#222733', fontWeight:'bold', bottom:20, width:75}}>{item.price}</Text>
            <Text style={{fontSize:8, color:'#8D97A8', marginLeft:10, bottom:10, fontWeight:'400'}}>{item.driven}</Text>
            <Text style={{fontSize:8, color:'#8D97A8', marginLeft:67, bottom:21, fontWeight:'400'}}>{item.fuel}</Text>
            <Text style={{fontSize:8, color:'#8D97A8', marginLeft:108, bottom:32, fontWeight:'400'}}>{item.year}</Text>

            <View style={{height:20, width:13, backgroundColor:'#EFF3FA', marginLeft:10}}>
                <Text style={{fontSize:12, color:'#000000', textAlign:'justify', marginLeft:2}}>1</Text>
            </View>
            <View style={{height:20, width:13, backgroundColor:'#EFF3FA', marginLeft:27, bottom:20}}>
                <Text style={{fontSize:12, color:'#000000', textAlign:'justify', marginLeft:2}}>2</Text>
            </View>
            <View style={{height:20, width:13, backgroundColor:'#EFF3FA', marginLeft:53, bottom:40}}>
                <Text style={{fontSize:12, color:'#000000', textAlign:'justify', marginLeft:2}}>0</Text>
            </View>
            <View style={{height:20, width:13, backgroundColor:'#EFF3FA', marginLeft:70, bottom:60}}>
                <Text style={{fontSize:12, color:'#000000', textAlign:'justify', marginLeft:2}}>2</Text>
            </View>
            <View style={{height:20, width:13, backgroundColor:'#EFF3FA', marginLeft:95, bottom:80}}>
                <Text style={{fontSize:12, color:'#000000', textAlign:'justify', marginLeft:2}}>0</Text>
            </View>
            <View style={{height:20, width:13, backgroundColor:'#EFF3FA', marginLeft:113, bottom:100}}>
                <Text style={{fontSize:12, color:'#000000', textAlign:'justify', marginLeft:2}}>6</Text>
            </View>
            <View style={{height:20, width:13, backgroundColor:'#EFF3FA', marginLeft:138, bottom:120}}>
                <Text style={{fontSize:12, color:'#000000', textAlign:'justify', marginLeft:2}}>5</Text>
            </View>
            <View style={{height:20, width:13, backgroundColor:'#EFF3FA', marginLeft:155, bottom:140}}>
                <Text style={{fontSize:12, color:'#000000', textAlign:'justify', marginLeft:2}}>3</Text>
            </View>
            
        </View>
    )
    return(
        <View style={styles.mainContainer}>
            <IonIcons name='location' size={13} color='black'
            style={{ marginLeft:10, top:17}}></IonIcons>
            <Text style={{marginLeft:25, color:'#000000', fontSize:15 }}>Kakkanad, Kochi</Text>

            <FontAwesome name='bell' size={24} color='black' 
            style={{marginLeft:270, bottom:17}} />
            <Image source={require('../Images/avatar.png')}
            style={{height:40, width:37, borderRadius:20, marginLeft:310, bottom:50}}></Image>
            
            <Text style={{fontSize:46, color:'black', marginLeft:10, bottom:65}}>Hi,</Text>
            <Text style={{fontSize:23, color:'black', marginLeft:10, bottom:60}}>Tom Manual</Text>
            <Text style={{color:'#8D97A8', marginLeft:10, bottom:50}}>Start your auction now. Find your next deal.</Text>

            <TextInput placeholder='Search' style={{height:48, width:303, backgroundColor:'#FFFFFF', borderRadius:5, bottom:30, marginLeft:10}}>
                <IonIcons name='search' size={24} color='#8D97A8'></IonIcons>
            </TextInput>
            <View style={{backgroundColor:'#3FB0E5', height:48, width:62, borderRadius:3, marginLeft:320, bottom:78}}>
                <IonIcons name='settings-outline' size={24} color='#fff'
                style={{height:32, width:32, marginLeft:18, marginTop:10}}/>
            </View>
            <View style={{height:'100%', backgroundColor:'#EFF3FA', width:'100%', bottom:65}}>
            <FlatList
            data={cars}
            renderItem={renderItem}
            numColumns={2}></FlatList>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        height:735,
        width:414,
        backgroundColor:'#EFF3FA'
    }
})

export default HomeB;
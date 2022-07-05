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
        <View style={{height:'65%', width:'45%', backgroundColor:'#fff', marginLeft:'3%', marginBottom:'3%'}}>

            <Image source={item.image} style={{height:'45%', width:'90%', marginLeft:'2%', marginTop:'1%'}}></Image>
            <View style={{height:'6%', width:'22%', backgroundColor:'#3FB0E5', borderRadius:10, marginLeft:'6%'}}>
                <Text style={{fontSize:8, marginLeft:'25%', color:'white', marginTop:'5%', height:'70%', width:'60%'}}>Used</Text>
            </View>
            <IonIcons name='location' size={10} color='#8D97A8'
            style={{bottom:'5%', left:'31%'}}></IonIcons>
            <Text style={{color:"#8D97A8", left:'38%', bottom:'9%', fontSize:9}}>{item.location}</Text>
            <Text style={{fontSize:10, color:'black', marginLeft:'6%', bottom:'7%', fontWeight:'bold', width:'60%'}}>{item.name}</Text>
            <Text style={{marginLeft:'6%', fontSize:12, color:'#222733', fontWeight:'bold', bottom:'7%', width:'30%'}}>{item.price}</Text>
            <Text style={{fontSize:8, color:'#8D97A8', marginLeft:'6%', bottom:'2%', fontWeight:'400'}}>{item.driven}</Text>
            <Text style={{fontSize:8, color:'#8D97A8', marginLeft:'35%', bottom:'6%', fontWeight:'400'}}>{item.fuel}</Text>
            <Text style={{fontSize:8, color:'#8D97A8', marginLeft:'57%', bottom:'10%', fontWeight:'400'}}>{item.year}</Text>

            <View style={{height:'7%', width:'7%', backgroundColor:'#EFF3FA', marginLeft:'6%'}}>
                <Text style={{fontSize:12, color:'#000000', textAlign:'justify', marginLeft:2}}>1</Text>
            </View>
            <View style={{height:'7%', width:'7%', backgroundColor:'#EFF3FA', marginLeft:'15%', bottom:'7%'}}>
                <Text style={{fontSize:12, color:'#000000', textAlign:'justify', marginLeft:2}}>2</Text>
            </View>
            <View style={{height:'7%', width:'7%', backgroundColor:'#EFF3FA', marginLeft:'30%', bottom:'14%'}}>
                <Text style={{fontSize:12, color:'#000000', textAlign:'justify', marginLeft:2}}>0</Text>
            </View>
            <View style={{height:'7%', width:'7%', backgroundColor:'#EFF3FA', marginLeft:'40%', bottom:'21%'}}>
                <Text style={{fontSize:12, color:'#000000', textAlign:'justify', marginLeft:2}}>2</Text>
            </View>
            <View style={{height:'7%', width:'7%', backgroundColor:'#EFF3FA', marginLeft:'55%', bottom:'28%'}}>
                <Text style={{fontSize:12, color:'#000000', textAlign:'justify', marginLeft:2}}>0</Text>
            </View>
            <View style={{height:'7%', width:'7%', backgroundColor:'#EFF3FA', marginLeft:'64%', bottom:'35%'}}>
                <Text style={{fontSize:12, color:'#000000', textAlign:'justify', marginLeft:2}}>6</Text>
            </View>
            <View style={{height:'7%', width:'7%', backgroundColor:'#EFF3FA', marginLeft:'78%', bottom:'42%'}}>
                <Text style={{fontSize:12, color:'#000000', textAlign:'justify', marginLeft:2}}>5</Text>
            </View>
            <View style={{height:'7%', width:'7%', backgroundColor:'#EFF3FA', marginLeft:'87%', bottom:'49%'}}>
                <Text style={{fontSize:12, color:'#000000', textAlign:'justify', marginLeft:2}}>3</Text>
            </View>
            
        </View>
    )
    return(
        <View style={styles.mainContainer}>
            <IonIcons name='location' size={14} color='black'
            style={{ marginLeft:'3%', top:'2%'}}></IonIcons>
            <Text style={{marginLeft:'7%', color:'#000000', fontSize:15, }}>Kakkanad, Kochi</Text>

            <FontAwesome name='bell' size={24} color='black' 
            style={{marginLeft:'70%', bottom:'2%'}} />
            <Image source={require('../Images/avatar.png')}
            style={{height:'5%', width:'10%', borderRadius:20, marginLeft:'80%', bottom:'6%'}}></Image>
            
            <Text style={{fontSize:46, color:'black', marginLeft:'3%', bottom:'8%'}}>Hi,</Text>
            <Text style={{fontSize:23, color:'black', marginLeft:'3%', bottom:'9%'}}>Tom Manual</Text>
            <Text style={{color:'#8D97A8', marginLeft:'3%', bottom:'6%'}}>Start your auction now. Find your next deal.</Text>

            <TextInput placeholder='Search' style={{height:'8%', width:'77%', backgroundColor:'#FFFFFF', borderRadius:5, bottom:'4%', marginLeft:'3%'}}>
                <IonIcons name='search' size={25} color='#8D97A8'></IonIcons>
            </TextInput>
            <View style={{backgroundColor:'#3FB0E5', height:'7%', width:'14%', borderRadius:3, marginLeft:'82%', bottom:78}}>
                <IonIcons name='settings-outline' size={24} color='#fff'
                style={{height:'50%', width:'40%', marginLeft:'25%', marginTop:'20%'}}/>
            </View>
            <View style={{height:'100%', backgroundColor:'#EFF3FA', width:'100%', bottom:'10%'}}>
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
        height:'100%',
        width:'100%',
        backgroundColor:'#EFF3FA'
    }
})

export default HomeB;

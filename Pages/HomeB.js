import React from "react";
import { StyleSheet, View, Text, Flatlist, Image, TextInput, FlatList } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

function HomeB() {

    const cars = [
        {
            id: 1,
            image: require('../Images/blackSkoda.jpeg'),
            location: 'Kochi',
            price: '₹ 17,987',
            name: 'SKODA OCTAVIA',
            driven: '235000KM',
            fuel: 'Diesel',
            year: '2016',

        },
        {
            id: 2,
            image: require('../Images/blueSkoda.jpeg'),
            location: 'Kochi',
            price: '₹ 17,987',
            name: 'SKODA OCTAVIA',
            driven: '235000KM',
            fuel: 'Diesel',
            year: '2016',

        },
        {
            id: 3,
            image: require('../Images/brownSkoda.jpeg'),
            location: 'Kochi',
            price: '₹ 17,987',
            name: 'SKODA OCTAVIA',
            driven: '235000KM',
            fuel: 'Diesel',
            year: '2016',

        },
        {
            id: 4,
            image: require('../Images/gereenSkoda.jpeg'),
            location: 'Kochi',
            price: '₹ 17,987',
            name: 'SKODA OCTAVIA',
            driven: '235000KM',
            fuel: 'Diesel',
            year: '2016',

        },
        {
            id: 5,
            image: require('../Images/redSkoda.jpeg'),
            location: 'Kochi',
            price: '₹ 17,987',
            name: 'SKODA OCTAVIA',
            driven: '235000KM',
            fuel: 'Diesel',
            year: '2016',

        },

    ]

    const renderItem = ({ item }) => (
        <View style={{ height: '100%', width: '45%', backgroundColor: '#fff', marginLeft: '3%' }}>

            <Image source={item.image} style={{ height: '45%', width: '90%', marginLeft: '2%', marginTop: '1%' }}></Image>
            <View style={{ height: '6%', width: '22%', backgroundColor: '#3FB0E5', borderRadius: 10, marginLeft: '6%' }}>
                <Text style={{ fontSize: 8, marginLeft: '25%', color: 'white', marginTop: '5%', height: '70%', width: '60%' }}>Used</Text>
            </View>
            <IonIcons name='location' size={10} color='#8D97A8'
                style={{ bottom: '5%', left: '31%' }}></IonIcons>
            <Text style={{ color: "#8D97A8", left: '38%', bottom: '9%', fontSize: 9 }}>{item.location}</Text>
            <Text style={{ fontSize: 10, color: 'black', marginLeft: '6%', bottom: '7%', fontWeight: 'bold', width: '60%' }}>{item.name}</Text>
            <Text style={{ marginLeft: '6%', fontSize: 12, color: '#222733', fontWeight: 'bold', bottom: '7%', width: '30%' }}>{item.price}</Text>

            <View style={{ height: 17, width: 140, flexDirection: 'row' }}>
                <Text style={{ fontSize: 8, color: '#8D97A8', fontWeight: '400', paddingLeft: 9 }}>{item.driven}</Text>
                <Text style={{ fontSize: 8, color: '#8D97A8', fontWeight: '400', paddingLeft: 8 }}>{item.fuel}</Text>
                <Text style={{ fontSize: 8, color: '#8D97A8', fontWeight: '400', paddingLeft: 8 }}>{item.year}</Text>
            </View>
            <View style={{ height: 17, width: 150, backgroundColor: 'white', flexDirection: 'row', marginHorizontal: 10 }}>
                <View style={{ height: '100%', width: '7%', backgroundColor: '#EFF3FA' }}>
                    <Text style={{ fontSize: 11, color: '#000000', textAlign: 'justify', marginLeft: 2 }}>1</Text>
                </View>
                <View style={{ height: '100%', width: '7%', backgroundColor: '#EFF3FA', marginLeft: 5, }}>
                    <Text style={{ fontSize: 11, color: '#000000', textAlign: 'justify', marginLeft: 2 }}>2</Text>
                </View>
                <View style={{ height: '100%', width: '7%', backgroundColor: '#EFF3FA', marginLeft: 10 }}>
                    <Text style={{ fontSize: 11, color: '#000000', textAlign: 'justify', marginLeft: 2 }}>0</Text>
                </View>
                <View style={{ height: '100%', width: '7%', backgroundColor: '#EFF3FA', marginLeft: 5 }}>
                    <Text style={{ fontSize: 11, color: '#000000', textAlign: 'justify', marginLeft: 2 }}>2</Text>
                </View>
                <View style={{ height: '100%', width: '7%', backgroundColor: '#EFF3FA', marginLeft: 10 }}>
                    <Text style={{ fontSize: 11, color: '#000000', textAlign: 'justify', marginLeft: 2 }}>0</Text>
                </View>
                <View style={{ height: '100%', width: '7%', backgroundColor: '#EFF3FA', marginLeft: 5 }}>
                    <Text style={{ fontSize: 11, color: '#000000', textAlign: 'justify', marginLeft: 2 }}>6</Text>
                </View>
                <View style={{ height: '100%', width: '7%', backgroundColor: '#EFF3FA', marginLeft: 10 }}>
                    <Text style={{ fontSize: 11, color: '#000000', textAlign: 'justify', marginLeft: 2 }}>5</Text>
                </View>
                <View style={{ height: '100%', width: '7%', backgroundColor: '#EFF3FA', marginLeft: 5 }}>
                    <Text style={{ fontSize: 11, color: '#000000', textAlign: 'justify', marginLeft: 2 }}>3</Text>
                </View>

            </View>

        </View>
    )
    return (
        <View style={styles.mainContainer}>
            <View style={{ height: '7%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10, marginTop: 10 }}>
                <View style={{ flexDirection: 'row', height: '100%', alignItems: 'center' }}>
                    <IonIcons name='location' size={14} color='black'></IonIcons>
                    <Text style={{ color: '#000000', fontSize: 15, }}>Kakkanad, Kochi</Text>
                </View>

                <View style={{ flexDirection: 'row', height: '100%', alignItems: 'center' }}>
                    <FontAwesome name='bell' size={24} color='black' />
                    <Image source={require('../Images/avatar.png')}
                        style={{ height: 50, width: 50, borderRadius: 25 }}></Image>
                </View>
            </View>



            <View style={{ height: '20%', marginTop: 5, marginHorizontal: 10 }}>
                <Text style={{ fontSize: 46, color: 'black' }}>Hi,</Text>
                <Text style={{ fontSize: 23, color: 'black' }}>Tom Manual</Text>
                <Text style={{ color: '#8D97A8' }}>Start your auction now. Find your next deal.</Text>
            </View>

            <View style={{ backgroundColor: '#EFF3FA', height: '17%', justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', height: '100%' }}>
                    <TextInput placeholder='Search' style={{ height: '50%', width: '90%', backgroundColor: '#FFFFFF', borderRadius: 10, marginTop: 20 }}>
                        <IonIcons name='search' size={25} color='#8D97A8'
                            style={{ marginBottom: 20 }}></IonIcons>
                    </TextInput></View>
                <View style={{ backgroundColor: '#3FB0E5', height: '45%', width: '5%', borderRadius: 3, paddingRight: 45, marginTop: 20, marginLeft: -20 }}>
                    <IonIcons name='settings-outline' size={24} color='#fff'
                        style={{ height: 100, width: 100, marginTop: 9, marginLeft: 10 }} />
                </View>

            </View>


            <FlatList
                data={cars}
                renderItem={renderItem}
                numColumns={2}></FlatList>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#EFF3FA',
    }
})

export default HomeB;

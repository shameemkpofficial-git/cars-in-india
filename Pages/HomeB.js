import React from "react";
import { StyleSheet, View, Text, Image, TextInput, FlatList, ScrollView } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import styles from "./style";
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
        <View style={styles.flatlistView}>
            
            <Image source={item.image} style={styles.carImage}></Image>
            <View style={styles.used}>
                <Text style={styles.usedText}>Used</Text>
            </View>
            <IonIcons name='location' size={10} color='#8D97A8'
                style={styles.locationIcon}></IonIcons>
            <Text style={styles.userLocationText}>{item.location}</Text>
            <Text style={styles.carName}>{item.name}</Text>
            <Text style={styles.carPrice}>{item.price}</Text>

            <View style={styles.drivenFuelYearView}>
                <Text style={styles.drivenText}>{item.driven}</Text>
                <Text style={styles.fuelText}>{item.fuel}</Text>
                <Text style={styles.yearText}>{item.year}</Text>
            </View>
            <View style={styles.timerView}>
                <View style={styles.firstDigiTimerView}>
                    <Text style={styles.firstDigiTimer}>1</Text>
                </View>
                <View style={styles.secondDigiTimerView}>
                    <Text style={styles.secondDigiTimer}>2</Text>
                </View>
                <View style={styles.thirdDigiTimerView}>
                    <Text style={styles.thirdDigiTimer}>0</Text>
                </View>
                <View style={styles.fourthDigiTimerView}>
                    <Text style={styles.fourthDigiTimer}>2</Text>
                </View>
                <View style={styles.fifthDigiTimerView}>
                    <Text style={styles.fifthDigiTimer}>0</Text>
                </View>
                <View style={styles.sixthDigiTimerView}>
                    <Text style={styles.sixthDigiTimer}>6</Text>
                </View>
                <View style={styles.seventhDigiTimerView}>
                    <Text style={styles.seventhDigiTimer}>5</Text>
                </View>
                <View style={styles.eighthDigiTimerView}>
                    <Text style={styles.eighthDigiTimer}>3</Text>
                </View>

            </View>
            

        </View>
    )
    return (
        <View style={styles.mainContainer}>
            
            <View style={styles.topView}>
                <View style={styles.locationView}>
                    <IonIcons name='location' size={14} color='black'></IonIcons>
                    <Text style={styles.locationText}>Kakkanad, Kochi</Text>
                </View>

                <View style={styles.profileView}>
                    <FontAwesome name='bell' size={24} color='black'></FontAwesome>
                    <Image source={require('../Images/avatar.png')}
                        style={styles.avatarImage}></Image>
                </View>
            </View>



            <View style={styles.greetingNameView}>
                <Text style={styles.hiText}>Hi,</Text>
                <Text style={styles.nameText}>Tom Manual</Text>
                <Text style={{ color: '#8D97A8' }}>Start your auction now. Find your next deal.</Text>
            </View>

            <View style={styles.searchAndSettingView}>
                <View style={styles.textinputView}>
                    <TextInput placeholder='Search' style={styles.textInput}>
                        <IonIcons name='search' size={25} color='#8D97A8'
                            style={styles.searchIcon}></IonIcons>
                    </TextInput></View>
                <View style={styles.settingIconView}>
                    <IonIcons name='settings-outline' size={24} color='#fff'
                        style={styles.settingIcon} />
                </View>

            </View>


            <FlatList
                data={cars}
                renderItem={renderItem}
                numColumns={2}></FlatList>

        </View>
    )
}


export default HomeB;

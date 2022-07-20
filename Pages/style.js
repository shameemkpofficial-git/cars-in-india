import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#EFF3FA',
    },
    topView:{
        height: '7%', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginHorizontal: 10, 
        marginTop: 10
    },
    locationView:{
        flexDirection: 'row', 
        height: '100%', 
        alignItems: 'center',
    },
    locationText:{
        color: '#000000',
        fontSize: 15
    },
    profileView:{
        flexDirection: 'row',
        height: '100%', 
        alignItems: 'center'
    },
    avatarImage:{
        height: 50,
        width: 50, 
        borderRadius: 25
    },
    greetingNameView:{
        height: '20%', 
        marginTop: 5, 
        marginHorizontal: 10
    },
    hiText:{
        fontSize: 46, 
        color: 'black' 
    },
    nameText:{
        fontSize: 23, color: 'black' 
    },
    searchAndSettingView:{
        backgroundColor: '#EFF3FA', 
        height: '17%', 
        justifyContent: 'space-between',
        flexDirection: 'row', 
        marginHorizontal: 20
    },
    textinputView:{
        flexDirection: 'row', 
        height: '100%'
    },
    textInput:{
        height: '50%', 
        width: '90%', 
        backgroundColor: '#FFFFFF', 
        borderRadius: 10, 
        marginTop: 20
    },
    searchIcon:{
        marginBottom: 20
    },
    settingIconView:{
        backgroundColor: '#3FB0E5', 
        height: '45%', 
        width: '5%', 
        borderRadius: 3, 
        paddingRight: 45, 
        marginTop: 20, 
        marginLeft: -20
    },
    settingIcon:{
        height: 100, 
        width: 100, 
        marginTop: 9, 
        marginLeft: 10 
    },
    flatlistView:{
        height: 250, 
        width: '45%', 
        backgroundColor: '#fff', 
        marginLeft: '3%',
        marginTop:10
    },
    carImage:{
        height: '45%', 
        width: '90%', 
        marginLeft: '2%', 
        marginTop: '1%' 
    },
    used:{
        height: '6%', 
        width: '22%', 
        backgroundColor: '#3FB0E5', 
        borderRadius: 10, 
        marginLeft: '6%'
    },
    usedText:{
        fontSize: 8, 
        marginLeft: '25%', 
        color: 'white', 
        marginTop: '5%', 
        height: '70%', 
        width: '60%'
    },
    locationIcon:{
        bottom: '5%', 
        left: '31%'  
    },
    userLocationText:{
        color: "#8D97A8", 
        left: '38%', 
        bottom: '9%', 
        fontSize: 9 
    },
    carName:{
        fontSize: 10, 
        color: 'black', 
        marginLeft: '6%', 
        bottom: '7%', 
        fontWeight: 'bold',
        width: '60%' 
    },
    carPrice:{
        marginLeft: '6%', 
        fontSize: 12, 
        color: '#222733', 
        fontWeight: 'bold', 
        bottom: '7%', 
        width: '30%' 
    },
    drivenFuelYearView:{
        height: 17, 
        width: 140, 
        flexDirection: 'row'
    },
    drivenText:{
        fontSize: 8, 
        color: '#8D97A8', 
        fontWeight: '400', 
        paddingLeft: 9 
    },
    fuelText:{
        fontSize: 8, 
        color: '#8D97A8', 
        fontWeight: '400', 
        paddingLeft: 8 
    },
    yearText:{
        fontSize: 8, 
        color: '#8D97A8', 
        fontWeight: '400', 
        paddingLeft: 8 
    },
    timerView:{
        height: 17, 
        width: 150, 
        backgroundColor: 'white', 
        flexDirection: 'row', 
        marginHorizontal: 10 
    },
    firstDigiTimerView:{
        height: '100%', 
        width: '7%', 
        backgroundColor: '#EFF3FA' 
    },
    secondDigiTimerView:{
        height: '100%', 
        width: '7%', 
        backgroundColor: '#EFF3FA', 
        marginLeft: 5, 
    },
    thirdDigiTimerView:{
        height: '100%', 
        width: '7%', 
        backgroundColor: '#EFF3FA', 
        marginLeft: 10 
    },
    fourthDigiTimerView:{
        height: '100%', 
        width: '7%', 
        backgroundColor: '#EFF3FA', 
        marginLeft: 5 
    },
    fifthDigiTimerView:{
        height: '100%', 
        width: '7%', 
        backgroundColor: '#EFF3FA', 
        marginLeft: 10 
    },
    sixthDigiTimerView:{
        height: '100%', 
        width: '7%', 
        backgroundColor: '#EFF3FA', 
        marginLeft: 5
    },
    seventhDigiTimerView:{
        height: '100%', 
        width: '7%', 
        backgroundColor: '#EFF3FA', 
        marginLeft: 10
    },
    eighthDigiTimerView:{
        height: '100%', 
        width: '7%', 
        backgroundColor: '#EFF3FA', 
        marginLeft: 5  
    },
    firstDigiTimer:{
        fontSize: 11, 
        color: '#000000', 
        textAlign: 'justify', 
        marginLeft: 2
    },
    secondDigiTimer:{
        fontSize: 11, 
        color: '#000000', 
        textAlign: 'justify', 
        marginLeft: 2 
    },
    thirdDigiTimer:{
        fontSize: 11, 
        color: '#000000', 
        textAlign: 'justify', 
        marginLeft: 2 
    },
    fourthDigiTimer:{
        fontSize: 11, 
        color: '#000000', 
        textAlign: 'justify', 
        marginLeft: 2
    },
    fifthDigiTimer:{
        fontSize: 11, 
        color: '#000000', 
        textAlign: 'justify', 
        marginLeft: 2
    },
    sixthDigiTimer:{
        fontSize: 11, 
        color: '#000000', 
        textAlign: 'justify', 
        marginLeft: 2 
    },
    seventhDigiTimer:{
        fontSize: 11, 
        color: '#000000', 
        textAlign: 'justify', 
        marginLeft: 2  
    },
    eighthDigiTimer:{
        fontSize: 11, 
        color: '#000000', 
        textAlign: 'justify', 
        marginLeft: 2 
    }
})

export default styles

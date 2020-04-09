/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Button, TextInput } from 'react-native';

export default class HomeScreen extends Component {

    componentDidMount()
    {
        this.getAllData();
    }
    
    //API Call
    getAllData = () => {
        return fetch('https://rallycoding.herokuapp.com/api/music_albums.json')
            .then(response =>response.json())
            .then((responseJSON) => console.log(responseJSON))
            .catch(error => console.log(error))
    };
        
        
        
    render() {
        return (
            <View style={styles.containerView}>
                <View style={styles.headerView}>
                    <Text style={styles.headerStyle}>
                        Albums
                    </Text>
                </View>
            </View>
        );
    }
}
        
const styles = StyleSheet.create(
{
    containerView: {
    flex: 1,
    //alignItems: 'center',
    //backgroundColor: 'red',
    },
    headerStyle: {
        fontSize: 30,
        marginTop: 50,
        alignSelf: 'center',
    },
    headerView: {
        backgroundColor: 'pink',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
    },
});
import React from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = props => {
   
    return (
        <View style={styles.Container}>
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage}/>
                <Text style={styles.placename}>{props.selectedPlace.name}</Text>
            </View>
            <View style={styles.deleteButton}>
                <TouchableOpacity onPress={props.onItemDeleted}>
                    <View>
                        <Icon size={30} name="ios-trash" color="red"/>
                    </View>
                </TouchableOpacity >
            </View>
        </View> 
    );
}

const styles = StyleSheet.create({
    Container: {
        marginTop: "30%"
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    },
    deleteButton: {
        alignItems: "center"
    }
})

export default placeDetail;
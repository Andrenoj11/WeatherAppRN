import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colors } from '../colors'

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors

export default function WeatherInfo({ currentWeather }) {
    const { 
        main: { temp }, 
        name,
        weather: [details]
    } = currentWeather
    const { icon, main, description } = details
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
    return (
        <View style={styles.weatherInfo}>
            <Text>{name}</Text>
            <Image source={{ uri: iconUrl }} style={styles.weatherIcon} />
            <Text style={styles.textPrimary}>{temp}°</Text>
            <Text style={styles.weatherDescription}>{description}</Text>
            <Text style={styles.textSecondary}>{main}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textSecondary: {
        fontSize: 20,
        color: SECONDARY_COLOR,
        fontWeight: '500',
        marginTop: 10
    },
    textPrimary: {
        fontSize: 40,
        color: PRIMARY_COLOR
    },  
    weatherDescription: {
        textTransform: 'capitalize'
    },  
    weatherIcon:{
        width: 100,
        height: 100
    },
    weatherInfo: {
        alignItems: 'center'
    }
})
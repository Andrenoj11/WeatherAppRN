import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../colors'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

export default function WeatherDetails({ currentWeather, unitSystem }) {
    const { main: { feels_like, humidity, pressure },
            wind: { speed }
        } = currentWeather

    const windSpeed =  unitSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/hours` 

    return (
        <View style={styles.details}>
            <View style={styles.detailsRow}>
                <View style={{...styles.detailsBox, borderRightWidth: 1, borderRightColor: colors.BORDER_COLOR}}>
                    <View style={styles.detailsRow}>
                        <FontAwesome5 name='temperature-low' size={25} color={colors.PRIMARY_COLOR} />
                        <View style={styles.detailsItems}>
                            <Text>Feels like</Text>
                            <Text style={styles.textSecondary}>{feels_like}°</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.detailsBox}>
                    <View style={styles.detailsRow}>
                        <MaterialCommunityIcons name='water' size={30} color={colors.PRIMARY_COLOR} />
                        <View style={styles.detailsItems}>
                            <Text>Humidity</Text>
                            <Text style={styles.textSecondary}>{humidity} %</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{...styles.detailsRow, borderTopWidth: 1, borderTopColor: colors.BORDER_COLOR}}>
                <View style={{...styles.detailsBox, borderRightWidth: 1, borderRightColor: colors.BORDER_COLOR}}>
                    <View style={styles.detailsRow}>
                        <MaterialCommunityIcons name='weather-windy' size={25} color={colors.PRIMARY_COLOR} />
                        <View style={styles.detailsItems}>
                            <Text>Wind Speed</Text>
                            <Text style={styles.textSecondary}>{windSpeed}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.detailsBox}>
                    <View style={styles.detailsRow}>
                        <MaterialCommunityIcons name='speedometer' size={30} color={colors.PRIMARY_COLOR} />
                        <View style={styles.detailsItems}>
                            <Text>Pressure</Text>
                            <Text style={styles.textSecondary}>{pressure} hPa</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    details: {
        marginTop: 'auto',
        borderWidth: 1,
        margin: 15,
        borderColor: colors.BORDER_COLOR,
        borderRadius: 10
    },
    detailsBox: {
        flex: 1,
        padding: 20
    },
    detailsItems: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    detailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textSecondary: {
        fontSize:  15,
        color: colors.SECONDARY_COLOR,
        fontWeight: '700',
        margin: 7
    }
})

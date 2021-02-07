import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Picker } from '@react-native-community/picker'

export default function UnitsPicker({ unitSystem, setUnitSystem }) {
    return (
        <View style={styles.unitPosition}>
            <Picker selectedValue={unitSystem} onValueChange={(value) => setUnitSystem(value) } mode='dropdown' >
                <Picker.Item label="C°" value="metric" />
                <Picker.Item label="F°" value="imperial" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    unitPosition: {
        position: 'absolute',
        top: 20,
        left: 20,
        height: 50,
        width: 100
    }
})
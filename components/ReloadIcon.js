import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Ionicons, MaterialIcons  } from '@expo/vector-icons'
import { colors } from '../colors'

export default function ReloadIcon({ load }) {
    return (
        <View style={styles.reload}>
            <MaterialIcons onPress={load} name="refresh" size={24} color={colors.PRIMARY_COLOR} />
        </View>
    )
}

const styles = StyleSheet.create({
    reload: {
        position: 'absolute',
        top: 30,
        right: 20
    }
})

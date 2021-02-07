import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location'
import WeatherInfo from './components/WeatherInfo';
import UnitsPicker from './components/UnitsPicker';
import ReloadIcon from './components/ReloadIcon';
import { colors } from './colors';
import WeatherDetails from './components/WeatherDetails';
import { WEATHER_API_KEY } from '@env'

// const WEATHER_API_KEY = '7d9b28e38893ab59b456dd7c6b7e9cdf'
const BASE_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?`

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null)
  const [currentWeather, setCurrentWeather] = useState(null)
  const [unitSystem, setUnitSystem] = useState('metric')

  async function load(){
    setCurrentWeather(null)
    setErrorMessage(null)
    try {
      let { status } = await Location.requestPermissionsAsync()

      if (status !== 'granted'){
        setErrorMessage('Access to location is needed to run this app')
        return
      }

      const location = await Location.getCurrentPositionAsync()
      
      const { latitude, longitude } = location.coords

      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${WEATHER_API_KEY}`

      const response = await fetch(weatherUrl)

      const result = await response.json()
      // alert(`Latitude : ${latitude}, Longitude: ${longitude}`)

      if(response.ok){
        setCurrentWeather(result)
      } else {
        setErrorMessage(result.message)
      }

    } catch (error) {
      console.log(error)
      setErrorMessage(error.message)
    }
  }

  useEffect(() => {
    load()
  }, [unitSystem])


  if (currentWeather){
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <UnitsPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem} />
          <ReloadIcon load={load} />
          <WeatherInfo currentWeather={currentWeather} />
        </View>
        <WeatherDetails currentWeather={currentWeather} unitSystem={unitSystem} />
      </SafeAreaView>
    );
  } else if (errorMessage) {
    return (
      <View style={styles.container}>
        <ReloadIcon load={load} />
        <Text>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center'
  }
});

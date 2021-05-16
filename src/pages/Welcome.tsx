import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, Platform, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import waves from '../assets/waves.json'
import mascot from '../assets/mascot.json'
import LottieView from 'lottie-react-native';

import globalStyles from '../styles/globalStyles';
import { colors } from '../styles/colors';

import AsyncStorage from '@react-native-async-storage/async-storage'

export function Welcome() {

  const navigation = useNavigation();
  const [name, setName] = useState<string>('');

  async function handleButtonPress() {
    try {
      await AsyncStorage.setItem('@waterReminder:name', name);
      navigation.navigate('UserChoice');
    } catch (e) {
      Alert.alert(e);
    }
  }

  function handleInputChange(name: string) {
    setName(name);
  } 

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.lottieContainer}>
          <LottieView
            autoPlay
            source={mascot}
            loop
            style={styles.mascot}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.welcomeText}>
            Olá, meu camarada,{'\n'} 
            como eu posso te {'\n'}
            chamar?
          </Text>

          <TextInput 
            onChangeText={handleInputChange}
            placeholder='Informe seu nome'
            style={styles.input}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={handleButtonPress}>
              <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <LottieView
          autoPlay
          source={waves}
          loop
          speed={1.25}
          style={styles.animation}
        />

        <View style={styles.wave}>
          
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
    width: '100%',
    ...globalStyles.adroidSafeArea,
  },
  lottieContainer: {
    width: '100%',
    marginHorizontal: 40,
    borderRadius: 10,
    height: 200,
    marginTop: 16
  },
  mascot: {

  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    width: '100%',
  },
  welcomeText: {
    fontSize: 32,
    color: colors.white,
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 16// Refatorar fonte
  },
  input: {
    backgroundColor: colors.white,
    fontSize: 18,
    height: 40,
    padding: 8,
    borderRadius: 10,
    width: '100%',
    textAlign: 'center',
    marginVertical: 8
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 32,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.darkBlue,
    marginVertical: 16,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'
  },
  wave: {
    flex: 1,
    backgroundColor: colors.darkWater,
    width: '100%',
    position: 'relative',
    bottom: -140,
  },
  animation: {
    zIndex: -1,
    bottom: -80,
  }
});
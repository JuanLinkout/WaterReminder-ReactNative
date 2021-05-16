import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import globalStyles from '../styles/globalStyles';

export function UserChoice() {

  const navigation = useNavigation();

  function handleButtonPress() {
    navigation.navigate('UserChoice');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Quantos litros de agua você deseja tomar.
      </Text>
      <TouchableOpacity onPress={handleButtonPress}>
        <Text>Próxima página</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    ...globalStyles.adroidSafeArea
  }
});
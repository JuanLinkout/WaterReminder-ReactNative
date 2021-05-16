import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    adroidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 0 : 0,
        // paddingBottom: Platform.OS === 'android' ? 15 : 0
    },
});
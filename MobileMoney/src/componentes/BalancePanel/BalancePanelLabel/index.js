import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BalancePanelLabel = () => {
  return(
    <View style={styles.container}>
    <Text style={styles.label}> Saldo Atual </Text>
    <Text style={styles.value}> R$ 2.102,00 </Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container:{
   flex:1,
   padding:10,
   alignItems:'center'
  },
  value: {
    fontSize:22,
    fontWeight:'bold',
  },
  label: {
    fontSize:18,
  }
});

export default BalancePanelLabel;
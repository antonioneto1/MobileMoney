import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';


const BalancePanel = () => {
  return(
    <View style={styles.container}>
      <BalancePanelLabel> </BalancePanelLabel>
      <BalancePanelChart> </BalancePanelChart>
      <Button title='Adcionar'></Button>
  </View>
  );
};

const styles = StyleSheet.create({
  container:{
   flex:1,
   padding:10,
  },
  label: {
    fontSize:20,
  }
});

export default BalancePanel;
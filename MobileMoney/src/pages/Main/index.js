import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import BalancePanel from '../../componentes/BalancePanel/index';
import EntrySummary from '../../componentes/EntrySummary/index';
import EntryList from '../../componentes/EntryList/index';



const Main = () => {
 return(
  <View style={styles.container}>
    <BalancePanel/>
    <EntrySummary/>
    <EntryList/>
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

export default Main;
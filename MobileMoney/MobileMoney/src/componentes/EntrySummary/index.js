import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import EntrySummaryList from './EntrySummaryList';
import EntrySummaryChart from './EntrySummaryChart';


const EntrySummary = () => {
  return(
    <View style={styles.container}>
      <EntrySummaryList> </EntrySummaryList>
      <EntrySummaryChart> </EntrySummaryChart>
  </View>
  );
};

const styles = StyleSheet.create({
  container:{
   flex:1,

  },
  label: {
    fontSize:20,
  }
});

export default EntrySummary;
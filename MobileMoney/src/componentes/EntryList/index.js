import React from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';

import EntryListItem from './EntryListItem';

const EntryList = () => {
  return(
    <View style={styles.container}>
      <EntryListItem/>
  </View>
  );
};

const styles = StyleSheet.create({
  container:{
 flex:1,
  },
  EntryListItem:{
    fontWeight:'bold',
    fontSize:15,
  }
});

export default EntryList;
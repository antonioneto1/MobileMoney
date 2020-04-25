import React from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';

const EntryListItem = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.EntryListItem}>EntryListItem</Text>
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

export default EntryListItem;
import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import BalanceLabel from '../../componentes/BalanceLabel/index';
// import EntrySummary from '../../componentes/EntrySummary/index';
// import EntryList from '../../componentes/EntryList/index';



const NewEntry = () => {
 return(
  <View style={styles.container}>
    <BalanceLabel/>
    <View> 
     <TextInput style={styles.input} />
     <TextInput style={styles.input} />
     <Button title='GPS'/>
     <Button title='Camera'/>
     </View>
     <View>
     <Button title='Adicionar '/>
     <Button title='Remover'/>
     </View>
  </View>
  
 );
};

const styles = StyleSheet.create({
  container:{
   flex:1,
   padding:10,
  },
  input:{
    borderColor:'#000',
    borderWidth:1,

  }
});

export default NewEntry;
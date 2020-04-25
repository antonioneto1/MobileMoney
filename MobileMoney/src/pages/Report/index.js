import React from 'react';
import { View, StyleSheet, Picker, Button } from 'react-native';

import EntryLabel from '../../componentes/BalanceLabel';
import EntrySummary from '../../componentes/EntrySummary';
import EntryList from '../../componentes/EntryList';


const Report = () => {
  return(
    <View style={styles.container}>
      <EntryLabel/>
      <View>
        <Picker>
          <Picker.Item label = "Todas as Categorias"></Picker.Item>
        </Picker>
        <Picker>
          <Picker.Item label = "Ultimos 7 Dias"></Picker.Item>
        </Picker>
      </View>
      <EntrySummary/>
      <EntryList/>
      <View>
        <Button title= "Salvar"/>
        <Button title="Excluir"/>
      </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container:{
 flex:1,
  },
  label:{
    fontWeight:'bold',
    fontSize:15,
  }
});

export default Report;
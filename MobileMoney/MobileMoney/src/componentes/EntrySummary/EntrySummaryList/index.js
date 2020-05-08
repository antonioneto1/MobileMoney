import React from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';

const EntrySummaryList = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.categorias}>CATEGORIAS</Text>
        <FlatList
        data={[
          {key: "Alimentação: R$ 200,00"},
          {key: "Combustivel: R$ 12,00"},
          {key: "Alugel: R$ 120,00"},
          {key: "Lazer: R$ 250,00"},
          {key: "Outros: R$ 1.200,00"}
        ]}
        renderItem={({item})=> <Text>{item.key}</Text>}>

        </FlatList>
  </View>
  );
};

const styles = StyleSheet.create({
  container:{
 flex:1,
  },
  categorias:{
    fontWeight:'bold',
    fontSize:15,
  }
});

export default EntrySummaryList;
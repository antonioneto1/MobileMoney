/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  FlatList,
  StatusBar,
} from 'react-native';


const App = () => {
  const addEntry = () => {
    alert('abrir e adiconar lançamento');
  }

  return (
   <View style={{padding: 10}}>
     <Text style={{fontSize:22, 
      fontWeight:"bold",
      marginTop:10,
      marginBottom:10}}>
        SALDO: R$ 2.102,45 </Text>
        <Button 
        onPress={addEntry} 
        title="Adiconar">
        </Button>

        <Text style={{fontSize:22,
        fontWeight:"bold",
        marginTop:10,
        marginBottom:10}}>Categorias</Text>
        
        <FlatList
        data={[
          {key: "Alimentação: R$ 200,00"},
          {key: "Combustivel: R$ 12,00"},
          {key: "Alugel: R$ 120,00"},
          {key: "Lazer: R$ 250,00"},
          {key: "Outros: R$ 1.200,00"}
        ]}
      renderItem={({item})=> <Text>{item.key}</Text>}
        >

        </FlatList>

        <Text style={{fontSize:22,
        fontWeight:"bold",
        marginTop:10,
        marginBottom:10}}>Ultimos Lançamentos</Text>
        
        <FlatList
        data={[
          {key: "Padaria Asa Branca: R$ 10,00"},
          {key: "Supermercado Princesa Do Certão: R$ 190,00"},
          {key: "Posto Sol Nascente: R$ 190,00"}
        ]}
      renderItem={({item})=> <Text>{item.key}</Text>}
        >

        </FlatList>

   </View>
  );
};

const styles = StyleSheet.create({
 
});

export default App;

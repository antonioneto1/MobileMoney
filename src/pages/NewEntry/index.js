import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';

import {saveEntry, deleteEntry} from '../../services/Entries';

const NewEntry = ({navigation}) => {
  const currentBalance = 2065.35;

  const entry = navigation.getParam('entry', {
    id: null,
    amount: '0.00',
    entryAt: new Date(),
  });

  const [amount, setAmount] = useState(`${entry.amount}`);

  const isValid = () => {
    if (parseFloat(amount) !== '0') {
      return true;
    }
    return true;
  };

  const save = () => {
    const data = {
      amount: parseFloat(amount),
    };

    console.log('NewEntry :: save ', data);
    saveEntry(data, entry);
    goBack();
  };

  const remove = () => {
    deleteEntry(entry);
    goBack();
  };
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />

      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => setAmount(text)}
          value={amount}
        />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Camera" />
      </View>

      <View>
        <Button
          title="Adicionar"
          onPress={() => {
            isValid() && save();
          }}
        />
        <Button title="Excluir" onPress={remove} />
        <Button title="Cancelar" onPress={goBack} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default NewEntry;

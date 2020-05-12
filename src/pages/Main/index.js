import React from 'react';
import {View, StyleSheet} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import Colors from '../../styles/Colors';

const Main = ({navigation}) => {
  const currentBalance = 2064.35;

  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalance} />
      <EntrySummary />
      <EntryList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default Main;

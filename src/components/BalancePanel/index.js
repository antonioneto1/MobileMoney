import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/Colors';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

const BalancePanel = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.purple, Colors.cyan]}
        style={styles.panel}>
        <BalancePanelLabel currentBalance={currentBalance} />
        <BalancePanelChart />
      </LinearGradient>
      <TouchableOpacity style={styles.button}>
        <Icon name="add" size={30} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    // flex: 1,
    paddingVertical: 10,
  },
  container: {},
  button: {
    backgroundColor: Colors.deepPurple,
    borderRadius: 150,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    marginTop: -25,
    marginRight: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
});

export default BalancePanel;

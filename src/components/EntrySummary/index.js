import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/Colors';

const EntrySummary = ({entriesGrouped}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> CATEGORIAS </Text>
      <EntrySummaryChart />
      <EntrySummaryList entriesGrouped={entriesGrouped} />
      <View style={styles.actionContainer}>
        <Text style={styles.actionLabel}>Ultimos 7 Dias</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="insert-chart" style={styles.actionButtonIcon} />
          <Text style={styles.actionButtonText}>Ver Mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blueGrey,
    margin: 5,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255, 255 , 255, 0.2)',
    padding: 8,
  },
  title: {
    fontSize: 12,
    color: Colors.white,
    marginBottom: 5,
  },
  actionContainer: {
    flexDirection: 'row',
  },
  actionLabel: {
    fontSize: 12,
    color: Colors.white,
    flex: 1,
  },
  actionButton: {
    flexDirection: 'row',
  },
  actionButtonIcon: {
    color: Colors.white,
    marginTop: 3,
    marginRight: 2,
  },
  actionButtonText: {
    fontSize: 12,
    color: Colors.white,
  },
});

export default EntrySummary;

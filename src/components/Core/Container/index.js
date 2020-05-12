import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Colors from '../../../styles/Colors';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Container = ({
  title,
  children,
  actionLabelText,
  onPressActionButton,
  actionButtonText,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
      {(actionButtonText || actionButtonText) && (
        <View style={styles.actionContainer}>
          {actionLabelText && (
            <Text style={styles.actionLabel}>{actionLabelText}</Text>
          )}
          {actionButtonText && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={onPressActionButton}>
              <Icon name="insert-chart" style={styles.actionButtonIcon} />
              <Text style={styles.actionButtonText}>{actionButtonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
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

export default Container;

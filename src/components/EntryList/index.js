import React, {useEffect, useState} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';

import Container from '../Core/Container';

import EntryListItem from './EntryListItem';

import {getEntries} from '../../services/Entries';

const EntryList = ({}) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries();
      setEntries(data);
    }

    loadEntries();

    console.log('EntryList :: useEffect');
  }, []);

  return (
    <Container
      title="Últimos Lançamentos"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver Mais"
      onPressActionButton={() => {}}>
      <Text style={styles.title}>Últimos Lançamentos</Text>
      <FlatList
        data={entries}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <EntryListItem
            entry={item}
            isFirsItem={index === 0}
            isLastItem={index === entries.length - 1}
          />
        )}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntryList;

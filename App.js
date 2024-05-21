import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';

import FlamengoLogo from './assets/Flamengo.png';
import BotafogoLogo from './assets/Botafogo.png';
import FluminenseLogo from './assets/Fluminense.png';
import VascoLogo from './assets/Vasco.png';
import Maraca from './assets/Maracana.png';

const dummyArray = [
  { id: '1', value: 'Flamengo', logo: FlamengoLogo },
  { id: '2', value: 'Vasco', logo: VascoLogo },
  { id: '3', value: 'Fluminense', logo: FluminenseLogo },
  { id: '4', value: 'Botafogo', logo: BotafogoLogo },
];

const App = () => {
  const [listItems, setListItems] = useState(dummyArray);

  const ItemView = ({ item }) => {
    return (
      <View style={styles.itemWrapper}>
        <Image source={Maraca} style={styles.backgroundImage} />
        <View style={styles.overlay}>
          <Image source={item.logo} style={styles.logo} />
          <Text style={styles.itemText} onPress={() => getItem(item)}>
            {item.value}
          </Text>
        </View>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    if (item.id == '1')
      alert('Campeonato Brasileiro (8 títulos) \n\n 1980, 1982, 1983, 1987, 1992, 2009, 2019 e 2020');
    if (item.id == '2')
      alert('Campeonato Brasileiro (4 títulos) \n\n 1974, 1989, 1997 e 2000');
    if (item.id == '3')
      alert('Campeonato Brasileiro (4 títulos) \n\n 1970, 1984, 2010 e 2012');
    if (item.id == '4')
      alert('Campeonato Brasileiro (1 título) \n\n 1995.');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listItems}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  itemWrapper: {
    height: 100,
    marginBottom: 10,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  itemText: {
    fontSize: 32,
    color: '#000',
    marginLeft: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});

export default App;

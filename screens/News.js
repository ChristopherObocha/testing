import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';

import { firebase } from '../config/config';
import * as Linking from 'expo-linking';
import Card from '../components/Card';

function News() {

  const renderItem = ({ item }) => (
    <Card 
      title={item.name}
      date={item.date}
      text={item.text}
      onPress={() => Linking.openURL(`${item.url}`).catch(err => console.error('Error', err))} />
    );

const [users, setUsers] = useState([]);
const newsRef = firebase.firestore().collection('News');

useEffect(() => {
  let isMounted = true;
  (async function() {
    newsRef
    .onSnapshot( 
      querySnapshot => {
      const users = []
      querySnapshot.forEach((doc) => {
        const {title, name, date, url} = doc.data()
        users.push({
          id: doc.id,
          title,
          name,
          date,
          url,
        })
      })
      setUsers(users)
    })
})();
},[]);

return (
  <SafeAreaView>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator='false'
          data={users}
          renderItem={ renderItem } 
        />
  </SafeAreaView>
  );
}

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cards: {
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 25,
    marginHorizontal: 10,
    padding: 10,
    height: 128,
    width: 190,
    backgroundColor: '#4EA3FF',
  },
})
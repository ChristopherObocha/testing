import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';

function News() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('News')
      .onSnapshot(querySnapshot => {
        const users = [];

        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setUsers(users);
        setLoading(false);
      });
    
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={users}
      renderItem={ ({ item }) => (
        <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>User ID: {item.id}</Text>
          <Text>User Name: {item.name}</Text>
        </View>
      )}
    />
  );
}

export default News;
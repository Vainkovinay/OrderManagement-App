import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Appbar, DataTable, ActivityIndicator } from 'react-native-paper';

const OrderEntry = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchCustomers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Appbar.Header style={styles.appbarHeader}>
          <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
          <Appbar.Content title="Order Entry" />
        </Appbar.Header>
      </View>

      <View style={styles.api}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title sortDirection='descending'>Customer Name</DataTable.Title>
                <DataTable.Title numeric>OrderID</DataTable.Title>
                <DataTable.Title numeric>Amount</DataTable.Title>
              </DataTable.Header>
            </DataTable>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item, index }) => (
                <DataTable.Row> 
                  <DataTable.Cell style={styles.datacell}>{item.name}</DataTable.Cell>
                  <DataTable.Cell numeric>{1001 + index}</DataTable.Cell>
                  <DataTable.Cell numeric><Text style={styles.colorText}>5000</Text></DataTable.Cell>
                </DataTable.Row>
              )}
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  appbarHeader: {
    backgroundColor: 'skincolor',
  },
  api: {
    flex: 1,
  },
  colorText: {
    color: 'green',
    fontWeight: '600'
  },

});

export default OrderEntry;

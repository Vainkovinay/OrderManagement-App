import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Appbar, Avatar, Card, IconButton, ActivityIndicator } from 'react-native-paper';

const CustomerScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const customer = async () => {
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
    customer();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.navigate('Home')}/>
          <Appbar.Content 
            title="Customer" 
            style={{fontSize: 10}}
          />
        </Appbar.Header>
      </View>
      
      <View>
        <Card.Title
          style={styles.cardDesign}
          title="AAMANTRAM - VIRAR (E)"
          subtitle={'SlipNo: 3519 | 01 Apr 2024 \nExecutive: Shri Shri Maharaja Suryavardankumar ( The King of Meluha ) \nAmount: 13932.0'}
          subtitleNumberOfLines={5}
          left={(props) => <Avatar.Icon {...props} icon="account" />}
          right={(props) => <IconButton {...props} icon="arrow-right" onPress={() => {}} />}
        />
      </View>

      <View style={styles.Api}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()} // Assuming id is a number
            renderItem={(item) => (
              <View style={styles.item}>
                <Text>SlipNo: 3519 | 01 Apr 2024 </Text>
                <Text>Executive: {item.item.username}</Text>
                <Text>Amount: 15000.0</Text>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appbarTitle: {
    fontSize: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  cardDesign: {
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 13,
    marginRight: 13,
    marginTop: 8,
  },
  Api: {
    flex: 1,
    marginTop: 8,
  },
  item: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 13,
    marginVertical: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomerScreen;

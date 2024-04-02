import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Appbar, Avatar, Card, IconButton } from 'react-native-paper';

const HomeAcces=({navigation})=> {
  return (
    
    <View style={styles.container}>
      
      <View style={styles.appbar}>
        <Appbar.Header>
          <Appbar.BackAction onPress={()=>navigation.navigate('Product')}/>
          <Appbar.Content 
            title="Home Accessories" 
            style={{fontSize: 10}}/>
        </Appbar.Header>
      </View>
      
      <ScrollView style={{flexDirection: 'column'}}>
        <Image style={styles.image} source={require('D:/Replica-app/assets/HA1.jpeg')}/>
        <Image style={styles.image} source={require('D:/Replica-app/assets/ha2.jpeg')}/>
        <Image style={styles.image} source={require('D:/Replica-app/assets/HA3.jpeg')}/>
        <Image style={styles.image} source={require('D:/Replica-app/assets/HA4.jpeg')}/>
        <Image style={styles.image} source={require('D:/Replica-app/assets/HA5.jpeg')}/>
        <Image style={styles.image} source={require('D:/Replica-app/assets/HA6.jpeg')}/>
        <Image style={styles.image} source={require('D:/Replica-app/assets/HA7.jpeg')}/>
      </ScrollView>
    
    </View>
  );
};

const styles = StyleSheet.create({
  appbarTitle:{
    fontSize: 10,
  },

  container:{
    flex: 1,
    backgroundColor:"white",
  },

  cardDesign: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 13,
    marginRight: 13,
    marginTop: 8,
    height: 80,
    elevation: 10,
  },

  image: {
    height: 200,
    width: 250,
    margin: 5,
    alignSelf: 'center',
  },
})

export default HomeAcces;

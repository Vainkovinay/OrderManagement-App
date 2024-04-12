import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Appbar, Avatar, Card, IconButton } from 'react-native-paper';

const TwoWheelers=({navigation})=> {
  return (
    
    <View style={styles.container}>
      
      <View style={styles.appbar}>
        <Appbar.Header>
          <Appbar.BackAction onPress={()=>navigation.navigate('Product')}/>
          <Appbar.Content 
            title="Two Wheelers" 
            style={{fontSize: 10}}/>
        </Appbar.Header>
      </View>
      
      <ScrollView style={{flexDirection: 'column'}}>
        <Image style={styles.image} source={require('D:/HEMANT SHRIMALI/Replica-app/assets/B1.jpeg')}/>
        <Image style={styles.image} source={require('D:/HEMANT SHRIMALI/Replica-app/assets/B2.jpeg')}/>
        <Image style={styles.image} source={require('D:/HEMANT SHRIMALI/Replica-app/assets/B3.jpeg')}/>
        <Image style={styles.image} source={require('D:/HEMANT SHRIMALI/Replica-app/assets/B4.jpeg')}/>
        <Image style={styles.image} source={require('D:/HEMANT SHRIMALI/Replica-app/assets/B5.jpeg')}/>
        <Image style={styles.image} source={require('D:/HEMANT SHRIMALI/Replica-app/assets/B6.jpeg')}/>
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

  fistcontainer:{
    flex: 0.27,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    margin: 15,
  },

  secondcontainer:{
    flex: 0.27,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    margin: 15,
  },

  cardDesign: {
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 13,
    marginRight: 13,
    marginTop: 8,
  },

  image: {
    height: 200,
    width: 250,
    margin: 5,
    alignSelf: 'center',
  },
})

export default TwoWheelers;

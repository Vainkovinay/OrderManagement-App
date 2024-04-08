import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Appbar, Avatar, Card, IconButton } from 'react-native-paper';

const CustomerScreen=({navigation})=> {
  return (
    
    <View style={styles.container}>
      
      <View style={styles.appbar}>
        <Appbar.Header>
          <Appbar.BackAction onPress={()=>navigation.navigate('Home')}/>
          <Appbar.Content 
            title="Customer" 
            style={{fontSize: 10}}/>
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
        <Card.Title
            style={styles.cardDesign}
            title="AAMANTRAM - VIRAR (E)"
            subtitle={'SlipNo: 3519 | 01 Apr 2024 \nExecutive: ANKIT SIR \nAmount: 13932.0'}
            subtitleNumberOfLines={3}
            left={(props) => <Avatar.Icon {...props} icon="account" />}
            right={(props) => <IconButton {...props} icon="arrow-right" onPress={() => {}} />}
        />
        <Card.Title
            style={styles.cardDesign}
            title="AAMANTRAM - VIRAR (E)"
            subtitle={'SlipNo: 3519 | 01 Apr 2024 \nExecutive: ANKIT SIR \nAmount: 13932.0'}
            subtitleNumberOfLines={3}
            left={(props) => <Avatar.Icon {...props} icon="account" />}
            right={(props) => <IconButton {...props} icon="arrow-right" onPress={() => {}} />}
        />
      </View>
    
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
})

export default CustomerScreen;

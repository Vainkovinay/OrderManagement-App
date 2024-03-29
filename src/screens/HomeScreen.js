import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Appbar, Avatar, Card, IconButton } from 'react-native-paper';

const HomeScreen=({navigation})=> {
  return (
    
    <View style={styles.container}>
      
      <View style={styles.appbar}>
        <Appbar.Header>
          <Appbar.BackAction onPress={()=>navigation.navigate('Login')}/>
          <Appbar.Content 
            title="Technosys Order Management" 
            style={{fontSize: 10}}/>
          <Appbar.Action icon="magnify" onPress={()=>{}} />
          <Appbar.Action icon="dots-vertical" onPress={()=>{}} />
        </Appbar.Header>
      </View>
      
      <View style={styles.fistcontainer}>
        
        <Text style={styles.containerheading}>Master</Text>
        
        <View style={{flexDirection: 'row'}}>
          
          <View style={styles.insideview1}>
            <Image style={styles.personimage} source={require('D:/Replica-app/assets/person.png')}></Image>
            <Text style={styles.insidetext}>Customer</Text>
          </View>

          <View style={styles.insideview2}>
            <Image style={styles.personimage} source={require('D:/Replica-app/assets/person.png')}></Image>
            <Text style={styles.insidetext}>Product Category</Text>
          </View>

          <View style={styles.insideview2}>
            <Image style={styles.personimage} source={require('D:/Replica-app/assets/person.png')}></Image>
            <Text style={styles.insidetext}>Product Master</Text>
          </View>

        </View>
      </View>

      <View style={styles.secondcontainer}>
        <Text style={styles.containerheading}>Transactions</Text>

        <View style={{flexDirection: 'row'}}>
          
          <View style={styles.insideview1}>
            <Image style={styles.personimage} source={require('D:/Replica-app/assets/Arrow.png')}></Image>
            <Text style={styles.insidetext}>Order Entry</Text>
          </View>
        </View>
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

  insideview1: {
    
    flexDirection: "column",
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 15,
    height: 90,
    width: 85,
  },

  insideview2: {
    flexDirection: "column",
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 15,
    height: 90,
    width: 85,
  },

  containerheading: {
    textAlign: "center",
    alignContent: "center",
    fontWeight: "bold",
    fontSize: 20,
  }, 

  personimage:{
    height: 40,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  
  insidetext:{
    alignSelf: 'center',
    fontSize: 15,
  },
})

export default HomeScreen;

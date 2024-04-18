import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { Appbar, Avatar, Card, IconButton } from 'react-native-paper';

const FourWheelers=({navigation})=> {
  return (
    
    <View style={styles.container}>
      
      <View style={styles.appbar}>
        <Appbar.Header style={styles.appbarHeader}>
          <Appbar.BackAction onPress={()=>navigation.navigate('Product')}/>
          <Appbar.Content 
            title="Four Wheelers" 
            style={{fontSize: 10}}/>
        </Appbar.Header>
      </View>
      
      <ScrollView style={{flexDirection: 'column'}}>
        <View>
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/Replica-app/assets/C1.jpeg')}/>
            <Text style={styles.insideText}>{'Model: Vintage \n\nColor: Black & Red \n\nSpeed: 160 km/hr \n\nPrice: 5,00,000/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/Replica-app/assets/C2.jpeg')}/>
            <Text style={styles.insideText}>{'Model: Mustang \n\nColor: Black \n\nSpeed: 170km/hr \n\nPrice: 5,50,000/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}> 
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/Replica-app/assets/C3.jpeg')}/>
            <Text style={styles.insideText}>{'Model: Porsche \n\nColor: Yellow \n\nSpeed: 180 km/hr \n\nPrice: 7,00,000/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/Replica-app/assets/C4.jpeg')}/>
            <Text style={styles.insideText}>{'Model: Mustang GT \n\nColor: Red & Black \n\nSpeed: 250km/hr \n\nPrice: 10,00,000/- \n\nContact: 9988772277'}</Text>
          </View>

          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/Replica-app/assets/C5.jpeg')}/>
            <Text style={styles.insideText}>{'Model: Ferrari \n\nColor: Yellow \n\nSpeed: 210km/hr \n\nPrice: 12,00,000/- \n\nContact: 9988772277'}</Text>
          </View>
        </View>
        
      </ScrollView>
    
    </View>
  );
};

const styles = StyleSheet.create({
  appbarHeader:{
    fontSize: 10,
    backgroundColor: 'skincolor',
  },

  container:{
    flex: 1,
    backgroundColor:"skincolor",
  },

  cardDesign: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 13,
    marginRight: 13,
    marginTop: 10,
    height: 265,
    elevation: 7,
    borderColor: 'white',
  },

  image: {
    height: 230,
    width: 170,
    borderRadius: 5,
    margin: 10,
    alignSelf: 'center',
  },

  insideText: {
    color: 'black',
    paddingLeft: 3,
    paddingTop: 50,
    paddingRight: 5,
    textAlign: 'justify',
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: '500',
  },
})

export default FourWheelers;

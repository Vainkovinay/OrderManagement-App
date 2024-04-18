import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Appbar, Avatar, Card, IconButton } from 'react-native-paper';

const Stationary=({navigation})=> {
  return (
    
    <View style={styles.container}>
      
      <View style={styles.appbar}>
        <Appbar.Header style={styles.appbarHeader}>
          <Appbar.BackAction onPress={()=>navigation.navigate('Product')}/>
          <Appbar.Content 
            title="Stationary Items" 
            style={{fontSize: 10}}/>
        </Appbar.Header>
      </View>
      
      <ScrollView style={{flexDirection: 'column'}}>
        <View>
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/Replica-app/assets/S6.jpeg')}/>
            <Text style={styles.insideText}>{'Product: Book Set of 6 \n\nBrand: Classmate \n\nPrice: 599/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/Replica-app/assets/S5.jpeg')}/>
            <Text style={styles.insideText}>{'Product: Book Set of 6 \n\nBrand: Sundaram \n\nPrice: 699/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}> 
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/Replica-app/assets/S3.jpeg')}/>
            <Text style={styles.insideText}>{'Product: Dairy + Pen \n\nBrand: Arteza \n\nPrice: 899/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/Replica-app/assets/S7.jpeg')}/>
            <Text style={styles.insideText}>{'Product: Crayons \n\nBrand: Doms \n\nPrice: 300/- \n\nContact: 9988772277'}</Text>
          </View>

          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/Replica-app/assets/S1.jpeg')}/>
            <Text style={styles.insideText}>{'Product: Stamp \n\nPrice: 100/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/Replica-app/assets/S2.jpeg')}/>
            <Text style={styles.insideText}>{'Product: Eraser \n\nBrand: Staedtler \n\nPrice: 50/- \n\nContact: 9988772277'}</Text>
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
    height: 220,
    elevation: 7,
    borderColor: 'white',
  },

  image: {
    height: 200,
    width: 145,
    borderRadius: 5,
    margin: 10,
    alignSelf: 'center',
  },


  insideText: {
    color: 'black',
    paddingTop: 35,
    paddingRight: 13,
    textAlign: 'justify',
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: '500',
  },
})

export default Stationary;

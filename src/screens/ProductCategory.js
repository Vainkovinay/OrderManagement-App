import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Appbar, Avatar, Card, IconButton } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-web';

const ProductCategory=({navigation})=> {
  return (
    
    <View style={styles.container}>
      
      <View style={styles.appbar}>
        <Appbar.Header>
          <Appbar.BackAction onPress={()=>navigation.navigate('Home')}/>
          <Appbar.Content 
            title="Product Category" 
            style={{fontSize: 10}}/>
        </Appbar.Header>
      </View>
      
      <View>
        <Card.Title
            style={styles.cardDesign}
            title="Home Accessiors"
            left= {(props) => <Avatar.Icon {...props} icon="home" />}
            right={(props) => <IconButton {...props} icon="arrow-right-bold" onPress={() =>navigation.navigate('HomeA')} />}
        />
        <Card.Title
            style={styles.cardDesign}A
            title="Two Wheelers"
            left={(props) => <Avatar.Icon {...props} icon="bike" />}
            right={(props) => <IconButton {...props} icon="arrow-right-bold" onPress={() => navigation.navigate('Two')} />}
        />
        <Card.Title
            style={styles.cardDesign}
            title="Four Wheelers"
            left={(props) => <Avatar.Icon {...props} icon="car" />}
            right={(props) => <IconButton {...props} icon="arrow-right-bold" onPress={() => navigation.navigate('Four')} />}
        />
         <Card.Title
            style={styles.cardDesign}
            title="Electronic Items"
            left={(props) => <Avatar.Icon {...props} icon="phone" />}
            right={(props) => <IconButton {...props} icon="arrow-right-bold" onPress={() => navigation.navigate('EI')} />}
        />
         <Card.Title
            style={styles.cardDesign}
            title="Stationary Items"
            left={(props) => <Avatar.Icon {...props} icon="book" />}
            right={(props) => <IconButton {...props} icon="arrow-right-bold" onPress={() => navigation.navigate('Sta')} />}
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
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 13,
    marginRight: 13,
    marginTop: 8,
    height:80,
    elevation: 7,
    borderColor: 'white',
  },
})

export default ProductCategory;

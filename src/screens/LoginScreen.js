import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import { TextInput, Checkbox } from 'react-native-paper';



const LoginScreen=()=> {
  const [checked,setChecked] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        
        <Text style={styles.heading}>Technosys order Management</Text>

        <Image source={require('..\assets\Technosys.jpeg')}></Image>
        
        <TextInput
          // left={<TextInput.Icon icon="account" />}
          style={styles.inputText}
          mode= 'outlined'
          label='User Name'
        ></TextInput>
        
        <TextInput
          // left={<TextInput.Icon icon="form-textbox-password" />}
          style={styles.inputText}
          mode= 'outlined'
          label='Password'
        ></TextInput>
      
      </View>
      
      <View style={{flexDirection:'row', marginTop: 10}}>
        <Text style={styles.bottomtext}>Remember me</Text>
        
        <Checkbox 
          style={styles.checkboxs}
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      
      </View>
      
      <View style={styles.thirdview}>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttons}>Login</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper:{
    alignContent:'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  thirdview:{
    justifyContent: 'center',
  },

  inputText: {
    width: 300,
    backgroundColor: 'white',
    activeOutlineColor: 'black',
    marginBottom: 20,
  },
  
  heading:{
    fontWeight:'bold',
    paddingTop: 20,
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 35,
    paddingBottom: 200,
    color: 'black',
  },

  bottomtext:{
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 40,
  },

  checkboxs:{
    alignItems:'flex-end',
    backgroundColor: 'black',
  },

  loginButton: {
    backgroundColor: 'black',
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
  },

  buttons:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
})

export default LoginScreen;

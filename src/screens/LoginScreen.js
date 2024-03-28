import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import { TextInput, Checkbox } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginScreen=()=> {
  const [checked,setChecked] = useState(false);
  const [password, setPassword] = useState(''); 
  const [showPassword, setShowPassword] = useState(false); 
  const toggleShowPassword = () => { 
    setShowPassword(!showPassword); 
  }; 

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        
        <Text style={styles.heading}>Technosys order Management</Text>

        <Image 
          style={styles.image} 
          source={require('D:/Replica-app/assets/TechnosysI.png')}>
        </Image>
        
        <TextInput
          // left={<TextInput.Icon icon="account" />}
          style={styles.inputText}
          mode= 'outlined'
          label='User Name'
        ></TextInput>
        
        <TextInput
          mode='outlined'
          secureTextEntry={!showPassword} 
          value={password} 
          onChangeText={setPassword} 
          style={styles.inputText} 
          label="Password"
        ></TextInput>

        <MaterialCommunityIcons 
          name={showPassword ? 'eye-off' : 'eye'} 
          size={24} 
          style={styles.icon} 
          onPress={toggleShowPassword} 
        /> 
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
    marginBottom: 10,
    // flex: 1, 
    // color: '#333', 
    // // paddingVertical: 10, 
    // paddingRight: 10, 
    // fontSize: 16, 
  },

  icon: { 
    marginLeft: 10,
    color: 'black',
  }, 
  
  heading:{
    fontWeight:'bold',
    paddingTop: 20,
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 35,
    paddingBottom: 80,
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
  },

  image:{
    height: 130,
    width: 130,
    marginBottom: 40,
  }
})

export default LoginScreen;

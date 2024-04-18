import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image,Alert} from 'react-native';
import { TextInput, Checkbox } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginScreen=({navigation})=> {
  const [username, setUsername] = useState(null);
  const [errors, setErrors] = useState({});
  const [checked,setChecked] = useState(false);
  const [password, setPassword] = useState(''); 
  const [showPassword, setShowPassword] = useState(false); 
  const [isFormValid, setisFormValid] = useState(false);
  const [loginClicked, setLoginClicked] = useState(false);
  const toggleShowPassword = () => { 
    setShowPassword(!showPassword); 
  }; 

  useEffect(()=>{
    validateForm();
  },[username,password]);
  
  const validateForm =() =>{
    let errors ={};

    if (!username) {
      errors.username = 'username is required';
    }

    if(!password){
      errors.password='Password is required.';
    } else if (password.length < 6) {
      errors.password= 'Password must be atleast 6 characters long';
    }

    setErrors(errors);
    setisFormValid(Object.keys(errors).length===0);
  };

  const handleRegister = () => {
    validateForm();
    setLoginClicked(true);
    if (isFormValid) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Please Enter the Fields Properly.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        
        <Text style={styles.heading}>Order Management</Text>

        <Image 
          style={styles.image} 
          source={require('D:/VINAY SHRIMALI/Replica-app/assets/TechnosysI.png')}>
        </Image>
        
        <TextInput
          style={styles.inputText}
          mode= 'outlined'
          label='User Name'
          onChangeText={(text)=> setUsername(text)}
        ></TextInput>
        {loginClicked && errors.username && (
          <Text style={styles.error}>{errors.username}</Text>
        )}
        
        <View style={styles.passwordContainer}>
          <TextInput
            mode='outlined'
            secureTextEntry={!showPassword} 
            value={password} 
            onChangeText={(text)=>setPassword(text)} 
            style={styles.passwordInput} 
            label="Password"
          />
          <TouchableOpacity style={styles.iconContainer} onPress={toggleShowPassword}>
            <MaterialCommunityIcons 
              name={showPassword ? 'eye-off' : 'eye'} 
              size={24} 
              style={styles.icon} 
            /> 
          </TouchableOpacity>
        </View>
        {loginClicked && errors.password && (
          <Text style={styles.error}>{errors.password}</Text>
        )}
        
      </View>
      
      <View style={styles.rememberContainer}>
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
        <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
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
  error:{
    color: 'red',
    fontSize: 13,
    paddingBottom: 10,
  },
  wrapper:{
    alignContent:'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordContainer: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginLeft: 35, 
    marginRight: 30,
  },
  passwordInput: {
    flex: 1,
    backgroundColor: 'white',
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    paddingRight: 10,
    alignItems: 'center',
  },
  thirdview:{
    justifyContent: 'center',
  },
  inputText: {
    width: 300,
    backgroundColor: 'white',
    activeOutlineColor: 'black',
    marginBottom: 10,
  },
  icon: { 
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

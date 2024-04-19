import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const SignupPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Perform signup logic here
    console.log('Signing up:', { name, email, password });
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Signup" onPress={handleSignup} />
      <Text style={styles.loginMessage}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          Login here
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', 
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc', 
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff', 
  },
  loginMessage: {
    marginTop: 20,
    color: '#666', 
  },
  loginLink: {
    color: '#3498db', 
  },
});

export default SignupPage;

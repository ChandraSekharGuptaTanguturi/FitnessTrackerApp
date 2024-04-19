import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <Button title="Login" onPress={() => navigation.navigate('Dashboard')} />
      </View>
      <Text style={styles.signupMessage}>
        Don't have an account?{' '}
        <Text style={styles.signupLink} onPress={() => navigation.navigate('Signup')}>
          Signup here
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
  formContainer: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: '#ccc', 
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  signupMessage: {
    marginTop: 20,
    color: '#666', 
  },
  signupLink: {
    color: '#3498db', 
  },
});

export default LoginPage;

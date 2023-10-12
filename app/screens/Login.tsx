import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import tw from 'twrnc';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error: any) {
      console.log(error);
      alert('Sign in failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Account successfully created');
    } catch (error: any) {
      console.log(error);
      alert('Sign up failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={tw`flex-1`}>
        <ImageBackground 
          source={require('../../assets/Patriot_Quest.png')} 
          resizeMode="stretch"
          style={tw`flex-1 justify-center`}
        >
          <View style={tw`mt-26 mx-12 justify-center`}>
            <TextInput
              value={email}
              style={[tw`my-2 h-16 border-2 rounded-md bg-white p-3`, {fontFamily: 'Retro_Gaming'}]}
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              value={password}
              style={[tw`my-2 h-16 border-2 rounded-md bg-white p-3`, {fontFamily: 'Retro_Gaming'}]}
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />

            <View style={tw`flex flex-row mt-8`}>
              <TouchableOpacity style={tw`w-2/5 mx-4 border-4 bg-green-500 justify-center`} onPress={signIn}>
                <Text style={[tw`text-center`, {fontFamily: 'Retro_Gaming'}]}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`w-2/5 mx-4 border-4 bg-green-500 justify-center`} onPress={signUp}>
                <Text style={[tw`text-center`, {fontFamily: 'Retro_Gaming'}]}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login
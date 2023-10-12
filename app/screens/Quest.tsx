import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import tw from 'twrnc';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Quest = ({ navigation }: RouterProps) => {
  let location = 40;

  return (
    <ImageBackground 
      source={require('../../assets/home_bg.png')} 
      resizeMode="cover"
      style={tw`flex-1 justify-center`}
    >
      <View style={tw`flex`}>
        <View style={tw`h-1/8`}>
          <Text style={[tw`text-center text-xl`, {fontFamily: 'Retro_Gaming'}]}>Distance</Text>
        </View>
        <View style={tw`h-1/8`}>
          <Text style={[tw`text-center text-7xl`, {fontFamily: 'Retro_Gaming'}]}>{location + 'm'}</Text>
        </View>
        <View style={tw`h-2/8`}>

        </View>
        <View style={tw`h-2/8 justify-center`}>
          <View style={tw`flex flex-row`}>
            <TouchableOpacity style={tw`w-2/5 h-16 mx-4 border-4 bg-red-500 justify-center`} onPress={() => {navigation.goBack()}}>
              <Text style={[tw`text-center`, {fontFamily: 'Retro_Gaming'}]}>Give Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-2/5 h-16 mx-4 border-4 bg-green-500 justify-center`} onPress={() => {navigation.navigate('Log')}}>
              <Text style={[tw`text-center`, {fontFamily: 'Retro_Gaming'}]}>Capture</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Quest
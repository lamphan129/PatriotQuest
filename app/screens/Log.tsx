import { View, FlatList, TouchableOpacity, Image, Text, ImageBackground } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import tw from 'twrnc';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Log = ({ navigation }: RouterProps) => {
  const pictures = [
    { key: 1, link: require('../../assets/photos/gmu_1.png') },
    { key: 2, link: require('../../assets/photos/gmu_2.png') },
    { key: 3, link: require('../../assets/photos/gmu_3.png') },
    { key: 4, link: require('../../assets/photos/gmu_4.png') },
    { key: 5, link: require('../../assets/photos/gmu_5.png') }
  ]

  return (
    <ImageBackground 
      source={require('../../assets/home_bg.png')} 
      resizeMode="cover"
      style={tw`flex-1 justify-center`}
    >
      <View style={tw`mt-12`}>
        <Text style={[tw`text-center text-xl`, {fontFamily: 'Retro_Gaming'}]}>Adventure Log</Text>

        <FlatList
          style = {tw`h-5/6`}
          data = {pictures}
          extraData = {pictures}
          renderItem={({ item }) => (
            <Image
              source={item.link}
              resizeMode='cover'
              style={tw`w-80 mx-auto my-3 h-52 border-8 border-green-500`}
            ></Image>
          )}
        />
      </View>
      <TouchableOpacity
        style={tw`m-4 h-12 border-4 bg-red-300 justify-center`}
        onPress={() => FIREBASE_AUTH.signOut()}
      >
        <Text style={[tw`text-center`, {fontFamily: 'Retro_Gaming'}]}>Log Out</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

export default Log
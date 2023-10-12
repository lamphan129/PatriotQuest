import { View, FlatList, TouchableOpacity, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import tw from 'twrnc';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Friend = ({ navigation }: RouterProps) => {
  const friendList = [
    { key: 1, name: 'Kaia Le', profilePic: require('../../assets/characters/shanon_crouch_gif.gif') },
    { key: 2, name: 'Bob Lee', profilePic: require('../../assets/characters/shaggy_crouch_GIF.gif') },
    { key: 3, name: 'Ally Le', profilePic: require('../../assets/characters/shanon_crouch_gif.gif') },
  ]

  return (
    <ImageBackground 
      source={require('../../assets/home_bg.png')} 
      resizeMode="cover"
      style={tw`flex-1`}
    >
      <View style={tw`mt-12`}>
        <View style={tw`m-8`}>
          <Text style={[tw`text-center text-xl`, {fontFamily: 'Retro_Gaming'}]}>My Friend List</Text>
        </View>

        <FlatList
          style = {tw`h-full`}
          data = {friendList}
          extraData = {friendList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={tw`mx-4 h-32 mt-2 border-2 rounded-full bg-white`}
              onPress={() => {}}
            >
              <View style={tw`flex flex-row p-1`}>
                <Image
                  source={item.profilePic}
                  resizeMode='cover'
                  style={tw`w-1/3 h-28`}
                ></Image>
                <Text style={[tw`my-auto text-base`, {fontFamily: 'Retro_Gaming'}]}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  )
}

export default Friend
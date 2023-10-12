import { View, FlatList, Image, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import tw from 'twrnc';
import Ionicons from '@expo/vector-icons/Ionicons'

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Shop = ({ navigation }: RouterProps) => {
  const itemList = [
    { key: 1, name: 'Item 1', price: '150' },
    { key: 2, name: 'Item 2', price: '225' },
    { key: 3, name: 'Item 3', price: '75' },
  ]

  return (
    <ImageBackground 
      source={require('../../assets/home_bg.png')} 
      resizeMode="cover"
      style={tw`flex-1`}
    >
      <View style={tw`mt-12`}>
        <View style={tw`mt-8`}>
          <Text style={[tw`text-center text-xl`, {fontFamily: 'Retro_Gaming'}]}>Shop</Text>
        </View>

        <FlatList
          style = {tw`h-full mt-6`}
          data = {itemList}
          extraData = {itemList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={tw`mx-4 h-24 mt-4 border-2 rounded-2 bg-yellow-500`}
              onPress={() => {}}
            >
              <View style={tw`flex flex-row p-1 my-auto`}>
                <Ionicons name="gift" size={48} color="black"/>
                <Text style={[tw`my-auto mx-6 text-base`, {fontFamily: 'Retro_Gaming'}]}>{item.name}</Text>
                <Text style={[tw`my-auto mx-12 text-base`, {fontFamily: 'Retro_Gaming'}]}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  )
}

export default Shop
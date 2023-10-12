import { View, Image, Text, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React, { useState, Fragment } from 'react'
import { NavigationProp } from '@react-navigation/native';
import tw from 'twrnc';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Home = ({ navigation }: RouterProps) => {
  const [prompt, setPrompt] = useState('How are you feeling today?')
  const [option, setOption] = useState([{ key: 1, item: 'How are you feeling today?' }])
  const [isShowing, setIsShowing] = useState(false)

  return (
    <ImageBackground 
      source={require('../../assets/home_bg.png')} 
      resizeMode="cover"
      style={tw`flex-1 justify-center`}
    >
      <View style={tw`flex mt-12`}>
        <View style={tw`h-3/8 flex-row`}>
          <View style={tw`w-1/2`}>
            <Image
              source={require('../../assets/characters/shaggy_crouch_GIF.gif')}
              resizeMode='cover'
              style={tw`w-full h-full`}
            ></Image>
          </View>
          <View style={tw`mt-8 w-1/2 flex-col`}>
            <View style={tw`h-1/3 px-2`}>
              <Text style={{ fontFamily: 'Retro_Gaming' }}>Hunger</Text>
              <Image
                source={require('../../assets/Stat_Bar.png')}
                resizeMode='stretch'
                style={tw`mt-2 w-full h-8`}
              ></Image>
            </View>
            <View style={tw`h-1/3 px-2`}>
              <Text style={{ fontFamily: 'Retro_Gaming' }}>Joy</Text>
              <Image
                source={require('../../assets/Stat_Bar.png')}
                resizeMode='stretch'
                style={tw`mt-2 w-full h-8`}
              ></Image>
            </View>
            <View style={tw`h-1/3 px-2`}>
              <Text style={{ fontFamily: 'Retro_Gaming' }}>IQ</Text>
              <Image
                source={require('../../assets/Stat_Bar.png')}
                resizeMode='stretch'
                style={tw`mt-2 w-full h-8`}
              ></Image>
            </View>
          </View>
        </View>
        <View style={tw`h-1.5/8 my-2 flex-row`}>
          <View style={tw`w-1/3`}>
            <TouchableOpacity
              style={tw`m-2 border-4 rounded-full bg-green-500 justify-center`}
              onPress={() => {
                setOption([
                  {key: 1, item: 'Quest: Eat at Panera'},
                  {key: 2, item: 'Quest: Eat at the Mason Marketplace'},
                  {key: 3, item: 'Quest: Eat at Akeno Sushi'},
                  {key: 4, item: 'Quest: Eat at Chipotle'},
                  {key: 5, item: 'Quest: Eat at Southside Dining Hall'},
                  {key: 6, item: 'Quest: Eat at Panda Express'}
                ]);
                setPrompt('I\'m hungry.');
                setIsShowing(true);
              }}
            >
              <View style={tw`m-2`}>
                <Image
                  source={require('../../assets/characters/shaggy_hangry.png')}
                  resizeMode='stretch'
                  style={tw`w-full h-full`}
                ></Image>
              </View>
            </TouchableOpacity>
          </View>
          <View style={tw`w-1/3`}>
            <TouchableOpacity
              style={tw`m-2 border-4 rounded-full bg-green-500 justify-center`}
              onPress={() => {
                setOption([
                  {key: 1, item: 'Quest: Play a game at the Corner Pocket'},
                  {key: 2, item: 'Quest: Attend a Mason360 event'},
                  {key: 3, item: 'Quest: Work out at the RAC or Aquatic Fitness Center'},
                  {key: 4, item: 'Quest: Attend a game or concert at Eaglebank Arena'},
                  {key: 5, item: 'Quest: Watch a performance from the Mason School of Theatre'},
                  {key: 6, item: 'Quest: Meet up with a friend on campus'}
                ]);
                setPrompt('I\'m bored.');
                setIsShowing(true);
              }}
            >
              <View style={tw`m-2`}>
                <Image
                  source={require('../../assets/characters/shaggy_bored.png')}
                  resizeMode='stretch'
                  style={tw`w-full h-full`}
                ></Image>
              </View>
            </TouchableOpacity>
          </View>
          <View style={tw`w-1/3`}>
            <TouchableOpacity
              style={tw`m-2 border-4 rounded-full bg-green-500 justify-center`}
              onPress={() => {
                setOption([
                  {key: 1, item: 'Quest: Study for 5 minutes'},
                  {key: 2, item: 'Quest: Study for 15 minutes'},
                  {key: 3, item: 'Quest: Study for 30 mins'},
                  {key: 4, item: 'Quest: Study for 45 minutes'},
                  {key: 5, item: 'Quest: Study for 1 hour'},
                  {key: 6, item: 'Quest: Study for 2 hours'}
                ]);
                setPrompt('Time to be productive.');
                setIsShowing(true);
              }}
            >
              <View style={tw`m-2`}>
                <Image
                  source={require('../../assets/characters/shaggy_studious.png')}
                  resizeMode='stretch'
                  style={tw`w-full h-full`}
                ></Image>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`h-0.7/8 justify-center`}>
          <Text style={[tw`text-center`, {fontFamily: 'Retro_Gaming'}]}>{prompt}</Text>
        </View>
        <View style={tw`h-2.5/8`}>
          { isShowing &&
            <FlatList
            data = {option}
            extraData = {option} // force re-render
            renderItem={({ item }) => (
              <TouchableOpacity
                style={tw`mx-4 h-16 mt-2 border-2 rounded-full bg-white justify-center`}
                onPress={() => {navigation.navigate('Quest')}}
              >
                <Text style={[tw`text-center`, {fontFamily: 'Retro_Gaming'}]}>{item.item}</Text>
              </TouchableOpacity>
            )}
            />
          }
        </View>
      </View>
    </ImageBackground>
  )
}

export default Home
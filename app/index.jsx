import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {images} from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{height:"100%"}}>
        <View className="w-full flex justify-center items-center px-4">
          <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain"/>
          <Image source={images.cards} className="max-w-[380px] w-full h-[300px]" resizeMode="contain"/>
        </View>
        <View className="relative mt-5">
          <Text className="text-3xl text-white font-bold text-center">
            Discover Endless Possibilities with {' '}
            <Text className="text-secondary-200">
              Aura
            </Text>
          </Text>
          <View className="absolute -right-5 -bottom-2">
            <Image source={images.path} style={{ width: 136, height: 15 }} resizeMode="contain" />
          </View>
          <Text className="text-sm font-pregular text-gray100 mt-7 text-center">Where creativity meets innovation: embark on a journey of limitless exploration with Aora</Text>
        </View>
     </ScrollView>
    </SafeAreaView>
  );
}


import React from "react";
import { Button, FlatList, Text, View } from "react-native";
import MessageBubble from "../Components/MessageBubble";
import { zip, unzip, unzipAssets, subscribe } from 'react-native-zip-archive'
//import { MainBundlePath, DocumentDirectoryPath } from 'react-native-fs'

const arr = [
  { messageID: "0", text: "first"  , mine:true},
  { messageID: "1", text: "ahaha" ,mine:false},
  { messageID: "2", text: "bbb" ,mine:true},
  { messageID: "3", text: "cccccccccc", mine:false},
];

const HomeScreen = ({ navigation }) => {
  return (
    // <Button
    //   title="Go to Jane's profile"
    //   onPress={() =>
    //     navigation.navigate('Profile', { name: 'Jane' })
    //   }
    // />
    <View>
      <FlatList
        data={arr}
        renderItem={({ item }) => {
          return <MessageBubble mine={item.mine} text={item.text} />;
        }}
        keyExtractor={(item, index) => item.messageID}
        vertical="true"
      />
    </View>
  );
};

export default HomeScreen;

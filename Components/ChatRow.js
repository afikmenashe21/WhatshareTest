import React from "react";
import { View,Text } from "react-native";
import { Badge } from "react-native-elements";
import { exp } from "react-native-reanimated";

const ChatRow = ( {myText} ) => {
  return (
    <View>
      <Badge >
        <Text>{myText}</Text>
        
      </Badge>
    </View>
  );
};

export default ChatRow;

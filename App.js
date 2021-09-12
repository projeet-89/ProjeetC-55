import * as React from 'react';
import { Text, View, Button,TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';

class SoundButton extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync(
       {uri: 'https://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
       {shouldPlay: true}
     )
  }

  render() {
    return (
     <TouchableOpacity style={{
       backgroundColor:'lime',
       marginLeft:90,
       borderWidth:1,
       borderColor:'blue',
       alignItems:"center",
       justifyContent:"center",
       width:200,
       height:200,
       borderRadius:100,
     }}
     onPress={this.playSound}>
     <Text>Press Me
     </Text>
     </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
      </View>
    );
  }
}



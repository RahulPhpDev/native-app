import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View,Image, Button } from 'react-native';

export default function App() {
  const [inputName, setInputName ] = useState('');

  return (
    <View style={styles.container}>
      <LoadImage />
      <StatusBar style="auto"/>
      <TextInput onChangeText={(newText) => setInputName(newText)} placeholder ="Place your name" style ={
        {
          borderWidth: 2,
          borderColor:'blue',
          width: 224,
          height: 40,
          padding: 5
        } 
      }/>
      <Text > {`name is : ${inputName}`}  </Text>
      <Button title="Update My Name"  />
    </View>
  );
}
const LoadImage = (props) => {
  return (
    <Image 
    source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
    // source ={'/logo.png'} 
    style={{width: 100, height: 60,marginBottom:50}}
    />
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:50,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'top',
  },
});

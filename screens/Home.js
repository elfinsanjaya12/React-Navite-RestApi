import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  static navigationOptions = {
    title : 'Home'
  }
  constructor(props){
    super(props)
    this.state = {
      hasil: 0,
      input: '',
      showAbout: false
    }
  }

  input = (val) => {
    const {input} = this.state;
    const inputValue = val;

    this.setState({input: inputValue})
    const hasil = this.hasilPerhitungan(inputValue)
    this.setState({hasil: hasil})
  }

  hasilPerhitungan = (inputValue) => {
    const arrayInput = inputValue.split("");
    let hasil = 0;
    let angka1 = "";
    let angka2 = "";
    let operator = "";

    for (var i = 0; i < arrayInput.length; i++) {
      switch (arrayInput[i]){
        case "+": 
          operator = "+"; 
          angka1 = hasil; 
          angka2 = ""; 
        break;
        case "-": 
          operator = "-"; 
          angka1 = hasil; 
          angka2 = ""; 
        break;
        case "*": 
          operator = "*"; 
          angka1 = hasil; 
          angka2 = ""; 
        break;
        case "/": 
          operator = "/"; 
          angka1 = hasil; 
          angka2 = ""; 
        break;
        default:
          arrayInput[i] == " " ? angka2 = "" : angka2 += String(arrayInput[i])
          angka1 == "" ? angka1 = angka2 : hasil;
          if (arrayInput[i] != " ") {
            switch(operator){                    
              case "+": 
                hasil = 
                Number(angka1) + Number(angka2); 
              break;
              case "-": 
                hasil = Number(angka1) - Number(angka2); 
              break;
              case "*": 
                hasil = Number(angka1) * Number(angka2); 
              break;
              case "/": 
                hasil = Number(angka1) / Number(angka2); 
              break;
              default: 
                hasil = Number(angka1) + 0;
          }
        }      
      }    
    }
    return hasil;
  }

  render() {
    const { showAbout } = this.state
    const arrayOperator = [{
      nama : 'tambah',
      operator : '+'
    },{
      nama : 'Kurang',
      operator : '-'
    },{
      nama : 'Bagi',
      operator : '/'
    },{
      nama : 'Kali',
      operator : '*'
    }];

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 32}}>Kalkulator</Text>
        <TextInput 
          style={styles.inputBox} 
          value={this.state.input} 
          onChangeText={(val) => this.input(val)} 
        />
        {
          arrayOperator.map(data => {
            return (
              <Button title={data.nama} onPress={() => {
                  const {input} = this.state
                  const inputBaru = `${input}${data.operator}`
                  this.setState({input: inputBaru})
               }}
              />
            )
          })
        }

        <Button 
          title="Go to About Screen" 
          onPress={() => this.props.navigation.navigate('About', {text: 'ini adalah data dari pararms'})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', margin: 32
  },
  inputBox: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 12,
    margin:6

  }
});

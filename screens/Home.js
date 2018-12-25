import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import axios from 'axios'


export default class App extends React.Component {
  static navigationOptions = {
    title : 'Home'
  }
  constructor(props){
    super(props)
    this.state = {
      hasil: 0,
      input: '',
      yesno: '',
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

componentDidMount(){
  axios.get('https://yesno.wtf/api').then((res) => this.setState({yesno: res.data})).catch(err => console.log(err))
}


  render() {
    const { showAbout, yesno } = this.state
  
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 32}}>Kalkulator</Text>
        <TextInput 
          style={styles.inputBox} 
          value={this.state.input} 
          onChangeText={(val) => this.input(val)} 
        />
        <Text style={ {fontSize: 25} }>Hasil : {this.state.hasil}</Text>
        <Image source={{uri: yesno.image}} style={{width: 100, height:100}} />
        <Text style={ {fontSize: 25} }>{yesno.answer}</Text>
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

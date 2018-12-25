import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import axios from 'axios';


export default class Home extends React.Component {
  static navigationOptions = {
    title : 'Home'
  }
  constructor(){
    super()
    this.state = {
      planets: []
    }
  }

componentDidMount(){
  axios.get('https://swapi.co/api/planets').then((res) => this.setState({planets: res.data.results})).catch(err => console.log(err))
}


  render() {
  
    return (
      <View style={styles.container}>
      {/* dirender 1 kali 
          scrollview membuat halaman yang banyak bagian foto nama deskripsi / tidak banyak data nya
      */}
        {/* <ScrollView>
          {
            this.state.planets.map( planet => {
              return <Text style={{fontSize: 50}}>{planet.name}</Text>
            })
          }
        </ScrollView> */}

        {/* dirender sesuai dia berada 
            flat list digunakan data saat banyak
        */}
        <FlatList 
          data={this.state.planets}
          renderItem={({item}) => {
            return <Text>{item.name}</Text>
          }}
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

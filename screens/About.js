import React from 'react'
import { View, Text } from 'react-native'

const AboutScreen = (props) =>{
    const text = props.navigation.getParam('text', 'ini adalah nilai defaul params text')
    return(
        <View>
            <Text>Ini Adalah Halaman About</Text>
            <Text>{text}</Text>
        </View>
    )
}

export default AboutScreen
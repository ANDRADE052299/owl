import React from "react";
import {
    Text,
    View} from 'react-native'
import Boton from '../components/Boton'

const Home=({navigation})=>{
    return( 
        <View>
            <Boton
                text = "Ir al perfil"
                onPress={()=>{
                    navigation.navigate('Profile')

                }}    
            />
        </View>
    )
}

export default Home
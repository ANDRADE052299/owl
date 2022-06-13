import React from "react";
import {
    Text,
    View} from 'react-native'
import Boton from '../components/Boton'    
 
const Profile=({navigation})=>{
    return(
        <View>
            <Boton
                text = "Ir al Home"
                onPress={()=>{
                    navigation.navigate('Home')

                }}
            />
        </View>
    )
}

export default Profile
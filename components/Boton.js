import React from 'react'
import {
    StyleSheet, 
    Text,
    TouchableOpacity,
    View} from 'react-native'

const Boton = (props) =>{
    const {onPress, text} = props

    return(
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={ onPress}
        >
            <Text>
                {text}
            </Text>
        </TouchableOpacity>
    )   
}
export default Boton

const styles= StyleSheet.create({
    buttonContainer:{
        backgroundColor:'green',
        marginBottom:10,
        paddingHorizontal:20,
        paddingVertical: 10,
    },
    buttonText:{
        color:'#f9f9f9'

    }
})
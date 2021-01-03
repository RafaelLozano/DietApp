import React from 'react'
import { Text, View, Pressable } from 'react-native'
import styles from './styles'

const Button = (props) => {
    const { color, content, onPress } = props
    const backgroundColor = color === 'primary' ? '#58be75' : 'white'
    const textColor = color === 'primary' ? 'white' : 'grey'
    return (
        <View style={styles.mainContainer}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => onPress()}
            >
                <Text style={[styles.buttonText,{color:textColor}]}>{content}</Text>
            </Pressable>
        </View>
        
    )
}

export default Button



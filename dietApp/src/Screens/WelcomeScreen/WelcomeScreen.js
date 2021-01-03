import React from 'react'
import {Text, View, Image } from 'react-native'
import styles from './styles'
import Button from '../../Components/Button/Button'

const WelcomeScreen = () => {
    return (
        <View styles={styles.mainContainer}>
            <Image 
                source={{ uri:'https://images.unsplash.com/photo-1531113463068-6f334622d795?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}}
            style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>Best tips for your diets</Text>
                <Text numberOfLines={3} style={styles.subTitle}> 
                    hjkadsjdakshfajsfafskhafshjafshjkafsjkafsjafsfsjkafhsjkafhsjkafshjkafhskfhjkdfhsjh  jkdsfhjkdfhs  fsdhjkdfhsjkhdfjkshdfjs 
                    jdjfhfhdfksjhjkdfskkkkjd fggdfshdfs sk
                    </Text>
            </View>
            <View style={styles.buttonContainer}>
                {/* BOTON 1 */}
                <Button content={"Skip step"} color={"secundary"} />
                <Button content={"Next"} color={"primary"} />

                {/* BOTON 2 */}
            </View>
        </View>
    )
}

export default WelcomeScreen



import React from 'react'
import {Text, View, Image, ImageBackground } from 'react-native'
import styles from './styles'
import Button from '../../Components/Button/Button'
import { useNavigation } from '@react-navigation/native'
const WelcomeScreen = () => {
    const navigator = useNavigation();
    return (
        <View styles={styles.mainContainer}>
            <ImageBackground style={styles.background} source={require('../../../assets/images/BackgroundScreen1a.png')}>
            </ImageBackground>
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
                <Button 
                content={"Skip step"} 
                color={"secundary"} 
                onPress={() => {
                        navigator.navigate('Login')
                    }}
                />
                <Button 
                content={"Next"} 
                color={"primary"} 
                onPress={() => {
                        navigator.navigate('Login')
                    }}
                />

                {/* BOTON 2 */}
            </View>
        </View>
    )
}

export default WelcomeScreen



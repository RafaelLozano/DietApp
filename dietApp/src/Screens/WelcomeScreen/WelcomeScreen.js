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
                source={require('../../../assets/images/WelcomeImage1.jpeg')}
            style={styles.image}
            />
            <View style={{backgroundColor:'white'}}> 
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Best tips for your diets</Text>
                    <Text numberOfLines={3} style={styles.subTitle}> 
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, ante elementum praesent pharetra cras class cubilia, 
                        ultrices hac id bibendum porttitor integer. Convallis phasellus auctor fringilla blandit est congue consequat scelerisque, 
                        curabitur metus potenti faucibus orci eu sollicitudin condimentum eros, aptent dis dapibus cras lacinia vitae sagittis.
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
        </View>
    )
}

export default WelcomeScreen



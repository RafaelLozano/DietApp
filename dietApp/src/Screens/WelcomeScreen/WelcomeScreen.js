import React from 'react'
import { Text, View, Image, ImageBackground, StatusBar,FlatList} from 'react-native'

import styles from './styles'
import Button from '../../Components/Button/Button'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
    const navigator = useNavigation();
    

    return (
        
            <View style={styles.mainContainer} >
                {/* source={require('../../../assets/images/BackgroundScreen1a.png')} */}
                <StatusBar backgroundColor={'transparent'} translucent={true} barStyle="light-content"  />

            <View style={styles.carrouselContainer}>

                < ImageBackground source = { require('../../../assets/images/WelcomeImage1.jpeg')} style={styles.backgroundImage} >

                    <Image source={require('../../../assets/images/footer.png')} style={styles.image}/ >
                </ImageBackground>

            </View>

                <View style={styles.bottomContainer}>
                    <View style={{ width: '90%', backgroundColor: 'white',justifyContent:'space-around'}}>
                        <Text style={styles.title}>Best tips for your diets</Text>
                        <Text numberOfLines={3} style={styles.subTitle}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit, ante elementum praesent pharetra cras class cubilia,
                            ultrices hac id bibendum porttitor integer. Convallis phasellus auctor fringilla blandit est congue consequat scelerisque,
                            curabitur metus potenti faucibus orci eu sollicitudin condimentum eros, aptent dis dapibus cras lacinia vitae sagittis.
                        </Text>
                    </View>
                    <View style={{flexDirection:'row',width:'100%',justifyContent:'space-around',paddingBottom:15}}>
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

                    </View>
                </View>
            </View>
        
    )
}

export default WelcomeScreen



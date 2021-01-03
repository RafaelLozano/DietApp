import React, { useState }from 'react'
import { Text, View, TextInput, Pressable, ImageBackground, StatusBar,Image} from 'react-native'
import styles from './styles';
import Entypo from'react-native-vector-icons/Entypo'
import AntDesign from'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
const LoginScreen = () => {
    const { emailText, setEmailText } = useState('');
    const { passText, setPassText } = useState('');
    const navigator = useNavigation();
    return (
        
        <ImageBackground style={styles.mainContainer} source={require('../../../assets/images/BackgroundScreen_2.png')}>
            {/* title */}
            <StatusBar barStyle="light-content" />
            
            <Text style={styles.title}>Welcome</Text>

            <View style={styles.inputField}>
                {/* email input */}
                <TextInput
                    style={styles.emailInput}
                    placeholder="rafael@development.io"
                    value={emailText}
                    onChangeText={setEmailText} />
                {/* password */}
                <TextInput
                    style={styles.passInput}
                    placeholder="******"
                    secureTextEntry={true}
                    value={passText}
                    onChangeText={setPassText} />
            </View>
            

            {/* forgot your password? */}
            <Text style={styles.subTitle}>Forgot your password?</Text>

            {/* login botton */}
            <Pressable
                style={styles.button}
                onPress={() => navigator.navigate('Home')}
            >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>

            {/* Don't have an account? sign up */}
            <Text style={styles.subTitle}>Don't have an account? sign up </Text>

            <View style={styles.iconContainer}>
                {/* FB  Google icon */}
                <Image style={{ width: 30, height: 30,borderColor:'#e5e5e5' }} source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5c1UZ1oerKHlcDp6/M9WKHHzeHV2ulxgravt9Td4Ozl6PGDkb7ByN5YbatQZ6j29/q3v9h2hrhMY6aQnMSsAnKHAAAC70lEQVR4nO3caXLiMBRFYdoihhhsQ5jDlPT+F9mdqv7bRrYQ7z7XOQug9BUWHiQzmRARERERERERERERERERqVe0IZQPCtaDHFwo62Yz/VrP3jtbrH0Sy7rYH46/YtpV1oPtX6jCbBel+2npThjq/Taa51AYmrdTH583YdHsP/r5nAnLTa/j05+w+ezv8yRsq/MQoB9hmPeegb6E5eU2DOhFWK4G+rwIw3CgD2G4Dge6ELaboXPQi7CJu4nwK6zvKUAHwvCVBHQgrFMmoQdh4jGqL2wviUB5YRP/uMKnsJ2mAtWF9XLkwjblcs2FsDqMXZh6LpQXhn06UFtYpZ7t5YX1wEczboTF/AlAaWFYP0OovPZU9pmGt9194W79sIq/Jt2uqqrytwbcxJ4NT9e6tR7soEIk8N749E2K7zjgubEe6dAi75yOboGxwrnTQ/RvRZTwIHy6e1SccF5Yj3N4UcJjbT3MhKKEh9J6mAlFCZWvyR4WJXxDqBxChPohRKgfQoT6IUSoH0KE+iFEqB9ChPqNQ1h0vKJcxWwt/aofvelsDFzNOlpECO9dH/DT+8ZUWMYgErNdfXuB8Ga7RPwCofHy2wuE59EfpQvbH9MXCNejF65st2q8QPhtu5Mhv/BmfE2TX/hhvGMqv3BpvBslv/BuvGUqv3A2+nloff+YX3gx3rmYX2j9CCC78Ga9NzO78GS9dTG7cDv679B8c2Z24e/R/9LsRy+8Wm/kzy60nobZhdb3TvmF9u8e5hYaP0p8gfB99PPQ/l2F3MKp+StDuYXWvuxC60eJ+YXm907ZhQJ/NlA+4d9ZOrrbH6WTzbyjmL+D/Oz6BNsl/H8V/y9E7TYpOz7BGveoceyn6QohQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLs0R8aFUYEFLSeAgAAAABJRU5ErkJggg==' }} />
                <View style={styles.space}></View>
                <Image style={{width:40,height:40}} source={{ uri:'https://img-authors.flaticon.com/google.jpg'}}/>
            </View>

        </ImageBackground>
    )
}

export default LoginScreen



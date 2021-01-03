import React, { useState }from 'react'
import { Text, View, TextInput, Pressable, ImageBackground, StatusBar} from 'react-native'
import styles from './styles';
import Entypo from'react-native-vector-icons/Entypo'
import AntDesign from'react-native-vector-icons/AntDesign'

const LoginScreen = () => {
    const { emailText, setEmailText } = useState('');
    const { passText, setPassText } = useState('');
    return (
        
        <ImageBackground style={styles.mainContainer} source={require('../../../assets/images/BackgroundScreen2a.png')}>
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
                onPress={() => { console.warn('clicked!') }}
            >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>

            {/* Don't have an account? sign up */}
            <Text style={styles.subTitle}>Don't have an account? sign up </Text>

            <View style={styles.iconContainer}>
                {/* FB  Google icon */}
                <Entypo name={"facebook"} size={25} color={'blue'} />
                <View style={styles.space}></View>
                <AntDesign name={"google"} size={25} color={'green'} />
            </View>

        </ImageBackground>
    )
}

export default LoginScreen



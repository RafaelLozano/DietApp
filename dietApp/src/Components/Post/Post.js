import React, {useState}from 'react'
import { Text, View ,Image,Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import dataBreakfast from '../../../assets/data/dataBreakfast'
import styles from'./styles'
const Post = (props) => {
    const item = props.item;
   
    const navigator = useNavigation();
    
    return (
        <Pressable
            style={styles.mainContainer}
            onPress={() => {
                navigator.navigate('Details', item)
            }}
        >
            <Image
                source={{uri:item.image}}
                style={styles.image}
            />

            <Text style={{fontSize:18,fontWeight:'bold',textAlign:'center'}}>{item.title}</Text>
        </Pressable>
    )
}

export default Post



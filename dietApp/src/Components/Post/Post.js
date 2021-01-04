import React, {useState}from 'react'
import { Text, View ,Image,Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import dataBreakfast from '../../../assets/data/dataBreakfast'
import styles from'./styles'
const Post = (props) => {
    const item = props.item;
   
    const navigator = useNavigation();
    
    return (
        
         <View style={styles.mainContainer}>
            <Pressable
                onPress={() => {
                    navigator.navigate('Details', item)
                }}
            >
                <Image
                    source={{uri:item.image}}
                    
                    style={styles.image}
                // resizeMode={'stretch'}
                />

                
                <Text style={{fontSize:18,fontWeight:'bold',}}>{item.title}</Text>
            </Pressable>
         </View> 
    )
}

export default Post



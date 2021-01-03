import React, {useState}from 'react'
import { Text, View ,Image,Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import dataBreakfast from '../../../assets/data/dataBreakfast'

const Post = (props) => {
    const item = props.item;
    const image = props.item.image;
    const navigator = useNavigation();
    const [data, setData] = useState(dataBreakfast)
    return (
        <Pressable
            onPress={() => {
                navigator.navigate('Details',data)
            }}
        >
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Image
                    source={{uri:item.image}}
                    
                    style={{height:250,aspectRatio:2/3,borderRadius:25,marginBottom:10,marginHorizontal:10}}
                // resizeMode={'stretch'}
                />

                
                <Text style={{fontSize:18,fontWeight:'bold',}}>{item.title}</Text>
            </View> 
        </Pressable>
    )
}

export default Post



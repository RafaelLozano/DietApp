import React from 'react'
import { Text, View ,Image,Pressable} from 'react-native'

const Post = (props) => {
    const item = props.item;
    
    return (
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image
                source={{uri:item.image}}
            style={{height:300,aspectRatio:2/3,borderRadius:25,marginBottom:10,marginHorizontal:10}}
            />

            
            <Text style={{fontSize:18,fontWeight:'bold',}}>{item.title}</Text>
        </View>
    )
}

export default Post



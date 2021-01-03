import React from 'react'
import { Text, View, FlatList, StatusBar, ImageBackground,Pressable} from 'react-native'
import Card from '../../Components/Card/card'
import Post from '../../Components/Post/Post';

import data from'../../../assets/data/data'
import dataBreakfast from '../../../assets/data/dataBreakfast'
import styles from'./styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
    return (
        <ImageBackground style={styles.background} source={require('../../../assets/images/BackgroundScreen_3.png')} >
            <StatusBar barStyle="light-content" />
            <View style={styles.topContainer}>
                {/* title */}
                <View style={{flexDirection:'row',alignContent:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:25,marginLeft:10,marginRight:10}}>Activity</Text>
                    <FontAwesome name={"chevron-down"} size={25} color={'black'} />
                </View>

                <Text>Today, 3 january 2021</Text>
            </View>

            <View style={{}}>
                <FlatList
                data={data}
                renderItem={ ({item}) => <Card info={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={{flexDirection:'row',width:'90%',justifyContent:'space-around',marginVertical:30}}>
                <Text>Breakfast</Text>
                <Text>Breakfast</Text>
                <Text>Breakfast</Text>
            </View>

            <View style={{marginVertical:10}}>
                <FlatList
                    data={dataBreakfast}
                    renderItem={({ item }) => <Post item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            
            
        </ImageBackground>
    )
}

export default HomeScreen



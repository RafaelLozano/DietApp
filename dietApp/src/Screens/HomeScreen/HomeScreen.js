import React, { useState } from 'react'
import { Text, View, FlatList, StatusBar, ImageBackground, SafeAreaView, Image} from 'react-native'
import Card from '../../Components/Card/card'
import Post from '../../Components/Post/Post';
import dataBreakfast from '../../../assets/data/dataBreakfast'
import data from '../../../assets/data/data'

import styles from './styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';


const HomeScreen = () => {
    const width = useWindowDimensions().width;

    return (
        
            <View style={styles.mainContainer}>
                <StatusBar barStyle="light-content" />
                
                <ImageBackground source={require('../../../assets/images/Header.png')} style={{width:'100%',height:'120%',position:'absolute',zIndex:-1}}></ImageBackground>
                <SafeAreaView style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <View style={styles.activity}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10,width:'100%'}}>
                            {/* title */}
                            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 25, marginLeft: 10, marginRight: 10 }}>Activity</Text>
                                <FontAwesome name={"chevron-down"} size={25} color={'black'} />
                            </View>
                            
                            <Text>Today, 4 january 2021</Text>

                        </View>
                        <View style={styles.dataStyle}>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => <Card info={item} />}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                snapToAlignment={"center"}
                                snapToInterval={width-100} 
                                decelerationRate={"fast"}
                                
                            />
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around',alignItems:'center'}}>
                        <Text>Breakfast</Text>
                        <Text>Breakfast</Text>
                        <Text>Breakfast</Text>
                    </View>

                    <View style={styles.carousel}>
                        <FlatList
                            data={dataBreakfast}
                            renderItem={({ item }) => <Post item={item} />}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </SafeAreaView>
            </View>
        
    )
}

export default HomeScreen

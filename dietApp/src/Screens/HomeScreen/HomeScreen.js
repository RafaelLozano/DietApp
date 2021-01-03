import React from 'react'
import { Text, View, FlatList, StatusBar, ImageBackground} from 'react-native'
import Card from '../../Components/Card/card'

import data from'../../../assets/data/data'
import styles from'./styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TabNavigator from '../../Components/Navigation/TabNavigator/TabNavigator'
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
            
        </ImageBackground>
    )
}

export default HomeScreen



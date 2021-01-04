import React from 'react'
import { Text, View, ImageBackground, StatusBar ,Image} from 'react-native'
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
const DetailScreen = ({route}) => {
    const data = route.params;
    return (
        <View style={styles.mainContainer}>
            <StatusBar barStyle="light-content" />
            <ImageBackground style={styles.backgroundImage} source={require('../../../assets/images/Header.png')}>
                {/* imagen */}
                
                    <Image style={styles.image} source={{ uri:data.image}}>
                        
                    </Image>
                

                <View style={{alignItems:'center',width:'80%',marginBottom:10,}}>
                    {/* Title */}
                    <Text style={styles.title}>{data.title}</Text>
                    {/* Description */}
                    <Text numberOfLines={2} style={{color:'grey',textAlign:'center',}}>
                        {data.description}
                        </Text>
                </View>

                {/* Nutritional information */}
                <View style={styles.infoContainer}>
                    <Text style={{fontSize:18,fontWeight:'500',marginVertical:12}}>Nutritional information</Text>

                    <View style={{color:'black',flexDirection:'row',marginBottom:25}}>
                        <View style={{justifyContent:'center',alignItems:'center',marginHorizontal:12}}>
                            <Text style={{color:'red',fontWeight:'bold',marginBottom:5,fontSize:18}}>{data.calories}</Text>
                            <Text style={{color:'grey',fontSize:12,}}>Calories</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 12 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginBottom: 5, fontSize: 18 }}>{data.grases}</Text>
                            <Text style={{ color: 'grey', fontSize: 12, }}>grases</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 12 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginBottom: 5, fontSize: 18 }}>{data.carb}</Text>
                            <Text style={{ color: 'grey', fontSize: 12, }}>carbohyd</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 12 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginBottom: 5, fontSize: 18 }}>{data.protein}</Text>
                            <Text style={{ color: 'grey', fontSize: 12, }}>protein</Text>
                        </View>
                    </View>
                </View>

                {/* Ingredients */}
                <View style={styles.infoContainer}>
                    <Text style={{ fontSize: 18, fontWeight: '500', marginVertical: 12 }}>Nutritional information</Text>

                    <View style={{ color: 'black', flexDirection: 'row', marginBottom: 25 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 12 }}>
                            <Text style={{ color: 'red', fontWeight: 'bold', marginBottom: 5, fontSize: 18 }}>200</Text>
                            <Text style={{ color: 'grey', fontSize: 12, }}>Calories</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 12 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginBottom: 5, fontSize: 18 }}>2,8g</Text>
                            <Text style={{ color: 'grey', fontSize: 12, }}>grases</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 12 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginBottom: 5, fontSize: 18 }}>45,7g</Text>
                            <Text style={{ color: 'grey', fontSize: 12, }}>carbohyd</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 12 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginBottom: 5, fontSize: 18 }}>9,8g</Text>
                            <Text style={{ color: 'grey', fontSize: 12, }}>protein</Text>
                        </View>
                    </View>
                </View>

                {/* Preparation */}
                <View>

                </View>
                
            </ImageBackground>
        </View>
    )
}

export default DetailScreen


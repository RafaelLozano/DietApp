import React from 'react'
import { Text, View, ImageBackground, StatusBar ,Image} from 'react-native'
import styles from './styles';

const DetailScreen = (props) => {
    const data = props.data;
    return (
        <View style={styles.mainContainer}>
            <StatusBar barStyle="light-content" />
            <ImageBackground style={styles.backgroundImage} source={require('../../../assets/images/Header.png')}>
                {/* imagen */}
                
                    <Image style={styles.image} source={{ uri:'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}>
                        
                    </Image>
                

                <View style={{alignItems:'center',width:'80%',marginBottom:10,}}>
                    {/* Title */}
                    <Text style={styles.title}>Title</Text>
                    {/* Description */}
                    <Text numberOfLines={2} style={{color:'grey',textAlign:'center',}}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, ante elementum praesent pharetra cras class cubilia,
                        ultrices hac id bibendum porttitor integer. Convallis phasellus auctor fringilla blandit est congue consequat scelerisque,
                        curabitur metus potenti faucibus orci eu sollicitudin condimentum eros, aptent dis dapibus cras lacinia vitae sagittis.
                        </Text>
                </View>

                {/* Nutritional information */}
                <View style={styles.infoContainer}>
                    <Text style={{fontSize:18,fontWeight:'500',marginVertical:12}}>Nutritional information</Text>

                    <View style={{color:'black',flexDirection:'row',marginBottom:25}}>
                        <View style={{justifyContent:'center',alignItems:'center',marginHorizontal:12}}>
                            <Text style={{color:'red',fontWeight:'bold',marginBottom:5,fontSize:18}}>200</Text>
                            <Text style={{color:'grey',fontSize:12,}}>Calories</Text>
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


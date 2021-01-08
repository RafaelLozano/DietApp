import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';


const Card = (props) => {
    const {info} = props;
    let widthh = useWindowDimensions().width;
    let newW = widthh * 3 / 4;
    return (
        <View style={styles.mainContainer,{width:newW,backgroundColor:'white',marginHorizontal:10,borderRadius:15,padding:15}}>
            {/* tittle  */}
            <Text style={styles.title}>{info.title}</Text>
            <View style={styles.statsContainer}>
                {/* 3 data */}
                <View style={{alignItems:'center',marginRight:20,}}>
                    <Text style={{ color:'grey',fontSize:10}}>You have lost</Text>
                    <Text style={{ color: '#58be75', fontWeight: 'bold', fontSize:18}}>{info.weight}Kg</Text>
                </View>

                <View style={{alignItems:'center',marginRight:20}}>
                    <Text style={{ color: 'grey', fontSize: 10}}>You level up</Text>
                    <Text style={{ color: '#58be75', fontWeight: 'bold', fontSize: 18}}>Level {info.level}</Text>
                </View>

                <View style={styles.percentageIndicator}>
                    <View style={styles.percentageCenter}>
                        <Text styles={{ fontWeight:'bold' }}>{info.kcal}</Text>
                        <Text styles={{ fontWeight: 'bold' }}>Kcal</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'row', marginTop:10,justifyContent:'center'}}>
                
                <Text style={{ color: 'grey', fontSize: 12}}>Never give up, </Text>
                <Text style={{ color: '#58be75', fontSize: 12}}>learn more</Text>
                
            </View>
        </View>
    )
}

export default Card


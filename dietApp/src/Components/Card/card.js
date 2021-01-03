import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
const Card = () => {
    return (
        <View style={styles.mainContainer}>
            {/* tittle  */}
            <Text style={styles.title}>Results of the week</Text>
            <View style={styles.statsContainer}>
                {/* 3 data */}
                <View style={{alignItems:'center',marginRight:20,}}>
                    <Text style={{ color:'grey',fontSize:10}}>You have lost</Text>
                    <Text style={{ color: '#58be75', fontWeight: 'bold', fontSize:18}}>-4Kg</Text>
                </View>

                <View style={{alignItems:'center',marginRight:20}}>
                    <Text style={{ color: 'grey', fontSize: 10}}>You level up</Text>
                    <Text style={{ color: '#58be75', fontWeight: 'bold', fontSize: 18}}>Level 8</Text>
                </View>

                <View style={styles.percentageIndicator}>
                    <View style={styles.percentageCenter}>
                        <Text styles={{ fontWeight:'bold' }}>520</Text>
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


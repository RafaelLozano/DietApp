import { StyleSheet, Text, View } from 'react-native'
const styles = StyleSheet.create({
    statsContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    mainContainer:{
        backgroundColor:'white',
        width:300,
        borderRadius:10,
        padding:15,
        marginHorizontal:10,
        
    },
    title:{
        fontWeight:'bold',
        marginBottom:10,
        fontSize:18
    },
    percentageIndicator:{
        width:70,
        height:70,
        backgroundColor:'#58be75',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:35,
    },
    percentageCenter: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
    }
})
export default styles
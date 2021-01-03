import { StyleSheet } from 'react-native'
//color = #58be75
const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        flex: 1,
        
    },
    background: {
        height: '100%',
        width: '100%',
        alignItems:'center',
        alignContent:'space-between'
    },
    image:{
        height:'100%',
        width:'100%',
        resizeMode:'cover',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
    },
    
    title:{
        fontSize:25,
        textAlign:'center',
        fontWeight:'bold',
        color:'#201f33',
        marginBottom:10,
        paddingVertical:10
        
    },
    
    subTitle: {
        color: 'grey',
        textAlign: 'center',
        marginBottom:12,
    },
    
    
    
})

export default styles
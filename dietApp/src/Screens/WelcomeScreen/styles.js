import { StyleSheet } from 'react-native'
//color = #58be75
const styles = StyleSheet.create({
    image:{
        height:'75%',
        width:'100%',
        zIndex:-1,
        position:'absolute',
    },
    mainContainer:{
        
    },
    textContainer:{
        marginHorizontal:40,
        color:'white',
    },
    title:{
        fontSize:25,
        textAlign:'center',
        marginVertical:20,
        fontWeight:'bold',
        color:'#201f33',
    },
    subTitle:{
        color:'grey',
        textAlign:'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: 50,
    },
    background:{
        height: '75%',
        width: '100%',
        zIndex:10,
        top:'20%'
        
    }
    
    
})

export default styles
import { StyleSheet, Text, View } from 'react-native'
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#e5e5e5'
    },
    backgroundImage:{
        height:'100%',
        width:'100%',
        position:'absolute',
        alignItems:'center'
    },
    image:{ 
        height: '30%', 
        width: '100%', 
        marginTop: 70, 
        zIndex: -1 ,
        borderBottomRightRadius:50,
        borderBottomLeftRadius:50,
        borderColor:'transparent'
    },
    title:{
        fontSize:35,
        fontWeight:'bold',
        marginTop:20,
        marginBottom:10,
    },
    infoContainer:{
        backgroundColor:'white',
        width:'90%',
        alignItems:'center',
        borderRadius:10,
        marginVertical:15,
    },
    
    
})
export default styles
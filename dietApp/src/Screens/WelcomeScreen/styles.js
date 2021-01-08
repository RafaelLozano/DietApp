import { StyleSheet } from 'react-native'
//color = #58be75
const styles = StyleSheet.create({
    
    mainContainer: {
        height: '100%',
        width: '100%',
        alignItems:'center',
        flex:1,
        justifyContent:'flex-end',
        
        
    },
    title:{
        fontSize:25,
        textAlign:'center',
        fontWeight:'bold',
        color:'#201f33',
        marginBottom:20,
    },
    
    subTitle: {
        color: 'grey',
        textAlign: 'center',
        marginBottom:12,
    },
    bottomContainer:{
        height:'30%',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'white',
        
    },
    carrouselContainer:{
        height:'70%',
        width:'100%',
        flex:1,
    },
    backgroundImage:{
        height:'100%',
        width:'100%',
        justifyContent:'flex-end'
    },
    image:{
        height:200,
        width:'100%',
    }
   
})

export default styles
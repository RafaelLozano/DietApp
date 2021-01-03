import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        resizeMode:'cover'
    },
    title:{
        fontSize:40,
        fontWeight:'500',
    },
    subTitle:{
      fontSize:15,
      color:'grey',  
      marginBottom:20,
      bottom:10,
    },
    emailInput: {
        fontSize: 20,
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        marginBottom:40,
        paddingHorizontal: 30,
        color:'black',
        borderRadius:5,
    },   
    passInput:{
        fontSize: 20,
        backgroundColor:'white',
        width:'100%',
        height: 40,
        paddingHorizontal:30,
        color:'black',
        marginBottom: 40,
        borderRadius:5,

    },
    inputField:{
        marginTop:80,
        justifyContent:'center',
        alignItems:'center',
        width:'75%',
        
        
    },
    button: {
        backgroundColor: '#201f33',
        width: '75%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical:20,
        bottom:20,
        
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:20,
    },
    iconContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        
    },
    space:{
        width:'20%'
    },
    background: {
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        position:'absolute',
        

    }
})

export default styles
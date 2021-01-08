import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    mainContainer:{
        height:'100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    image:{
        height: '80%',
        borderRadius: 25, 
        aspectRatio: 2 / 3, 
        marginBottom: 10,
        marginHorizontal: 10,
    }
})
export default styles
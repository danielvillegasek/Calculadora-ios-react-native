import {  StyleSheet } from 'react-native';
    
export const styles = StyleSheet.create({
    fondo : {
        flex:1,
        backgroundColor:'black',        
    },
    calculadoraContainer : {
        paddingHorizontal: 20,
        flex:1,
        flexDirection: 'column-reverse'
    },
    resultado: {
        color:'white',
        fontSize: 60,
        textAlign: 'right',
        paddingBottom: 20,

    },
    resultadoAnterior: {
        color:'white',
        fontSize: 25,
        opacity: 0.5,
        textAlign: 'right',
        paddingVertical: 0,
    },
    fila:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },   

});
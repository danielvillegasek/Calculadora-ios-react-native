import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    texto: "";
    color?: string;
    col_2?: boolean;
    accion: ( numeroTexto : string) => void ;
}

export const Boton = ({ texto, color = "#2d2d2d", col_2 = false, accion }: Props) => {


    return (
        //<View style={[{backgroundColor:color}, styles.boton]} >
        <TouchableOpacity onPress={() => accion(texto)} >
            <View style={{ ...styles.boton, backgroundColor: color, width: col_2 ? 160 : 70 }} >
                <Text style={styles.botonTexto}>
                    {texto}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boton: {
        height: 70,
        width: 70,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 28,
        color: 'white',
        fontWeight: '300'
    }
});
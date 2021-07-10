import React from 'react'
import { View, Text } from 'react-native'
import { Boton } from '../components/Boton'
import { useCalculadora } from '../hooks/useCalculadora'
import { styles } from '../theme/appTheme'


const CalculadoraScreen = () => {

   const {
      numeroAnterior,
      numero,
      ultimaOperacion,
      limpiar,
      armarNumero,
      del,
      positivoNegativo,
      btnDividir,
      btnMultiplicar,
      btnRestar,
      btnSumar,
      calcular,
   } = useCalculadora()


   return (
      <View style={styles.calculadoraContainer}>
         <View>
            <View style={styles.fila}>
               <Boton texto="C" color="#9B9B9B" accion={limpiar} />
               <Boton texto="+/-" color="#9B9B9B" accion={positivoNegativo} />
               <Boton texto="del" color="#9B9B9B" accion={del} />
               <Boton texto="/" color="#FF9427" accion={btnDividir} />
            </View>

            <View style={styles.fila}>
               <Boton texto="7" accion={armarNumero} />
               <Boton texto="8" accion={armarNumero} />
               <Boton texto="9" accion={armarNumero} />
               <Boton texto="X" color="#FF9427" accion={btnMultiplicar} />
            </View>

            <View style={styles.fila}>
               <Boton texto="4" accion={armarNumero} />
               <Boton texto="5" accion={armarNumero} />
               <Boton texto="6" accion={armarNumero} />
               <Boton texto="-" color="#FF9427" accion={btnRestar} />
            </View>

            <View style={styles.fila}>
               <Boton texto="1" accion={armarNumero} />
               <Boton texto="2" accion={armarNumero} />
               <Boton texto="3" accion={armarNumero} />
               <Boton texto="+" color="#FF9427" accion={btnSumar} />
            </View>

            <View style={styles.fila}>
               <Boton texto="0" col_2 accion={armarNumero} />
               <Boton texto="." accion={armarNumero} />
               <Boton texto="=" color="#FF9427" accion={calcular} />
            </View>
         </View>

         <View >
            {(numeroAnterior !== '0') && (<Text style={styles.resultadoAnterior} numberOfLines={1} adjustsFontSizeToFit>
               {numeroAnterior}
            </Text>)}
            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
               {numero}
            </Text>
         </View>
      </View>
   )
}

export default CalculadoraScreen
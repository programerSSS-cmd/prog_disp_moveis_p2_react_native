import { StyleSheet, Text,TextInput,  View, Button } from 'react-native';
import React from 'react';


const pesquisaIndex = ({ navigation }) => {
    return (

        <View style={styles.container}>


            <View style={styles.pesquisa}>
                {/* usuário irá ter um input de qual local ele quer pesquisar */}
                <TextInput placeholder="Digite o local a ser Pesquisado" style={{
                    borderBottomWidth: 1, padding: 2, opacity: 0.5, width: 230
                }} />
            </View>

            <View style={styles.retorno}>
                {/*Aqui será exibido o retorno da pesquisa*/}
            </View>

            <View style={styles.retorno}>
                {/*Aqui será exibida a lista de lembretes*/}
            </View>
            <Button

                title="Pesquisar"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
    )
}
export default pesquisaIndex;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    pesquisa: {
  
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  
      borderWidth: 1,
      borderRadius: 20,
  
      width: 500,
      height: 50,
      margin: 10
    },
    retorno: {
  
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  
      borderWidth: 1,
      borderRadius: 20,
  
      width: 500,
      height: 200,
      margin: 10
  
  
    },
  
  
  });
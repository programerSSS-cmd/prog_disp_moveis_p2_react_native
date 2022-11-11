import { StyleSheet, Button, View, Text, Alert, TextInput } from 'react-native';


export default function App() {
  return (

    <View style={styles.container}>
      {/* <Button
        title="Pesquisar"
        onPress={() => Alert.alert('Simple Button pressed')}
      /> */}

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
  );
}




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
    height: 80,
    margin: 10
  },
  retorno: {

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderRadius: 20,

    width: 500,
    height: 220,
    margin: 10


  },
  

});

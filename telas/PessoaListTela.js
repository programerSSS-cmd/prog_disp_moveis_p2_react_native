import { View } from 'react-native'
import React from 'react'
import ListaPessoaComponent from '../components/PessoaListComponent'


const PessoaListTela = ({ navigation }) => {
    return (
        <View style={{ padding: 40 }}>
            <ListaPessoaComponent navigation={navigation} />
        </View>
    )
}
export default PessoaListTela
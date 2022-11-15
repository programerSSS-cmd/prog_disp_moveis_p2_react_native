import { StyleSheet, Text, View } from 'react-native';
import PessoaAddComponent from '../components/PessoaAddComponent';
import React from 'react';


const PessoaAddTela = ({navigation}) => {
    return (
        <View>
            <PessoaAddComponent navigation={navigation}/>
        </View>
    )
}
export default PessoaAddTela;
//const styles = StyleSheet.create({});
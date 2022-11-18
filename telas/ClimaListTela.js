import { View } from 'react-native'
import React from 'react'
import ClimaListComponent from '../components/ClimaListComponents'


const ClimaListTela = ({ navigation }) => {
    return (
        <View style={{ padding: 40 }}>
            <ClimaListComponent navigation={navigation} />
        </View>
    )
}
export default ClimaListTela
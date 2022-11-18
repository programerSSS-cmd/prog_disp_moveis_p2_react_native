import React from 'react'
import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { FAB } from '@rneui/themed'
import { LinearProgress, ListItem } from '@rneui/themed'
import * as climaService from '../service/ClimaService'


const ClimaListComponent = ({ navigation }) => {
    const updateList = async () => {
        const compareFn = (a, b) => {
            return a.nome > b.nome ? 1 : a.nome < b.nome ? -1 : 0
        }
        setPessoas((await climaService.obterLista()).data.sort(compareFn))
    }
    const onRefresh = async () => {
        setRefreshing(true)
        await updateList()
        setRefreshing(false)
    }
    const [pessoas, setPessoas] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    useEffect(() => {
        const go = async () => {
            await updateList()
        }
        go()
    }, [])
    return (
        
        <View>
            
            {
                pessoas.length > 0 ?
                    <>
                    
                        <FlatList
                            onRefresh={onRefresh}
                            refreshing={refreshing}
                            renderItem={(pessoa) => (
                                <ListItem
                                    bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Title>{pessoa.name}</ListItem.Title>
                                        <ListItem.Subtitle>{pessoa.weather.main}</ListItem.Subtitle>
                                    </ListItem.Content>
                                    {/* pronúncia: chévron. tradução: divisa */}
                                    <ListItem.Chevron />
                                </ListItem>
                            )}
                            data={pessoas}
                        />

                    </>
                    :
                    <LinearProgress />
            }
            

            
        </View>
    )
}
export default ClimaListComponent



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
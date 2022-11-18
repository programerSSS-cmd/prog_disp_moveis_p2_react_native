import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PesquisaIndex from './telas/PesquisaIndex';
import PessoaListTela from './telas/PessoaListTela';
import ClimaListTela from "./telas/ClimaListTela";



const Tab = createBottomTabNavigator();

export default function App() {


    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Pesquisa" component={PesquisaIndex} />
                <Tab.Screen name="Historico" component={ClimaListTela} />
            </Tab.Navigator>
        </NavigationContainer>
    );

}




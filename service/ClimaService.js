import axios from 'axios'
//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=fe1d134bae594b6a9e1bdbabb5f242c2
const endpointPessoas = 'lat=44.34&lon=10.99&appid=fe1d134bae594b6a9e1bdbabb5f242c2'
const base = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather?'
})
const obterLista = () => {
    return base.get(endpointPessoas)
}
const cadastrarPessoa = (pessoa) => {
    return base.post(
        endpointPessoas,
        pessoa,
        { headers: { 'Content-Type': 'application/json' } }
    )
}
export { obterLista, cadastrarPessoa }
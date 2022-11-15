import axios from 'axios'


const endpointPessoas = '/pessoa/'
const base = axios.create({
    baseURL: 'https://g10c8b6cd02b6ff-ooap2xcgl6ldo9nh.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin'
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
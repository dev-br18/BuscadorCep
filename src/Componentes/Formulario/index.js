import { useState } from 'react';
import api from '../../services/api';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto/Index';
import Resultado from '../Resultado';
import './Formulario.css'


const Formulario = () => {
    const [cep,setCep] = useState([])
    const [fim,setFim] = useState({})
    async function aoSalvar(evento){
        evento.preventDefault()
        console.log(cep)

        try{
            const resposta = await api.get(`${cep}/json`)
            setFim(resposta.data)
            setCep('')
        }catch{
            alert('Erro ao Buscar Endereço')
        }
    }
    return(
        <section className='formulario-container '>
            <form className='formulario' onSubmit={aoSalvar}>
                <h2>Buscador De CEP</h2>
               <CampoTexto 
               title={'Cep'} 
               txt={'Digite Seu Cep...'}
               valor={cep}
               aoAlterado={valor => setCep(valor)}
               />
               <Botao children={'Buscar Cep'}/>
               {Object.keys(fim).length > 0 && (
                    <Resultado bairro={fim.bairro} lagradouro={fim.logradouro} estado={fim.uf} cep={fim.cep} complemento={fim.complemento}/>
               )}
               
            </form>    

        </section>
     
    )
}


export default Formulario;
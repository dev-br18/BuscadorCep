import './Resultado.css'


const Resultado = ({cep,lagradouro,bairro,estado,complemento}) => {
    return(
        <section className='formulario-container'>
           <form className='formulario'>
                <h2>Resultado Da Busca</h2>
                <h2>Cep: {cep}</h2>
                <span>Bairro: {bairro}</span>                
                <span>Lagradouro: {lagradouro}</span>                             
                <span>Estado: {estado}</span>                
                <span>Complemento: {complemento}</span>                
            </form> 
        </section>
    )
}

export default Resultado
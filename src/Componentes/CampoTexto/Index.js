import './CampoTexto.css'


const CampoTexto = ({title,txt,valor,aoAlterado}) => {
    return(
        <div className='campo-texto'>
            <label>{title}</label>
            <input value={valor} placeholder={txt} onChange={(e) => aoAlterado(e.target.value)} required/>
        </div>
    )
}


export default CampoTexto;
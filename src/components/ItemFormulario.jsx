import { useState } from 'react'

const ItemFormulario = ({ addItem }) => {
    const [valor, setValor] = useState("");
    const [categoria, setCategoria] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!valor || !categoria) return;
        addItem(valor, categoria);
        setValor("")
        setCategoria("")
    }
  return (
    <div className='item-formulario'> 
        <h2> Criar Tarefa: </h2>
        <form onSubmit={handleSubmit}> 
            <input type="text" placeholder='Digite o titulo' 
            value={valor}
            onChange={(e) => setValor(e.target.value)}/>
            
            <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>  
                <option value=""> Selecione uma categoria</option>
                <option value="Trabalho"> Trabalho </option>
                <option value="Pessoal"> Pessoal  </option>
                <option value="Estudo"> Estudo </option>
            </select>
            <button type='submit'> Criar Tarefa</button>
        </form>
    </div>
    )
}

export default ItemFormulario

import { useState } from 'react'
import Item from "./components/Item.jsx"
import Buscar from "./components/Buscar.jsx"
import ItemFormulario from "./components/ItemFormulario.jsx"
import Filtro from "./components/Filtro.jsx"
import './styles/Lista.css'
 
function Lista() {
    const [itens, setItens] = useState([ 
        
        ])

        const [buscar, setBuscar] = useState("")

        const [filtro, setFiltro] = useState("Todas")
        const [ordenar, setOrdenar] = useState("Asc")

        //  adicionando os itens
    const addItem = (texto, categoria) => {
        const newItens = [...itens, {
            id: Math.floor(Math.random() * 10000),
            texto,
            categoria,
            Completa: false,
        },
    ];
    setItens(newItens)
    };
    // removendo os itens
    const removerItem = (id) => {
        const newItens = [...itens];
        const filtrarItens = newItens.filter((item) =>
        item.id !== id ? item : null
        )
        setItens(filtrarItens)
    } 
    const itemCompletado = (id) => {
  const newItens = itens.map((item) =>
    item.id === id ? { ...item, Completa: !item.Completa } : item
  );
  setItens(newItens);
};

    return (
       <div className='Lista'>
            <h1>Lista de Tarefas </h1>
            {/* Adicionando o Filtro e a busca */}
            <Buscar buscar={buscar} setBuscar={setBuscar}/>
            <Filtro filtro={filtro} setFiltro={setFiltro} ordenar={ordenar} setOrdenar={setOrdenar}/>
            <div className="Tarefas"> 
            {/* filtrando os itens */}
                {itens
                .filter((item) => filtro === "Todas" 
                ? true 
                : filtro === "Completas" 
                ? item.Completa 
                : !item.Completa)
                // buscando os itens
                .filter((item) => item.texto.toLowerCase().includes(buscar.toLocaleLowerCase()))
                // acrecentando a propriedade de ordem ascendente e descendente
                .sort((a, b) =>
                    ordenar === "Asc" ? a.texto.localeCompare(b.texto) :  b.texto.localeCompare(a.texto))
                .map((item) => (
                    <Item key={item.id} item={item}  
                    removerItem={removerItem}
                    itemCompletado={itemCompletado}
                    />
                ))}
            </div>
            <ItemFormulario addItem={addItem}/>
       </div>
    )
}
export default Lista
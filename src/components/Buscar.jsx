const Buscar = ({buscar, setBuscar}) => {
  return (
    <div className="buscar">
        <h2> Pesquisar:</h2>
        <input type="text" 
        value={buscar}
        onChange={(e) => setBuscar(e.target.value)}
        placeholder="Digite para procurar sua tarefa"/>
    </div>
  )
}

export default Buscar

const Filtro = ({filtro, setFiltro, ordenar, setOrdenar}) => {
  return (
    <div className="Filtro">
      <h2> Filtrar</h2>
      <div className="Opcoes-Filtro">
        <div>
            <p>Status</p>
            <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                <option value="Todas">Todas</option>                
                <option value="Completas">Completas</option>
                <option value="Incompleta">Incompletas</option>
            </select>
        </div>
        <div>
            <p>Ordem Alfabetica:</p>
            <button style={{backgroundColor: ordenar === "Asc" ? "black": ""}}onClick={() =>setOrdenar("Asc")}> Asc(de A a Z)</button>
            <button style={{backgroundColor: ordenar === "Desc" ? "black": ""}}onClick={() =>setOrdenar("Desc")}> Desc(de Z a A)</button>
        </div>
      </div>
    </div>
  )
}

export default Filtro

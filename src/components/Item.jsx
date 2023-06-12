import React from 'react'

const Item = ({ item, removerItem, itemCompletado }) => {
  const categoriaStyle = {
    backgroundColor: item.categoria === 'Trabalho' ? 'red' : ''
  };
  if (item.categoria === 'Pessoal') {
    categoriaStyle.backgroundColor = 'blue';
  }
  if (item.categoria === 'Estudo') {
    categoriaStyle.backgroundColor = 'green';
  }
  return (
    <div className='item' style={{backgroundColor: item.categoria}}>
        <div className="contenção">
            <p style={{ textDecoration: item.Completa ? "line-through" : ""}}>{item.texto}</p>
            <p style={categoriaStyle}className="categoria"> {item.categoria}</p>
        </div>
        <div> 
            <button  style={{borderStyle: item.Completa ? "double" : "", borderColor: item.Completa ? "black" : "" }}
            className="completa"onClick={() => itemCompletado(item.id)}>✔</button>
            <button className="remover" onClick={() => removerItem(item.id)}>x</button>
        </div>
    </div>
    
  )
}

export default Item

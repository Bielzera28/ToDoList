import React from 'react'

const filter = () => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select>
             <option value="All">Todas</option>
             <option value="Completed">Completas</option>
             <option value="Incomplete">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem Alfábética:</p>
          <button>Asc</button>
          <button>Desc</button>
        </div>

      </div>
    
    </div>
  )
}

export default filter
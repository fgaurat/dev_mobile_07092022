import React, { useState } from 'react'

function Counter() {

    const [cpt, setCpt] = useState(0)

    const inc = () => setCpt(cpt+1)
    const dec = () => setCpt(cpt-1)
    const reset = () => setCpt(0)
    

  return (
    <div>
        <h2>cpt : {cpt}</h2>
        <button className='btn btn-primary' onClick={inc}>inc</button>
        <button className='btn btn-danger' onClick={reset}>reset</button>
        <button className='btn btn-primary' onClick={dec}>dec</button>
    </div>
  )
}

export default Counter
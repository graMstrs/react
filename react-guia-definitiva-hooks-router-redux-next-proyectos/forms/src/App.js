import { useState } from "react"

const App = () => {
    const [value, setValue] = useState({ normal: '', texto: ''})
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    console.log(value)
    return (
        <div>
            {value.length < 5 ? <span> longitud minima de 5 </span> : null }
            <input 
                type="text" 
                name="normal" 
                value={value} 
                onChange={handleChange}/>
            <textarea name="texto" onChange={handleChange()} value={''} />
        </div>
    )
}

export default App
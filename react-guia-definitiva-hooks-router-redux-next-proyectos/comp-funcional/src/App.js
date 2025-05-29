import { useRef } from 'react'

const App = () => {
    const ref = useRef()
    const inputRef = useRef()
    const click = () => {
        console.log(ref.current.clientHeigh)
        ref.current.innerHTML = 'Chanchito feliz'
    }
    const focus = () => {
        inputRef.current.focus()
    }
        
    
    return (
        <div>
            <input ref={ inputRef }/>
            <button onClick={focus}>Focus pocus</button>
            <div onClick={click} ref={ref}>Lalala</div>
        </div>
    )
    
}

export default App
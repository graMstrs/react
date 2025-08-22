import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const ChanchitoDinamico = () => {
    const [loaded, setLoaded] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if(router.isReady){
            setLoaded(true)
        }
    }, [router.isReady])

    if (!loaded){
        return null
    }
    
    console.log({router}, router.query.id)
    return (
        <div>
            <p>Chanchito dinamico</p>
        </div>
    )
}

export default ChanchitoDinamico
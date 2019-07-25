import React, {useState, useEffect} from 'react'
import Sections from './Sections'
import Nav from './Nav'

let size = window.innerWidth < 1024

const App = () => {
    const [isMobile, setMobile] = useState(size)

    useEffect(() => {
        let handleResize = () => {
            setMobile(window.innerWidth < 1024)
        }
        console.log('rendered')
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [setMobile])
    return(
        isMobile ? (<h1>Hello</h1>) :
        (<div className='container'>
            <Nav />
            <Sections />
        </div>)
    )
}

export default App
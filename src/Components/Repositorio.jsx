

import  { useState, useEffect } from 'react'
import Title from './Title'



const Repositorio = () =>{

    const [ repositories, setReposiories ] = useState([])
    const [ filtroRepositorio, setFiltroRepositorio ] = useState([])
    const [ busca, setBusca ] = useState('')



    useEffect( ()=>{
        async function getData(){
            const response = await fetch('https://api.github.com/users/jessicarguerra/repos')
            const data = await response.json()

            setReposiories(data)
        }
        getData()
    }, [])


    useEffect(()=>{
        setFiltroRepositorio(
            repositories.filter(repo =>{
                return repo.name.includes(busca)
            }
            )
        )

    },[busca, repositories])

    return(
        <div>
            
           <Title/> 
            
            <input 
                type="text" 
                placeholder="Digite um repo" 
                onChange={e=>{setBusca(e.target.value)}}
            />
        
            <ul>{filtroRepositorio.map(repo=>{
                return <li key={repo.id}>{repo.name}></li>
            })} </ul>
        
        </div>
    )
}

export default Repositorio
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon"

export const PokemonApp = () => {

    const dispatch = useDispatch();
    const { page, pokemons = [], isLoading } = useSelector(state => state.pokemons)


    // Se llama una vez al iniciar la aplicación
    useEffect(() => {
        dispatch(getPokemons());
    }, [])
    

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading { isLoading ? 'True' : 'False' }</span>
            <ul>
                {
                    pokemons.map(({ name }) => (
                        <li key={name}>{ name }</li>
                    ))
                }
            </ul>
            <button disabled={ isLoading ? true : false } onClick={ () => dispatch(getPokemons(page)) }>
                Next
            </button>
        </>
    )
}

import { useReducer } from "react"
import { FromLanguage, Language, type Action, type State } from "../types.d"
import { AUTO_LANGUAGE } from "../constants"

// Paso 1: crear un estado inicial
// en el traductor de google, nosotros emos que tenemos 5 elementos fundamentales: el lenguaje origen,
// el lenguaje destino, el texto que ingresa el usuario, el texto traducido, y el estado de traduciendo.....
const initialstate: State = {
    fromLanguage: "auto",
    toLanguage: "en",
    fromText: "",
    result: "",
    loading: false
}

// Paso 2: crear el reducer
// ahora hay que pensar en las posibles acciones del usuario, para ello vamos a usar un reducer
// Un reducer recibe el estado y la accion, lo que hace el reducer es que cada evz que yo llamo a una accion,
// a dicha accion la despacho (a traves de dispatch), y ese despacho llegara al reducer, lo que va a hacer el reducer
// con ese despacho es generar un nueo estado. 
// En otras palabraas, el dispatch vendria a ser una orden de ejecucion, "quiero que hagas tal cosa", y esa tal cosa es la accion con informacion
// EJEMPLO: setLanguage seria un dispatch
const reducer = (state: State, action: Action) => {
    const { type } = action

    // intercambiar lenguajes
    if (type === "INTERCHANGE_LANGUAGES") {
        if (state.fromLanguage === AUTO_LANGUAGE) return state
        return {
            ...state,
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage
        }
    }

    // setear el lenguaje origen
    if (type === "SET_FROM_LANGUAGE") {
        return {
            ...state,
            fromLanguage: action.payload
        }
    }

    // setear el lenguaje destino
    if (type === "SET_TO_LANGUAGE") {
        return {
            ...state,
            toLanguage: action.payload
        }
    }

    // setear texto origen
    if (type === "SET_FROM_TEXT") {
        return {
            ...state,
            loading: true,
            fromText: action.payload,
            result: ""
        }
    }

    // setear resultado
    if (type === "SET_RESULT") {
        return {
            ...state,
            loading: false,
            result: action.payload
        }
    }

    return state
}


export function useStore() {
    // Paso 3: usar el hook useReducer
    const [{
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading
    }, dispatch] = useReducer(reducer, initialstate) // nota, nunca debo haccer que mis compoenntes tengan como prop el 
    // dispatch, porque eso lo que hace es que ate todos los componentes a un contrato en concreto, lo cual baja escalabilidad

    // aca pongo todos los cambios de estado posibles
    const interchangeLanguages = () => {
        dispatch({ type: "INTERCHANGE_LANGUAGES" })
    }

    const setFromLanguage = (text: FromLanguage) => {
        dispatch({ type: "SET_FROM_LANGUAGE", payload: text })
    }

    const setToLanguage = (text: Language) => {
        dispatch({ type: "SET_TO_LANGUAGE", payload: text })
    }

    const setFromText = (text: string) => {
        dispatch({ type: "SET_FROM_TEXT", payload: text })
    }

    const setResult = (text: string) => {
        dispatch({ type: "SET_RESULT", payload: text })
    }

    return {
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading,
        interchangeLanguages,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setResult
    }
}
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "./constants"

// recordemos que las interfaces en react + typescript sirven paraa definir los contratos de los objetos
export interface State {
    fromLanguage: FromLanguage,
    toLanguage: Language,
    fromText: string,
    result: string,
    loading: boolean
}

export type Action = 
    | {type: "SET_FROM_LANGUAGE", payload: FromLanguage} // lo que digo con los | es que puede ser cualquiera de esos tipos
    | {type: "INTERCHANGE_LANGUAGES"}
    | {type: "SET_TO_LANGUAGE", payload: Language}
    | {type: "SET_FROM_TEXT", payload: string}
    | {type: "SET_RESULT", payload: string}

export type Language = keyof typeof SUPPORTED_LANGUAGES // Le digo que el tipo Language es una de las key, que esten en el objeto SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage
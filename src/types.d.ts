// recordemos que las interfaces en react + typescript sirven paraa definir los contratos de los objetos
export interface State {
    fromLanguage: string,
    toLanguage: string,
    fromText: string,
    result: string,
    loading: boolean
}

export type Action = 
    | {type: "SET_FROM_LANGUAGE", payload: string} // lo que digo con los | es que puede ser cualquiera de esos tipos
    | {type: "INTERCHANGE_LANGUAGES"}
    | {type: "SET_TO_LANGUAGE", payload: string}
    | {type: "SET_FROM_TEXT", payload: string}
    | {type: "SET_RESULT", payload: string}
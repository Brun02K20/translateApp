import {test, expect } from "vitest"
import {render} from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import App from "../App"


// Elaboracion de test con react
// paso 1: describir algo
test('My app works as expected', async () => {
    const user = userEvent.setup() // paso 1: crear el usuario
    const app = render(<App />) // paso 2: simular renderizado de la app
    const textAreaFrom = app.getByPlaceholderText('Introducir texto') // paso 3: recuperar el textarea donde el usuario escribe el texto
    await user.type(textAreaFrom, 'Hola mundo!') // paso 4: el usuario escribe Hola mundo!
    const result = await app.findByDisplayValue(/"Hello world!"/i, {}, {timeout: 10000}) // paso 5: el resultado es que algun elemento de la pantalla diga Hello world!
    expect(result).toBeTruthy()
})
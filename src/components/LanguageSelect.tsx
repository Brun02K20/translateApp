import {Form} from 'react-bootstrap';

import { type FC } from 'react';
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants';
import { SectionType, type FromLanguage, type Language } from '../types.d';

// tipar props en react + ts
// interface Props {
//     onChange: (language: Language) => void // nosotros que amos a cambiar? el lenguaje, por eso es tipo Language el parametro del onChange
// }

// CONTROLAR LAS PROPS QUE PASO, EN FUNCION DEL VALOR DE UNA PROP EN CONCRETO
type Props = 
    | {type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void}
    | {type: SectionType.To, value: Language, onChange: (language: Language) => void}

export const LanguageSelect: FC<Props>= ({onChange, type, value}) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language) // le decimos que lo trate como uno de los lenguajes
    }

    return (
        <Form.Select aria-label="Selecciona el idioma" onChange={handleChange} value={value}>
            {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}

            {/* aca lo que hago es que del objeto SUPPORTED_LANGUAGES, lo paso a un array de objetos,
            donde key, vendrian a ser las claves del objeto, y los literales el valor de esas llaves */}
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={type === SectionType.From && key === "en-US" ? "en" : key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    )
}
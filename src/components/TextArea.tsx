import { Form } from "react-bootstrap"
import { SectionType } from "../types.d"
import { FC } from "react"

interface Props {
    type: SectionType,
    value: string,
    loading?: boolean,
    onChange: (language: string) => void
}

const commonStyles = {
    border: 0,
    height: "200px",
    // resize: "none"
}

const getPlaceHolder = ({type, loading} : {type: SectionType, loading?: boolean}) => {
    if (type === SectionType.From) return "Introducir texto"
    if (loading === true) return "Cargando..."
    return "Traducción"
}

export const TextArea: FC<Props> = ({type, value, loading, onChange}) => {
    const styles = type === SectionType.From ? commonStyles : {...commonStyles, backgroundColor: "#f5f5f5"}

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value)
    }

    return (
        <Form.Control 
            autoFocus={type === SectionType.From}
            as="textarea"
            placeholder={getPlaceHolder({type, loading})}
            style={styles}
            value={value}
            onChange={handleChange}
            disabled={type === SectionType.To}
        />
    )
}
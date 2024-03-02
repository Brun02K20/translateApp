import { Form } from "react-bootstrap"
import { SectionType } from "../types.d"
import { FC } from "react"

interface Props {
    type: SectionType,
    placeholder: "Traducción" | "Ingresar texto"
    value: string,
    loading?: boolean,
    onChange: (language: string) => void
}

const commonStyles = {
    border: 0,
    height: "200px"
}

export const TextArea: FC<Props> = ({type, placeholder, value, loading, onChange}) => {
    const styles = type === SectionType.From ? commonStyles : {...commonStyles, backgroundColor: "#f5f5f5"}
    return (
        <Form.Control 
            autoFocus={type === SectionType.From}
            as="textarea"
            placeholder={placeholder}
            style={styles}
            // value={}
        />
    )
}
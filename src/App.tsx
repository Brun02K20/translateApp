import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';
import './App.css'
import { useStore } from './hooks/useStore';
import { AUTO_LANGUAGE } from './constants';
import { ArrowsIcon } from './components/Icons';
import { LanguageSelect } from './components/LanguageSelect';
import { SectionType } from './types.d';
import { TextArea } from './components/TextArea';

function App() {
  const {
    fromLanguage, 
    toLanguage, 
    fromText,
    result, 
    interchangeLanguages, 
    setFromLanguage, 
    setToLanguage,
    setFromText,
    setResult
  } = useStore()
  return (
      <Container fluid>
        <h2>Google translate</h2>
        <Row>
          <Col>
            <Stack gap={2}>
              <LanguageSelect 
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
              />
              <TextArea 
                type={SectionType.From}
                placeholder='Ingresar texto'
                value={fromText}
                onChange={setFromText}
              />
            </Stack>
          </Col>
          <Col xs="auto">
            <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
              <ArrowsIcon />
            </Button>
          </Col>
          <Col>
            <Stack gap={2}>
              <LanguageSelect 
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
              />
              <TextArea 
                type={SectionType.To}
                placeholder='Traducción'
                value={result}
                onChange={setResult}
              />
            </Stack>
          </Col>
        </Row>
      </Container>
  )
}

export default App

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap';
import './App.css'
import { useStore } from './hooks/useStore';
import { AUTO_LANGUAGE } from './constants';
import { ArrowsIcon } from './components/Icons';
import { LanguageSelect } from './components/LanguageSelect';
import { SectionType } from './types.d';

function App() {
  const {fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage} = useStore()
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
              <Form.Control 
                as="textarea"
                placeholder='Ingresar texto'
                autoFocus
                style={{height: "150px"}}
                // value={}
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
              <Form.Control 
                as="textarea"
                placeholder='Traducción'
                style={{height: "150px"}}
                // value={}
              />
            </Stack>
          </Col>
        </Row>
      </Container>
  )
}

export default App

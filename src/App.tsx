import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';
import './App.css'
import { useStore } from './hooks/useStore';
import { AUTO_LANGUAGE } from './constants';
import { ArrowsIcon } from './components/Icons';
import { LanguageSelect } from './components/LanguageSelect';
import { SectionType } from './types.d';
import { TextArea } from './components/TextArea';
import { useEffect } from 'react';

function App() {
  const {
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
  } = useStore()

  useEffect(() => {
    if (fromText === '') return 
    fetch(`http://localhost:3000/api/translate/${fromLanguage}/${toLanguage}/${fromText}`)
      .then(r => {
        console.log(r)
        if (!r.ok) {
          throw new Error('Network response was not ok');
        }
        return r.text();
      })
      .then(text => {
        setResult(text);
      })
      .catch(() => setResult("Error"))

  }, [fromText, fromLanguage, toLanguage])

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
                value={result}
                onChange={setResult}
                loading={loading}
              />
            </Stack>
          </Col>
        </Row>
      </Container>
  )
}

export default App

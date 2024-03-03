import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';
import './App.css'
import { useStore } from './hooks/useStore';
import { AUTO_LANGUAGE } from './constants';
import { ArrowsIcon, ClipboardIcon, SpeakerIcon } from './components/Icons';
import { LanguageSelect } from './components/LanguageSelect';
import { SectionType } from './types.d';
import { TextArea } from './components/TextArea';
import { useEffect } from 'react';
import { useDebounce } from './hooks/useDebounce';

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

  const debouncedFromText = useDebounce(fromText)

  useEffect(() => {
    if (debouncedFromText === '') return 
    fetch(`https://translateappbackend.onrender.com/api/translate/${fromLanguage}/${toLanguage}/${debouncedFromText}`)
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

  }, [debouncedFromText, fromLanguage, toLanguage])

  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => {})
  }

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = toLanguage
    utterance.rate = 0.9
    speechSynthesis.speak(utterance)
  }

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
              <div style={{position: 'relative'}}>
                <TextArea 
                  type={SectionType.To}
                  value={result}
                  onChange={setResult}
                  loading={loading}
                />
                <div style={{position: 'absolute', left: 0, bottom: 0, display: 'flex'}}>
                  <Button 
                    variant='link' 
                    onClick={handleClipboard}
                  >
                    <ClipboardIcon />
                  </Button>
                  <Button 
                    variant='link' 
                    onClick={handleSpeak}
                  >
                    <SpeakerIcon />
                  </Button>
                </div>
                
              </div>
              
            </Stack>
          </Col>
        </Row>
      </Container>
  )
}

export default App

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css'
import { useStore } from './hooks/useStore';
import { AUTO_LANGUAGE } from './constants';
import { ArrowsIcon } from './components/Icons';
import { LanguageSelect } from './components/LanguageSelect';

function App() {
  const {fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage} = useStore()
  return (
      <Container fluid>
        <h1>Google translate</h1>
        <Row>
          <Col>
            <LanguageSelect 
              type='from'
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            {fromLanguage}
          </Col>
          <Col>
            <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
              <ArrowsIcon />
            </Button>
          </Col>
          <Col>
            <LanguageSelect 
              type='to'
              value={toLanguage}
              onChange={setToLanguage}
            />
            {toLanguage}
          </Col>
        </Row>
      </Container>
  )
}

export default App

import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
   
   state = {
    showRandomChar: true,
    selectedChar: null
   }

   toggleRandomChar = () => {
    this.setState((state) => {
        return {
            showRandomChar: !state.showRandomChar
        }
    });
   }

   onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
   }
   
   
   render () {
        const char = this.state.showRandomChar ? <RandomChar/> : null;
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <button 
                            className='toggle-btn'
                            onClick={this.toggleRandomChar}>
                            Toggle Random Char </button>
                            
                            
                        </Col>
                        
                    </Row>
                    
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
   }
   
};


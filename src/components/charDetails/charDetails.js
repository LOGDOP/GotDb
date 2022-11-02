import React, {Component} from 'react';
import './charDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gotService from '../../services/gotService';

export default class CharDetails extends Component {
    gotService = new gotService();

    state = {
        char: 130
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if(this.props.charId !== prevProps.charId){
            this.updateChar();
        }
    }

    updateChar() {
        const {charId} = this.props;
        if(!charId){
            return;
        }
        this.gotService.getCharacter(charId)
        .then((char) => {
            this.setState({char})
        })
    }

    render() {

        if (!this.state.char) {
            return <span className='select-error'>Pleace select a character</span>
        }

        const {name, gender, born, died, culture} = this.state.char;

        return (
            <div className="char-details rounded">
                <h4>{name === "" ? "No Data" : name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender === "" ? "No Data" : gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born === "" ? "No Data" : born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died === "" ? "No Data" : died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture === "" ? "No Data" : culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}
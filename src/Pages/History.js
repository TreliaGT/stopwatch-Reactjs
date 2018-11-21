import React, {Component} from 'react';
import '../App.css';


class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            races: [],
            bestTimes: "",
            CurrentUser: [],
            i: 0,
            deleteItem:[],
        };
     this.Load();
    }
    Load(){
        this.state.CurrentUser = JSON.parse(localStorage.getItem('CurrentUser'));
        this.state.races = JSON.parse(localStorage.getItem((this.state.CurrentUser + 'race')));

        if (this.state.races == null) {
            this.state.races = [];
        }
    }


    deleteItem(id) {
        localStorage.removeItem(this.state.CurrentUser + 'race');
        this.state.races.splice(id, 1);
        localStorage.setItem((this.state.CurrentUser + 'race'), JSON.stringify(this.state.races));
    }

    render() {
        return (
            <div className="container">
                <h2> History </h2>
                <div>
                    <div className="list-group list-group-scroll pre-scrollable ">
                        {this.state.races.map((race, i) =>
                            <li className="list-group-item" key={(i + 1).toString()}><strong>{(i + 1)}</strong> {race}
                                <button className="btn" onClick={() => this.deleteItem(race,i)}>Delete</button>
                            </li>)}
                    </div>
                </div>
            </div>
        );
    }
}


export default History;

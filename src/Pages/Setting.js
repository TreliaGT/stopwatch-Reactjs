import React, {Component} from 'react';
import '../App.css';


class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sounds: "",
            themes: "",
            CurrentUser:[]
        };
        this.state.CurrentUser= JSON.parse(localStorage.getItem('CurrentUser'));
    }


    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value; //like a if statement
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    Check() {
        alert(this.state.themes + " " + this.state.sounds);
    }
    delete(){
      localStorage.removeItem(this.state.CurrentUser + 'race');
    }

    render() {
        return (
            <div>

                <div className="container">
                    <h3> Options </h3>
                    <div className="form-group">
                        <label htmlFor="themes">Themes </label>
                        <select className="form-control"
                                name="themes"
                                id="themes"
                                onChange={this.handleChange.bind(this)}>
                            <option value="Dark">Dark</option>
                            <option value="Light">Light</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="sounds">Sounds </label>
                        <select className="form-control"
                                name="sounds"
                                id="sounds"
                                onChange={this.handleChange.bind(this)}>
                            <option value="Beep">Beep</option>
                            <option value="Horn">Horn</option>
                            <option value="Mute">Mute</option>
                        </select>
                    </div>
                    <button className="rounded-circle btn" onClick={this.Check.bind(this)}>Confirm All</button>
                    <div className="row">
                        <h2 className="dropdown-header font-weight-bold">Delete all History</h2>
                        <button className="rounded-circle btn" onClick={this.delete.bind(this)}> Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}


export default Setting;

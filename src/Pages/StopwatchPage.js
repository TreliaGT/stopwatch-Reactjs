import React, {Component} from 'react';
import '../App.css';

const formatSeconds = (sec) =>
    ('0' + Math.floor(sec / 3600)).slice(-2) + ':' + ('0' + (Math.floor(sec / 60) % 60)).slice(-2) + ':' +
    ('0' + sec % 60).slice(-2);


class StopwatchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: false,
            secondsElapsed: 0,
            laps: [],
            LapSeconds: [],
            lastClearedIncrementer: null,
            key: 'Race',
            time: "",
            FinalTime: [],
            CurrentUser: []
        };
        this.incrementer = null;
        this.state.CurrentUser= JSON.parse(localStorage.getItem('CurrentUser'));
        this.state.FinalTime = JSON.parse(localStorage.getItem((this.state.CurrentUser + 'race')));
        if(this.state.FinalTime == null){
            this.state.FinalTime = [];
        }
    }

    handleStartClick = () => {
        this.setState(state => {
            if (state.status) {
                clearInterval(this.incrementer);
                this.setState({
                    lastClearedIncrementer: this.incrementer
                });
            } else {
                this.incrementer = setInterval(() =>
                        this.setState({
                            secondsElapsed: this.state.secondsElapsed + 1
                        })
                    , 1000);
            }
            return {status: !state.status};
        })
    };


    HandleResetClick() {
        clearInterval(this.incrementer);
        this.setState({
            secondsElapsed: 0,
            laps: [],
            status: false,

        });
    }

    handleLabClick() {
        this.setState({
            laps: this.state.laps.concat([this.state.secondsElapsed])
        });
        this.state.LapSeconds.push(formatSeconds(this.state.secondsElapsed));
    }

    HandleSaveClick() {

        this.state.LapSeconds = [...this.state.LapSeconds];
        this.state.time =formatSeconds(this.state.secondsElapsed);


        this.state.FinalTime = [...this.state.FinalTime];
        this.state.FinalTime.push( this.state.time + " laps: " + this.state.LapSeconds );

        localStorage.setItem((this.state.CurrentUser + 'race'), JSON.stringify(this.state.FinalTime));
        this.state.laps = [];
        clearInterval(this.incrementer);
        this.setState({
            secondsElapsed: 0,
            laps: [],
            status: false,

        });
    }

    render() {
        const {status} = this.state;
        return (
            <div>
                <div className="mt-3 pb-1">
                    <h1 className="App-title, text-center">{formatSeconds(this.state.secondsElapsed)}</h1>
                </div>
                <div className="text-center pb-1">
                    <button className="rounded-circle btn btn-lg"
                            onClick={this.handleStartClick.bind(this)}> {status ? 'Stop' : 'Start'}</button>
                </div>
                <div className="text-center pb-1">
                    <button className="rounded-circle btn btn-lg m-1" onClick={this.HandleSaveClick.bind(this)}> Save
                    </button>
                    <button className="rounded-circle btn btn-lg m-1"
                            onClick={this.HandleResetClick.bind(this)}> Reset
                    </button>
                </div>
                <div className="text-center pb-1">
                    <button className="rounded-circle btn btn-lg" onClick={this.handleLabClick.bind(this)}> Lap</button>
                </div>
                <div className="mt-3 pb-1">
                    <ul className="list-group list-group-scroll pre-scrollable">
                        {this.state.laps.map((lap, i) =>
                            <li className="list-group-item"><strong>{(i + 1)}</strong>/ {formatSeconds(lap)}</li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default StopwatchPage;


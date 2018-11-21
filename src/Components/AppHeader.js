import React, {Component} from 'react';
import '../App.css';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarToggler,
    NavItem
} from 'reactstrap';
import Link from "react-router-dom/es/Link";

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            CurrentUser: [],
        };
        this.state.CurrentUser= JSON.parse(localStorage.getItem('CurrentUser'));
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" inverse toggleable>
                    <NavbarToggler right onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/" className="text-white font-weight-normal">Stopwatch</Link> |&nbsp;
                            </NavItem>
                            <NavItem>
                                <Link to="/Settings" className="text-white font-weight-normal">Settings</Link> |&nbsp;
                            </NavItem>
                            <NavItem>
                                <Link to="/history" className="text-white font-weight-normal">History</Link> |&nbsp;
                            </NavItem>
                            <NavItem>
                                <Link to="/blah" className="text-white font-weight-normal">Error!!!Page</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <h3 className="text-white">{this.state.CurrentUser} </h3>
                </Navbar>
            </div>
        );
    }
}


export default AppHeader;

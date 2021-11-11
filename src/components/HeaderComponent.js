import React, { Component } from 'react';
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Button,
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }



    render() {
        return (
            <React.Fragment>

                <div className="container-fluid sub-header">
                    <div className="row">
                        <Navbar light expand="md">
                            <Nav>
                                <NavItem>
                                    <NavLink className="nav-link" to="/"><span className="fa fa-envelope fa-sm"></span>info@terragroup.com</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/"><span className="fa fa-phone fa-sm"></span>+234567890</NavLink>
                                </NavItem>
                            </Nav>

                            <div className="justify-content-end">
                                <div className="social-icons">
                                    <Nav>
                                        <NavItem >
                                            <NavLink to="/"><span className="fa fa-facebook fa-sm"></span></NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="/"><span className="fa fa-twitter fa-sm"></span></NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="/"><span className="fa fa-instagram fa-sm"></span></NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="/"><span className="fa fa-linkedin fa-sm"></span></NavLink>
                                        </NavItem>

                                    </Nav>
                                </div>
                            </div>
                        </Navbar>
                    </div>
                </div>

                <div class="container-fluid sticky-top">
                    <div className="row">
                        <Navbar light expand="md">
                            <NavbarBrand href="/">
                                <img src='assets/images/terra-clone-logo.png' className="img-fluid" height="100px" width="175px" alt='Terragon' />
                            </NavbarBrand>
                            <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isOpen={this.state.isNavOpen} navbar className="justify-content-end">
                                <Nav navbar>
                                    <NavItem >
                                        <NavLink className="nav-link active" to="/">
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <UncontrolledDropdown
                                        inNavbar
                                        nav
                                    >
                                        <DropdownToggle
                                            caret
                                            nav
                                        >
                                            Solutions
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Consumer Brands
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Facebook Conversion API
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Financial Services
                                                </NavLink>

                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Media Agencies
                                                </NavLink>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown
                                        inNavbar
                                        nav
                                    >
                                        <DropdownToggle
                                            caret
                                            nav
                                        >
                                            Products
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Consumer Brands
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Facebook Conversion API
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Financial Services
                                                </NavLink>

                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Media Agencies
                                                </NavLink>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown
                                        inNavbar
                                        nav
                                    >
                                        <DropdownToggle
                                            caret
                                            nav
                                        >
                                            Capabilities
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Consumer Brands
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Facebook Conversion API
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Financial Services
                                                </NavLink>

                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Media Agencies
                                                </NavLink>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown
                                        inNavbar
                                        nav
                                    >
                                        <DropdownToggle
                                            caret
                                            nav
                                        >
                                            Resources
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Consumer Brands
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Facebook Conversion API
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Financial Services
                                                </NavLink>

                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Media Agencies
                                                </NavLink>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown
                                        inNavbar
                                        nav
                                    >
                                        <DropdownToggle
                                            caret
                                            nav
                                        >
                                            Company
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Consumer Brands
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Facebook Conversion API
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Financial Services
                                                </NavLink>

                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink className="nav-link" to="/home">
                                                    Media Agencies
                                                </NavLink>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <Button className="rounded-pill btn-rounded" color="green">
                                        Get In Touch
                                    </Button>
                                </Nav>
                            </Collapse>

                        </Navbar>
                    </div>
                </div>










            </React.Fragment >
        );
    }
}

export default Header;
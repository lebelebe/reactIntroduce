import React, {Component} from 'react';
import { Route, Routes,  NavLink  } from 'react-router-dom';
import { Navbar,
    NavbarToggler,
    NavbarBrand,Collapse, NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu} from 'reactstrap';
import svgimg from '../img/header/githublogo.svg'



class Header extends Component{

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render(){
        return(
            <header id='hd'>
                <div className='container-fluid'>
                <Navbar   expand='lg' light >
                    {/* <!--네비게이션의 navbar-expand-lg 클래스는 버튼과 네비의 반응형 관리 부모클래스 -> */}
                
                    <NavbarBrand className='navbar-brand'>
                        <a href='/'>
                            <img src={svgimg} alt='피곤한 svg는 모듈로 로드한다. 아래처럼은 안들어온다.'></img>
                            <img src={require('../img/header/naverlogo.png')} className='visually-hidden' alt='sr-only에서 visually-hidden으로 클래스명 수정'  />
                        </a>
                    </NavbarBrand>
                    <NavbarToggler onClick={ e => this.toggle() }>
                        <span className="navbar-toggler-icon"></span>
                    </NavbarToggler>
                    <Collapse isOpen={ this.state.isOpen } navbar>
                        <ul className="navbar-nav">
                            <NavItem>
                                <NavLink to="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/components2/">Components2</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/components3/">Components3</NavLink>
                            </NavItem>
                           
                            <UncontrolledDropdown nav >
                                {/* 중요 옵션 nav를 넣어주어야 li태그가 됨 */}
                            <DropdownToggle tag='a' href='#none'>
                            Dropdown link
                            </DropdownToggle>
                            <DropdownMenu >
                                <ul>
                                    <li><NavLink to="/components/">Components</NavLink></li>
                                    <li><NavLink to="/components/">Components</NavLink></li>
                                    <li><NavLink to="/components/">Components</NavLink></li>
                                </ul>
                            </DropdownMenu>
                            </UncontrolledDropdown>
                        </ul>
                    </Collapse>

                
                </Navbar>
                </div>
            </header>
        )
    }

}

export default Header;
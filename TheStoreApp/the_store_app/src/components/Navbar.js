import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'
import styled from 'styled-components'
import { ButtonContainer } from './Button';



export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
        {/*https://www.iconfinder.com/icons/8666691/home_icon */}
        <Link to='/'>
          <img src={logo} alt='store' className='navbar-brand'></img>
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              OurProducts
            </Link>
          </li>
        </ul>

        <Link to='/search' className='ml-auto'>
          <ButtonContainer>
          <i className='nav-item ml-5'></i>
            Deals
          </ButtonContainer>
        </Link>
        

        <Link to='/search' className='ml-auto'>
          <ButtonContainer>
            <span className='mr-2'>
            <i className='fas fa-search-plus'></i>
            </span>
            SearchHere
          </ButtonContainer>
        </Link>

        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
            <span className='mr-2'>
            <i className='fas fa-cart-plus'></i>
            </span>
            MyCart
          </ButtonContainer>
        </Link>

        <Link to='/search' className='ml-auto'>
          <ButtonContainer>
            <i className='nav-item ml-5'></i>
            About
          </ButtonContainer>
        </Link>

        <Link to='/search' className='ml-auto'>
          <ButtonContainer>
            <i className='nav-item ml-5'></i>
            Contact
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}
  
const NavWrapper = styled.nav`
  background: var(--mainGreen);
  .nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-Transform: capitalize;
  }
`;
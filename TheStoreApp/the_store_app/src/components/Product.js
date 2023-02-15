import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
        <div className='card'>
          <div className='img-container p-5'
            onClick={() => console.log('you clicked me on the img container')}>

            <Link to='/details'>
              <img src={img} alt='product' className='card-img-top'></img>
            </Link>
            <button 
              className='cart-btn' 
              disable= {inCart ? true : false} 
              onClick={() => { console.log('added to the cart');
              }}></button>
            {inCart ? (
              <p className='text-capitalize mb-0' disabled>
                {' '}
                In Cart </p>) : (<i className='fas fa-cart-plus'></i>)}
          </div>
          {/* card footr */}
          <div className='.card-footer d-flex justify-content-between'>
            <p className='align-self-center mb-0'>
              {title}
            </p>
            <h5 className='text-blue font-italic mb-0'>
              <span className='mr-1'>$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
.card{
  border-color:transparent;
  transition: all 0.5s linear;
}
.card-footer{
  background: transparent;
  border-top: transparent;
  transition: all 1s linear;
}
&:hover{
  .card{
    border:0.04rem solid rgba(0,0,0,0.2);
    box-shadow:2px 2px 5px 0 px rgba(0,0,0,0.2)
  }
  .card-footer{
    background:rgba(247, 247, 247);
  }
}
.img-container{
  position:relative;
  overlfow:hidden;
}
.img-container:hover .card-img-top{
  transform:scale(1.2);
}
`;


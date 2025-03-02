import React from 'react';
import styled from 'styled-components';

const Card = ({title,img}:{
    title:string;
    img:string;
}) => {
  return (
    <StyledWrapper>
      <div className="card bg-gray-100">
        <p className="card-title text-lg font-bold text-black">{title}</p>
        <img src={img} alt="image" className="card-image " />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    padding: 15px;
    width: 250px;
    min-height: 200px;
    border-radius: 20px;
    box-shadow: 5px 5px 6px #dadada,
                 -5px -5px 6px #f6f6f6;
    transition: 0.4s;
  }

  .card:hover {
    translate: 0 -10px;
  }

 
  .card-image {
    min-height: 170px;
    border-radius: 15px;
    box-shadow: inset 8px 8px 10px #c3c3c3,
              inset -8px -8px 10px #cfcfcf;
  }`;

export default Card;

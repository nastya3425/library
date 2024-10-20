'use client';

import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { useState } from 'react';
import type { TCard } from '../types/TCard';

type CardProps = {
  cardInfo: TCard;
  onCardClick?: () => void;
}
// import Modal from 'antd';
// import Main from '../Main/page';
// import '/home/admin-home/test.app/app/Card/page.scss';


function CardItem({cardInfo, onCardClick}: CardProps) {

  const [isOpenModale, setIsOpenModale] = useState(false);

  const handleCloseModale = () => { 
    setIsOpenModale(false)
  };
  
  return (
    <div className='card' style={{height: 100, width:100}}>
    <li className="elements__item">
      <img
        src={cardInfo?.link}
        alt={cardInfo?.name}
        className="elements__photo"
        onClick={() => setIsOpenModale(true)}
      />
      <div className="elements__content">
        {<h2 className="elements__title">{cardInfo.name}</h2>}
      </div>
    </li>
    </div>
  )
};

export default CardItem;
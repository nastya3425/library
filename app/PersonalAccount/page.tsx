'use client';

import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { useState } from 'react';
import type { TCard } from '../types/TCard';
import type { TPerson } from '../types/TPerson'; 

type CardProps = {
  cardInfo: TCard;
  onCardClick?: () => void;
}

type PersonProps = {
    personInfo: TPerson;
    onPersonClick?: () => void;
  }

// import Modal from 'antd';
// import Main from '../Main/page';
// import '/home/admin-home/test.app/app/Card/page.scss';


function Person({personInfo, onPersonClick}: PersonProps) {

  const [isOpenPersonModale, setIsOpenPersonModale] = useState(false);

  const handleClosePersonModale = () => { 
    setIsOpenPersonModale(false)
  };
  
  return (
    <section>Person</section>

    // <li className="elements__item">
    //   <img
    //     src={cardInfo?.link}
    //     alt={cardInfo?.name}
    //     className="elements__photo"
    //     onClick={() => setIsOpenModale(true)}
    //   />
    //   <div className="elements__content">
    //     {<h2 className="elements__title">{cardInfo.name}</h2>}
    //   </div>
    // </li>
  )
};

export default Person;
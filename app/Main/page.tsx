'use client';

import { link } from 'fs';
import Link from 'next/link';
import { HTMLAttributes, useState } from 'react';
import { Button, Divider, Card, Image, Modal, Layout, Menu, Breadcrumb, List, MenuProps, Dropdown } from 'antd';
import CardItem from './cardItem';
import type { TCard } from '../types/TCard';
import { TPerson } from '../types/TPerson';
import { Content, Header } from 'antd/es/layout/layout';
import Meta from 'antd/es/card/Meta';
import '/home/admin-home/test.app/app/Main/page_main.scss';

const cards: TCard[] = [
  {id: 1, name: 'Гарри Поттер и Принц-Полукровка',  author: 'Джоан Кэтлин Роулинг', year: '2005', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwjjkxpJfbGqzJ9ZU6d8pxxuIGfKoAERL0w&s'},
  {id: 2, name: 'Игра престолов',author: 'Джордж Мартин', year: '1996',link: 'https://imo02.my-shop.ru/products359/3580167/cover.jpg/500-0'},
]

const persons: TPerson[] = [
  {id: 1, name: 'Эдвард',  lastname: 'Каллен', year: '1901', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwjjkxpJfbGqzJ9ZU6d8pxxuIGfKoAERL0w&s'},
]

function Main() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [show1, setShow1] = useState(true);
const [selectedItem, setSelectedItem] = useState<TCard|null>();
const [selectedPersonItem, setSelectedPersonItem] = useState<TPerson|null>();

const menuItems = [
  {
    key: 'lc',
    label: 'LC'
  }
];

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a
       rel="noopener noreferrer"
       onClick={() => setSelectedPersonItem(persons[0])}
       > ПРофиль</a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Избранное
      </a>
    ),
  },
  {
    key: '3',
    label: (
        <Link href= {'Authorization'}>Зарегистрироваться</Link>
    ),
  },
];

function onCardClick() {
  console.log('на меня нажали')

}

  return(

    <Layout>

      <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#45B062' }}>
        <div className="demo-logo" />
        <img src='book.png' className='logo'></img>

        <Menu
          // theme="dark"
          // mode="horizontal"
          // defaultSelectedKeys={['lc']}
          // items={menuItems}
          style={{ flex: 1, minWidth: 0, backgroundColor: '#45B062' }}
        />

        <Dropdown menu={{ items }} placement="bottomRight">
          <Button>Личный кабинет</Button>
        </Dropdown>

      </Header>

      <Content style={{ padding: '48px 48px', marginRight: '5px'}}>

        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 5,
            lg: 5,
            xl: 5,
            xxl: 5,
          }}
          dataSource={cards}
          renderItem={(card) => (
            <List.Item>
              <Card
                hoverable
                cover={<img alt={card.name} src={card.link} />}
                onClick={() => setSelectedItem(card)}
               >
                <Meta title={card.name} description="today" />
                
               </Card>
            </List.Item>
          )}
        />
        {selectedItem && 
          <Modal
            centered
            open={Boolean(selectedItem)}
            onOk={() => setSelectedItem(null)}
            onCancel={() => setSelectedItem(null)}
            width={1100}
            footer={[
              <Button key="back" onClick={() => setSelectedItem(null)}>
                Закрыть
              </Button>
            ]}
          >

            <div className='buttons'>
              <button className='reservation'>Забронировать</button>
              <button className='favorites'>Избранное</button>
            </div>

            <div className='info'>
              <p>Имя: {selectedItem.name}</p>
              <p>Фамилия: {selectedItem.author}</p>
              <p>Дата рождения: {selectedItem.year}</p>
              {/* <p>{selectedItem?.link}</p> */}
            </div>

            <img src={selectedItem.link} className='book_img'></img>

          </Modal>}
        {selectedPersonItem && 
          <Modal
            centered
            open={Boolean(selectedPersonItem)}
            onOk={() => setSelectedPersonItem(null)}
            onCancel={() => setSelectedPersonItem(null)}
            width={1100}
            footer={[
              <Button key="back" onClick={() => setSelectedPersonItem(null)}>
                Закрыть
              </Button>
            ]}
          >

              {/* <div className='buttons'>
                <button className='reservation'>Забронировать</button>
                <button className='favorites'>Избранное</button>
              </div> */}

              <div className='info'>
                <p>Название: {selectedPersonItem.name}</p>
                <p>Автор: {selectedPersonItem.lastname}</p>
                <p>Год публикации: {selectedPersonItem.year}</p>
                {/* <p>{selectedItem?.link}</p> */}
              </div>

              <img src={selectedPersonItem.link} className='book_img'></img>

            </Modal>
        }
      </Content>
    </Layout>


  );


}


export default Main;

function setIsModalOpen(arg0: boolean) {
  throw new Error('Function not implemented.');
}

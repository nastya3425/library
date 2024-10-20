'use client';

import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Layout, Menu } from 'antd';
import { InputNumber } from "antd";
import type { FormProps } from 'antd';
import '/home/admin-home/test.app/app/Authorization/page_autho.scss';
import Link from 'next/link';
import { Content, Header } from 'antd/es/layout/layout';

const Authorization: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (

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
      </Header>
      <Content style={{ padding: '48px 48px', marginRight: '5px'}}>

      <div
          style={{
            background: 'white',
            minHeight: 280,
            padding: 24,
            borderRadius: 10,
          }}
        >


    <Form className='Forma'
      name="login"
      initialValues={{ remember: true }}
      style={{ 
        maxWidth: 360,
      }}
      onFinish={onFinish}
    >

<Form.Item className='Enter'>
          <h1>Регистрация</h1>
      </Form.Item>

       <Form.Item
        name="email"
        style={{ 
          marginTop: 10
        }}
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Введите Ваш E-mail!',
          },
        ]}
      >
        <Input placeholder="Email"/>
      </Form.Item>

      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Введите Ваше имя!' }]}
      >
        <Input placeholder="Ваше имя" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Введите пароль' }]}
      >
        
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Введите пароль!',
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Пароль" />
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Подтвердите свой пароль!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Пароли не совпадают!'));
            },
          }),
        ]}
      >
        <Input.Password placeholder="Повторите пароль"/>
      </Form.Item>

      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className='checkbox'>Запомнить меня</Checkbox>
          </Form.Item>
          <a href="">Забыли пароль</a>
        </Flex>
      </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit" className='button'>
            <Link href={'Main'}>Зарегистрироваться</Link>
          </Button>
          или <Link href={'Login'}>Войти!</Link>
        </Form.Item>
      </Form>
      </div>
    </Content>
    </Layout>
  );
};

export default Authorization;


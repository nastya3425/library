'use client';

import React from 'react';
import { AlignCenterOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Layout, Menu } from 'antd';
import { InputNumber } from "antd";
import type { FormProps } from 'antd';
import Link from 'next/link';
import '/home/admin-home/test.app/app/Login/page_log.scss';
import { Content, Header } from 'antd/es/layout/layout';

const Login: React.FC = () => {
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
      onFinish={onFinish}
    >

    <Form.Item className='Enter'>
          <h1>Вход</h1>
      </Form.Item>

      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Введите Ваше имя!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Ваше имя" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Введите пароль' }]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Пароль" />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Запомнить меня</Checkbox>
          </Form.Item>
          <a href="">Забыли пароль</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Войти
        </Button>
        или <Link href={'Authorization'}>Зарегистрироваться!</Link>
      </Form.Item>
    </Form>
    </div>
    </Content>
    </Layout>
  );
};

export default Login;
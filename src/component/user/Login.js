import React, { useState } from 'react';
import { Button, Card, Checkbox, Form, Input, Modal } from 'antd';
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../../services/Loginaction';
import "./Login.css";
import GoBack from '../GoBack';
const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate=useNavigate()
    const dispatch=useDispatch();
  const onFinish = async (values) => {
      await userLogin(values)(dispatch).unwrap();
       navigate('/')
  }
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const data=useSelector((state)=>state)
  console.log("testdata",data)
  const handlepath=()=>{
    navigate("/auth/signup")
  }
  return(
  <div>
    <div className='wrapper'>
    <Form onFinish={onFinish} >
    <div className="block">
    <div>
    <Form.Item label="Username" name="username" >
      <Input className='input-box'/>
    </Form.Item>
    </div>
    <div>
    <Form.Item label="Password" name="password" >
      <Input.Password className='input-box'/>
    </Form.Item>
    </div>
    </div>
    <div className='remember-forgot'>
    <Form.Item name="remember" valuePropName="checked" >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>
    <Form.Item>
    <p onClick={showModal} >
       Forget Password?
      </p>
    </Form.Item>
    </div>
    <div>
    <Form.Item>
      <Button type="primary" htmlType="submit" className="btn" loading={data?.authinfo?.loading}>
        Login
      </Button>
    </Form.Item>
    </div>
    <div class="register-link">
        <p>Dont have an account? <a onClick={handlepath}>Register</a></p>
      </div>
   
  </Form>
    {
      isModalOpen &&(
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className="">
            <div className="items-center">
              Enter your registered Email and We will send a code.
            </div>
<Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input className="input-box"/>
      </Form.Item>
</div>
      </Modal>
      )
    }
  </div>
  </div>
  )
};
export default Login;
import React from 'react';
import { Button, Card, Checkbox, Form, Input, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import "./Login.css";
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  }; 
  const navigate=useNavigate()
  const handlepath=()=>{
    navigate("/auth/login")
  }
  return (
    <div className='wrapper'>
      <Form onFinish={onFinish} layout='vertical'>
    <div className="">
<div>
<Form.Item label="First Name" name="firstname" >
      <Input className="input-box"/>
    </Form.Item>
</div>
<div className="">
<Form.Item label="Last Name" name="lastname" >
      <Input className="input-box"/>
    </Form.Item>
</div>
<div className="">
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
<div className="">
<Form.Item
        name="phone"
        label="Phone Number"
      >
        <Input className="input-box"/>
      </Form.Item>
</div>
<div className="">
<Form.Item
      label="Password"
      name="password"
    >
      <Input.Password className="input-box"/>
    </Form.Item>
</div>
    </div>
    <Form.Item
    className="">
      <Button type="primary" htmlType="submit" className='btn' >
        Submit
      </Button>
      </Form.Item>
      <div className='register-link' > 
        <p> Already Have an account?</p> 
        <a onClick={handlepath}>Login</a>
      </div>
  </Form>
    </div>
  )
}

export default Signup

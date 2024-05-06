import React, { useState } from 'react';
import { Avatar, Badge, Breadcrumb, Drawer, Dropdown, Image, Layout, Menu, Modal, Space, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { BookOutlined, LoginOutlined, SettingOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/LoginSlices';
import RecipeBook from '../user/RecipeBook';
const { Header, Content, Footer } = Layout;
const Userlayout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const carddata = useSelector((state) => state)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  const items = [
    {
      key: "1",
      label: <div onClick={() => handleClick('/profile')}> Profile</div>,
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: <div onClick={() => handleClick('/settings')}> Setting</div>,
      icon: <SettingOutlined />,
    },
    {
      key: "3",
      label: <div onClick={() => handleClick(3)}> Logout</div>,
      icon: <LoginOutlined />,
    },
  ]
  const handleClick = (e) => {
    if (e === 3) {
      dispatch(logout());
    }
    else {
      navigate(`${e}`)
    }
  }
  const [open, setOpen] = React.useState(false);
  const closeModal = () => {
    setOpen(false); // Close the modal
  };
  const iteminfo = [
    {
      name: 'About Us',
      link: '/aboutus'
    },
    {
      name: 'Contact Us',
      link: '/contact'
    },
  ]
  const authinfo = [
    {
      name: 'Login',
      link: 'auth/login'
    },
    {
      name: 'Sign up',
      link: 'auth/signup'
    },
  ]
  const handleitem = (item) => {
    navigate(item.link)
  }
  const handlefront=()=>{
    navigate("/")
  }
  console.log("sadada", carddata)
  return (
    <Layout className="full-layout">
      <Header className='headers'>
        <div className="demo-logo" />
        <Menu
          mode="horizontal"
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
        <div className='header'>
          <div className="image">
            <img src="https://seeklogo.com/images/R/recipe-logo-EC4BDCE687-seeklogo.com.png" onClick={() => handlefront()} />
          </div>
          <div>
          </div>
          <div className='iteminfo' >
            {
              iteminfo?.map((item) => (
                <div key={item.link} onClick={() => handleitem(item)}>
                  <div>
                    {item.name}
                  </div>
                </div>
              ))
            }
          </div>
          <div className='iteminfo'>
            <div>
              {
                carddata?.authSlice?.userInfo?.token && (
                  <Dropdown
                    menu={{
                      items,
                    }}
                    trigger={['click']}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <UserOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                )
              }
            </div>
            <div>
              <Badge count={carddata?.addToCart?.data.length} size='small' onClick={() => setOpen(true)}>
                <Avatar icon={<BookOutlined />} size='small' />
              </Badge>
            </div>
            <div className="iteminfo">
              {!carddata?.authSlice?.userInfo?.token &&(
                 authinfo?.map((item) => (
                  <div key={item.link} onClick={() => handleitem(item)}>
                    <div>
                      {item.name}
                    </div>
                  </div>
                ))
              )
              }
            </div>
          </div>
        </div>
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <div
          className="navbar"
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        className="footer"
      >
        Recipe App ©{new Date().getFullYear()} Created by Saradmgr
      </Footer>
      {
        (open) && (
          <Modal
            title="My Recipe book"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1000}
            footer={null} // Set footer to null to hide the buttons
          >
            <RecipeBook closeModal={closeModal}/>
          </Modal>
        )
      }
    </Layout>
  );
};
export default Userlayout;
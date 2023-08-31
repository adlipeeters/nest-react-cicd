import React from 'react'
import { theme } from 'antd';
import { Menu as Links } from 'antd';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    DashboardOutlined
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
    const location = useLocation();

    const menuItems = [
        {
            key: '/',
            icon: <DashboardOutlined />,
            label: 'Home',
            path: '/'
        },
        {
            key: '/about',
            icon: <VideoCameraOutlined />,
            label: 'About',
            path: '/about'
        },
        {
            key: '/home',
            icon: <UploadOutlined />,
            label: 'Landing',
            path: '/home'
        },
    ];
    return (
        <Links
            theme="dark"
            mode="inline"
            selectedKeys={[location.pathname]}
        >
            {menuItems.map(item => (
                <Links.Item key={item.key} icon={item.icon}>
                    <Link to={item.path}>
                        {item.label}
                    </Link>
                </Links.Item>
            ))}
        </Links>
    )
}

export default Menu
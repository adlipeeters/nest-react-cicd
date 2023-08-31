import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import styles from './styles.module.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import images from '../../helpers/assets';

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    username: Yup.string().required('Please input your Username!'),
    password: Yup.string().required('Please input your Password!'),
    // remember: Yup.boolean()
});

const Login: React.FC = () => {
    return (
        <Formik
            initialValues={{
                email: '',
                username: '',
                password: '',
                // remember: true
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                console.log('Received values of form: ', values);
                setSubmitting(false);
            }}
        >
            {({ handleSubmit, handleChange, values, touched, errors, handleBlur, isSubmitting }) => (
                <div className={styles.form_container}>
                    <img src={images.logo} className={styles.form_logo} alt="" />
                    <Form
                        name="normal_login"
                        className="login-form"
                        // initialValues={{ email: 'asd' }}
                        onFinish={handleSubmit as any}
                    >
                        <Form.Item
                            name="email"
                            validateStatus={touched.email && errors.email ? 'error' : undefined}
                            help={touched.email && errors.email}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </Form.Item>

                        <Form.Item
                            name="username"
                            validateStatus={touched.username && errors.username ? 'error' : undefined}
                            help={touched.username && errors.username}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Username"
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            validateStatus={touched.password && errors.password ? 'error' : undefined}
                            help={touched.password && errors.password}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </Form.Item>

                        {/* <Form.Item name="remember">

                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </Form.Item> */}

                        <Form.Item className={styles.submit_btn_container}>
                            <Button type="primary" htmlType="submit" className={styles.login_form_button} disabled={isSubmitting}>
                                Log in
                            </Button>
                            {/* Or <a href="">register now!</a> */}
                        </Form.Item>
                    </Form>
                </div>
            )}
        </Formik>
    );
};

export default Login;

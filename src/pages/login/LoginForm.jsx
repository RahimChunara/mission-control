import React from 'react'
import { Form, Input, Button } from 'antd';
import './login.css'

function LoginForm(props) {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.handleSubmit(values.userName, values.password);
      }
    });
  };
  const { getFieldDecorator } = props.form;
  return (
    <div className="login-form">
      <p className="sign-in">Sign In</p>
      <Form onSubmit={handleSubmit}>
        <Form.Item >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input placeholder="Username" className="input" />,
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password!' }],
          })(
            <Input.Password type="password" placeholder="Password" className="input" />
          )}
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={props.isLoading} className="btn">
          SIGN IN
          </Button>
      </Form>
    </div>
  )
}

const WrappedLoginForm = Form.create({})(LoginForm);

export default WrappedLoginForm

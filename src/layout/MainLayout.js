import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './MainLayout.less';

const { Header } = Layout;

// const rootRoutes = ['/', '/about', '/contact'];
// const aboutSubRoutes = ['/about/me', '/about/company'];
function MainLayout(props) {
  const { children } = props;
  return (
    <Layout>
      <Header style={{ position: 'fixed', top: 0, zIndex: 1, width: '100%', height: 'unset' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100px',
          }}
          items={[
            {
              key: '0',
              label: (
                <Link to="/">
                  <span
                    style={{
                      fontFamily: 'Bellota Text',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: 24,
                    }}
                  >
                    BASEEM MUNAWWAR
                  </span>
                </Link>
              ),
            },
            {
              key: '1',
              label: (
                <Link to="/projects">
                  <span className="menu-item-link">Projects</span>
                </Link>
              ),
            },
            {
              key: '2',
              label: (
                <Link to="/hire-me">
                  <span className="menu-item-link">Hire ME!</span>
                </Link>
              ),
            },
            {
              key: '3',
              label: (
                <Link to="/about">
                  <span className="menu-item-link">About Me</span>
                </Link>
              ),
            },
            {
              key: '4',
              label: (
                <Link to="/store">
                  <span className="menu-item-link">Store</span>
                </Link>
              ),
            },
          ]}
        />
      </Header>
      <Layout
        style={{
          paddingTop: '100px',
        }}
      >
        {children}
      </Layout>
    </Layout>
  );
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default MainLayout;

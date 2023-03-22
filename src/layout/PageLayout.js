import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import './PageLayout.less';

const { Content } = Layout;

// eslint-disable-next-line react/prop-types
function PageLayout({ children, style = {}, ...props }) {
  return (
    <Content
      className="page-content"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        width: '100%',
        maxHeight: '100%',
        ...style,
      }}
      {...props}
    >
      {children}
    </Content>
  );
}

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

PageLayout.defaultProps = {
  // style: PropTypes.object,
};

export default PageLayout;

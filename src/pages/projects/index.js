import React from 'react';
import PageLayout from '../../layout/PageLayout';
import Article from './Article';
import data from './data';
import './index.less';

function Projects() {
  return (
    <PageLayout
      style={{
        overflow: 'hidden',
      }}
    >
      <div className="projects_container">
        {data.map((item, index) => (
          <Article key={index} {...item} />
        ))}
      </div>
    </PageLayout>
  );
}

export default Projects;

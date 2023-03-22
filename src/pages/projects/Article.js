/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-underscore-dangle
const _images = require.context('./imgs', true);
const importedImagesArray = _images
  .keys()
  .map((key) => ({ image: _images(key), name: key.replace('./', '') }));

function Article({ title, subtitle, content, eventAddress, year, type, images }) {
  const [imagesArray] = React.useState(importedImagesArray);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [readStory, setReadStory] = React.useState(false);
  const [articleWidth, setArticleWidth] = React.useState(0);
  const articleRef = React.useRef(null);
  const isHidden = content.includes('hidden_text');

  React.useEffect(() => {
    if (articleRef.current) {
      setArticleWidth(articleRef.current.offsetWidth);
    }
  }, [articleRef]);
  // when the article component become not visible, scroll images to start by using observer
  // const observer = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         const images = entry.target.querySelectorAll('img');
  //         images.forEach((image) => {
  //           image.style.transform = 'translateX(0)';
  //         });
  //       } else {
  //         const images = entry.target.querySelectorAll('img');
  //         images.forEach((image) => {
  //           image.style.transform = 'translateX(-100%)';
  //         });
  //       }
  //     });
  //   },
  //   {
  //     threshold: 0.5,
  //   },
  // );
  // React.useEffect(() => {
  //   if (articleRef.current) {
  //     observer.observe(articleRef.current);
  //   }
  // }, [articleRef]);

  return (
    <>
      {selectedImage ? (
        <div
          className="imageViewer"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.8)',
            zIndex: 100,
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              padding: '10px',
              color: 'white',
              cursor: 'pointer',
              width: '100px',
              height: '100px',
            }}
            onClick={() => setSelectedImage(null)}
          >
            close
          </div>
          <img
            src={selectedImage}
            alt="test"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: '100%',
              maxHeight: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      ) : null}
      <div className="article">
        <div
          className={['container', type === 'justTitle' ? 'justTitle' : ''].join(' ')}
          ref={articleRef}
        >
          <div className={['title', type === 'justTitle' ? 'justTitle text' : ''].join(' ')}>
            {title}
          </div>
          <div className="subtitle">{subtitle}</div>
          <div className={['content', readStory ? 'show' : 'hide'].join(' ')}>
            {
              // add as html to preserve the formatting
              // eslint-disable-next-line react/no-danger
              <div dangerouslySetInnerHTML={{ __html: content }} className="content" />
            }
          </div>
          <div className="footer">
            <div className="eventAddress">{eventAddress}</div>
            <div className="year">{year}</div>
          </div>
        </div>
        {isHidden && (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div className="toggleButtonContainer" onClick={() => setReadStory(!readStory)}>
            <div className="toggleButton">{readStory ? 'hide the story' : 'read the story'}</div>
          </div>
        )}
        <div className="images">
          {
            // eslint-disable-next-line max-len
            imagesArray
              .filter((image) => {
                return images.join(' ').includes(image.name);
              })
              .map((image) => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                <img
                  src={image.image.default}
                  onClick={() => setSelectedImage(image.image.default)}
                  alt={image.name}
                  className="img"
                  style={{
                    // random height between 200 and 400
                    height: `${Math.floor(Math.random() * 500) + 200}px`,
                    marginRight: `${Math.floor(Math.random() * articleWidth) + articleWidth / 2}px`,
                  }}
                />
              ))
          }
        </div>
      </div>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  eventAddress: PropTypes.string,
  year: PropTypes.string,
  images: PropTypes.array,
  type: PropTypes.string,
};

Article.defaultProps = {
  title: '',
  subtitle: '',
  content: '',
  eventAddress: '',
  year: '',
  images: [],
  type: '',
};

export default Article;

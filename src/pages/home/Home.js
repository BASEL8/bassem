import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../layout/PageLayout';
import './index.less';

const images = require.context('./imgs', true);
const importedImagesArray = images.keys().map((key) => {
  return { image: images(key).default(), name: key };
});

const Home = ({ location: { pathname } }) => {
  const [imagesArray, setImagesArray] = React.useState(importedImagesArray);
  const [mouseMoved, setMouseMoved] = React.useState(true);
  const [mouseSpeed, setMouseSpeed] = React.useState(0);
  const [visibleCount, setVisibleCount] = React.useState(1);

  React.useEffect(() => {
    window.addEventListener('mousemove', () => {
      setMouseMoved(true);
      let lastMouseX = 0;
      let lastMouseY = 0;
      let lastMouseTime = 0;
      let mSpeed = 0;
      const mouseMove = (e) => {
        const now = Date.now();
        const dt = now - lastMouseTime;
        const dx = e.clientX - lastMouseX;
        const dy = e.clientY - lastMouseY;
        const speed = Math.sqrt(dx * dx + dy * dy) / dt;
        mSpeed = speed;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        lastMouseTime = now;
        if (mSpeed > 0 && mSpeed < 10) {
          setMouseSpeed(Math.round(mSpeed));
        }
      };
      window.addEventListener('mousemove', mouseMove);
    });
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCount(visibleCount + 1);
      if (!visibleCount < images.keys().length) {
        setImagesArray([...imagesArray, ...importedImagesArray]);
      }
      if (visibleCount >= 250) {
        setVisibleCount(1);
        setImagesArray(importedImagesArray);
      }
    }, mouseSpeed * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [mouseSpeed]);
  React.useEffect(() => {
    setMouseMoved(false);
    setImagesArray([]);
    setVisibleCount(1);
  }, [pathname]);

  if (pathname !== '/') {
    return null;
  }

  return (
    <PageLayout>
      <div
        style={{
          position: 'relative',
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {mouseMoved &&
          imagesArray.map(({ image, name }, index) => {
            if (index > visibleCount) return null;
            const num = name
              .split('')
              .map((char) => char.charCodeAt(0))
              .reduce((a, b) => a + b, 0);
            return (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  ...(num % 100 < 50
                    ? { bottom: `${num % 100}%`, left: `${(num % 100) + 10}%` }
                    : { right: `${(num % 100) + 10}%`, bottom: `${num % 100}%` }),
                }}
              >
                {image}
              </div>
            );
          })}
      </div>
    </PageLayout>
  );
};

Home.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Home;

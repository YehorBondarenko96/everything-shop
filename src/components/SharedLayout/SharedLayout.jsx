import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { setScreenWidth, setScreenHeight } from '../../redux/slice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const SharedLayout = () => {
  const dispatch = useDispatch();
  
  const forOrientation = () => {
        setTimeout(() => {
          dispatch(setScreenWidth(window.innerWidth));
          dispatch(setScreenHeight(window.innerHeight));
        }, 100);
    };

    forOrientation();

    window.removeEventListener('orientationchange', forOrientation);

    useEffect(() => {
        window.addEventListener('orientationchange', forOrientation);
    });

  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

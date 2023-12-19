import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import contents from '../../routes/contentRoutes';

const LOADING = <div>loading</div>;

const Content = () => {
  return (
    <main className='content'>
      <Suspense fallback={LOADING}>
        <Routes>
          {contents.map((page) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Route key={page.path} {...page} />
          ))}
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </Suspense>
    </main>
  );
};
export default Content;

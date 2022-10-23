import React from 'react';
import ReactDOM from 'react-dom/client';
import MovieApp from './movie-app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <MovieApp/>
  //</React.StrictMode>
/*stricmode의 경우, 개발 과정중 안전을 위해 켜는 기능이며 배포시에 자동으로 해제된다.
 이게 있으면 Double invoke가 일어날 수 있다. ex) 콘솔로그가 중복으로 찍히거나 할 수 있음*/
);

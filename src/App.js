import React from 'react';
import {Suspense,lazy} from 'react';

import './App.css';

const ListItemFavoriteFruit = lazy(() => import('./components/listItemFavoriteFruit'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Favorite Fruits</h1>
          <h2>ReactJS</h2>
      </header>

        <Suspense fallback={<div>Loading...</div>}>
            <ListItemFavoriteFruit />
        </Suspense>
    </div>
  );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const port = process.env.PORT || 3000;
App.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

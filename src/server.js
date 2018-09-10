import express  from 'express';
import React    from 'react';
import ReactDom from 'react-dom/server';
// import App      from './App.jsx';

import { match, RouterContext } from 'react-router';
import routes from './routes.js';

const app = express();

app.use((req, res) => {
  // const componentHTML = ReactDom.renderToString(<App />);
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
	  		if (redirectLocation) { // Если необходимо сделать redirect
	  			return res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    }
    if (error) { // Произошла ошибка любого рода
      return res.status(500).send(error.message);
    }
    if (!renderProps) { // Мы не определили путь, который бы подошел для URL
	 			return res.status(404).send('Not found');
	 		}

    const componentHTML = ReactDom.renderToString(<RouterContext {...renderProps} />);

    return res.end(renderHTML(componentHTML));
  });
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8080' : '/';

function renderHTML(componentHTML) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="theme-color" content="#000000">
          <title>APP.COM</title>
      </head>
      <body>
      <noscript>
      	You need to enable JavaScript to run this app.
      </noscript>
        <div id="root">${componentHTML}</div>
        <script type="application/javascript" src="${assetUrl}/public/bundle.js"></script>
      </body>
    </html>
  `;
}

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});

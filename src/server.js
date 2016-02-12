import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Counter from './components/Counter'

// init express
const app = express()

// add static path
app.use(express.static('public'))

// add top page routing
app.get('/', (req, res) => {
  res.send(
    ReactDOMServer.renderToString(
      <div>
        <div id="app">
          <Counter />
        </div>
        <script src="client.js" />
      </div>
    )
  )
})

// start listen
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})

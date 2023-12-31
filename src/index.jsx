import * as $ from 'jquery';
import Post from '@models/Post';
// import json from './assets/json';
// import xml from './assets/data.xml';
// import csv from './assets/data.csv';
import WebpackLogo from '@/assets/webpack-logo';
import React from 'react'
import {render} from 'react-dom'
import './babel';
import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';

const post = new Post('Webpack Post Title', WebpackLogo);

$('pre').addClass('code').html(post.toString());

const App = () => {
  return (
    <div class="conteiner">
      <h1>Webpack Course</h1>

      <hr/>

      <div class="logo"></div>

      <hr/>

      <pre class="code"></pre>

      <hr/>

      <div class="box">
        <h2>Less</h2>
      </div>

    <div class="card">
      <h2>Sass</h2>
      </div>
    </div>
  )
}

render(<App/>, document.getElementById('app'))
// console.log('Post to String:', post.toString());
// console.log('JSON:', json);
// console.log('XML:', xml);
// console.log('CSV:', csv);

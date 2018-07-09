import React, { Component } from 'react';
import MarkdownData from '../data/post.md';

class AppRoot extends Component {
  render() {
    return (
      <div className="profile">
        <img src={require('../images/witcher.jpg')} alt="Witcher" />
        <h1>{MarkdownData.title}</h1>
        <h2>{MarkdownData.author}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}
          className="content"
        />
      </div>
    );
  }
}

export default AppRoot;

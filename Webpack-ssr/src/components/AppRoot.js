import React, { Component } from 'react';
// import MarkdownData from '../data/post.md';

class AppRoot extends Component {
  render() {
    return (
      <div className="profile">
        <img src={''} alt="Witcher" />
        <h1>Title</h1>
        <div
          dangerouslySetInnerHTML={{ __html: '<h1>Heading</h1>' }}
          className="content"
        />
      </div>
    );
  }
}

export default AppRoot;

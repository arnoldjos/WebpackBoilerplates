import React from 'react';
import '../css/Article.css';

export default props => {
  const siteConfig = require(`../../data/${props.site}/siteConfig`);
  const imagePath = require(`../images/${siteConfig.aboutImage}`);

  const MarkdownData = require(`../../data/${props.site}/${
    props.match.params.slug
  }.md`);

  import(`../css/${prop.site}/theme.css`);

  return (
    <div>
      <div className="Article">
        <h1>{MarkdownData.title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}
        />
      </div>
    </div>
  );
};

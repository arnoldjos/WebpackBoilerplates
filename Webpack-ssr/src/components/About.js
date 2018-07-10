import React from 'react';

import imagePath from '../images/link.jpg';
import MarkdownData from '../../data/post.md';
import '../css/About.css';

export default () => (
	<div className="profile">
		<img src={imagePath} />
		<h1>{MarkdownData.title}</h1>
		<div
			className="content"
			dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}
		/>
	</div>
);

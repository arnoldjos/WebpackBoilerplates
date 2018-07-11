import React from 'react';
import '../css/Article.css';
import NotFound from './NotFound';
import { connect } from 'react-redux';
import { fetchArticle } from '../store/actions';
import Spinner from './Spinner';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchArticle(this.props.site, this.props.match.params.slug);
  }

  // componentWillReceiveProps(props) {
  //   this.props.fetchArticle(props.site, props.match.params.slug);
  // }

  render() {
    try {
      const billboardStyle = {
        backgroundImage: `url(${this.props.article.posterImage})`
      };
      import(`../css/${this.props.site}/theme.css`);

      return (
        <div className="Article">
          <div className="billboard" style={billboardStyle} />
          <h1>{this.props.article.title}</h1>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: this.props.article.__content }}
          />
        </div>
      );
    } catch (error) {
      return <NotFound />;
    }
  }
}

const mapStateToProps = state => ({
  article: state.article.content
});

const mapDispatchToProps = dispatch => ({
  fetchArticle: (site, slug) => dispatch(fetchArticle(site, slug))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);

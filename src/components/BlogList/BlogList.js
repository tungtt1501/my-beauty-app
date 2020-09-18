import React from 'react';
import { Element } from 'react-scroll';
import { connect } from 'react-redux';
import { actFetchBlogsRequest } from './../../actions/index'
import BlogItem from './BlogItem';
import BlogDetail from './BlogDetail';

class BlogList extends React.Component {
  render() {
    var { blogs } = this.props;
    return (
      <Element id="blogs" name="blogs">
        <section className="ftco-section bg-light">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-12 heading-section ftco-animate text-center">
              <h2 className="mb-1">Blogs</h2>
            </div>
          </div>
          <div className="container">
            <div className="row d-flex">
              {this.showBlog(blogs)}
            </div>
            <div className="row mt-5">
              <div className="col text-center">
                <div className="block-27">
                  <ul>
                    <li><a href="#">&lt;</a></li>
                    <li className="active"><span>1</span></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">&gt;</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BlogDetail />
      </Element>
    );
  }

  componentDidMount() {
    this.props.fetchAllBlogs();
  }

  showBlog = (blogs) => {
    var result = null;
    if (blogs) {
      result = blogs.map((blog, index) => {
        return (
          <BlogItem
            key={index}
            blog={blog} />
        )
      })
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllBlogs: () => {
      dispatch(actFetchBlogsRequest());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);

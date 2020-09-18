import React from 'react';

class BlogItem extends React.Component {
    render() {
        var { blog } = this.props;
        return (
            <div className="col-md-4 d-flex">
                <div className="blog-entry justify-content-end">
                    <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url(' + blog.image + ')' }}>
                    </a>
                    <div className="text p-4 float-right d-block">
                        <div className="d-flex align-items-center pt-2 mb-4">
                            <div className="one">
                                <span className="day">{blog.day}</span>
                            </div>
                            <div className="two">
                                <span className="yr">{blog.year}</span>
                                <span className="mos">{blog.month}</span>
                            </div>
                        </div>
                        <h3 className="heading mt-2"><a href="#">{blog.heading}</a></h3>
                        <p>{blog.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogItem;

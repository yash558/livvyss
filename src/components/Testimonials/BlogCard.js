import React from 'react'
import './BlogCard.css';

const BlogCard = (props) => {
    return (
        <div className="blog justify-content-center mx-2">
            
            <div className="blog-thumb">
                <a href="/"><img src={props.img} alt="" /></a>
            </div>
            <div className="blog_details">
                <div className="date">
                    <h6><i className="uil uil-calendar-alt"></i> 19-12-23</h6>
                </div>
                <div className="view">
                    <h6><i class="uil uil-eye"></i> 45+</h6>
                </div>
                <div className="comment">
                    <h6><i class="uil uil-comment-alt-dots"> 170+</i></h6>
                </div>
            </div>
            <div className="blog-body">
                <div className="title">
                    <h5>{props.title}</h5>
                </div>
                <div className="desc">
                    <p>{props.desc}</p>
                </div>
            </div>
            <hr />
            <div className="blog-user">
                <div className="user_details">
                    <img src={props.user} alt="" />
                    <h2>{props.name}</h2>
                </div>
                <div className="share_btn">
                    <a href="/"><i class="uil uil-share"></i></a>
                    <a href="/"><i class="uil uil-bookmark"></i></a>
                </div>
            </div>

        </div>

    )
}

export default BlogCard;
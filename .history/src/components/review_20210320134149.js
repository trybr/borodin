import React from "react";
import HtmlParser from 'html-react-parser';

const Review = (
  {
    content: {
        fio,
        post,
        avatar: {
            file: {
                url
            }
        },
        text: {
            text
        }
    }
  }
) => {
  return (
    <div className="reviews-item">
        <div className="reviews-item-text">
            {text}
        </div>
        <div className="reviews-item-separator"></div>
        <div className="author">
            <div className="author-photo">
                
                {
                    url ? <img src={url} alt={fio} className="author-photo__img"/> : ''
                }
            </div>
            <div className="author-info">
                <div className="author-fio">{fio}</div>
                <div className="author-post">{post}</div>
            </div>
        </div>
    </div>
  )
}



export default Review
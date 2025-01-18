import React from 'react'

export default function NewsItem (props) {

    let { title, description, imageUrl ,newsUrl , author , dateTime , source} = props;

    return (
      <div className="my-2">
        <div className="card" >
          <img src={!imageUrl?"https://media.nbcsportsbayarea.com/2024/09/USATSI_24360154.jpg?quality=85&strip=all&resize=1200%2C675":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
           <span className="badge text-bg-secondary"><b>Source</b>&nbsp;:&nbsp;{source}</span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text " ><small className="text-body-secondary" > <b>By</b> {!author ? "unknown":author} <b>on</b> {new Date(dateTime).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

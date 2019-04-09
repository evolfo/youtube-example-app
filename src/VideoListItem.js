import React from 'react'

const VideoListItem = (props) => {
  // console.log(props)
  return (
    <div onClick={() => props.handleRelatedVideoClick(props.video)} className="item">
      <div className="ui small image">
        <img src={props.video['snippet']['thumbnails']['high']['url']} />
      </div>
      <div className="content">
        {props.video['snippet'] && props.video['snippet']['title'] ? props.video['snippet']['title'] : null}
      </div>
    </div>
  )
}

export default VideoListItem

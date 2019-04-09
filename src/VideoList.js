import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = ({videos, onVideoSelect, handleRelatedVideoClick}) => {

  const relatedVideos = videos.map(video => {
  	return <VideoListItem handleRelatedVideoClick={handleRelatedVideoClick} video={video} />
  })

  return (
    <div className="four wide column">
      <div className="ui relaxed items">
      	{relatedVideos}
      </div>
    </div>
  )
}

export default VideoList

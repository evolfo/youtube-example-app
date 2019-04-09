import React from 'react';

const VideoDetail = (props) => {

  return (
    <div className="twelve wide column">
      <div className="ui raised segments">
        <div className="ui segment">
          <div className="ui embed">
            <iframe src={`https://www.youtube.com/embed/${props.videoId}`} frameBorder="0" />
          </div>
        </div>
        <div className="ui segment">
          <h4>{props.video['snippet'] && props.video['snippet']['title'] ? props.video['snippet']['title'] : null}</h4>
        </div>
        <div className="ui secondary segment">
          <p>{props.video['snippet'] && props.video['snippet']['description'] ? props.video['snippet']['description'] : null}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;

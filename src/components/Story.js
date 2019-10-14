import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faUser,
  faCalendar,
  faEye,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

const Story = ({ story }) => (
  <article>
    <div className="row">
      <div className="col-sm-6 col-md-2">
        <figure>
          <img
            src={
              story.media &&
              story.media[0]["media-metadata"] &&
              // eslint-disable-next-line no-undef
              story.media[0]["media-metadata"][1].url
            }
            alt={story.media && story.media[0].caption}
            className="img-fluid"
          />
        </figure>
      </div>
      <div className="col-sm-6 col-md-10">
        <h4>{story.title}</h4>

        <section>
          <FontAwesomeIcon icon={faUser} />
          <span>{story.byline}</span>
          <FontAwesomeIcon icon={faTag} />
          <span>{story.section}</span>
          <FontAwesomeIcon icon={faCalendar} />
          <span>{story.published_date}</span>
          <FontAwesomeIcon icon={faEye} />
          <span>{story.views}</span>
        </section>
        <p>{story.abstract}</p>
        <a
          href={story.url}
          target="_new"
          className="btn btn-primary btn-sm float-right"
        >
          Read More <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  </article>
);
export default Story;

import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSummeryCard = ({ news }) => {
  const { _id, title, total_view, author, details, image_url } = news;
  return (
    <Card className="mb-3">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Image
            className="me-2"
            roundedCircle
            style={{ height: "50px" }}
            src={author.img}
          ></Image>
          <div>
            <p className="m-0">{author.name}</p>
            <p className="m-0">{author.published_date}</p>
          </div>
        </div>
        <div>
          <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 250 ? (
            <p>
              {details.slice(0, 250) + "..."}
              <Link to={`/news/${_id}`}>Read More</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        Total Views: {total_view}
      </Card.Footer>
    </Card>
  );
};

export default NewsSummeryCard;

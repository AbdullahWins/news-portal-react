import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightNav = () => {
  return (
    <div>
      <div>
        <ButtonGroup vertical>
          <Button className="mb-2 px-4" variant="outline-primary">
            <FaGoogle />
            Login with Google
          </Button>
          <Button className="px-4" variant="outline-primary">
            <FaGithub />
            Login with Github
          </Button>
        </ButtonGroup>
      </div>
      <div className="mt-3">
        <h5 className="text-center">Find us on</h5>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook>Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter>Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitch></FaTwitch>Twitch
          </ListGroup.Item>
          <ListGroup.Item>
            <FaYoutube></FaYoutube>YouTube
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightNav;

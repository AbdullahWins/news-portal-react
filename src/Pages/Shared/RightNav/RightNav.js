import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub } from "react-icons/fa";

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
      <div>
        <h5>Find us on</h5>
      </div>
    </div>
  );
};

export default RightNav;

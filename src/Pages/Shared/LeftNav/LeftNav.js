import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/catagories/")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);
  return (
    <div>
      <h4>All Catagory</h4>
      <div>
        {catagories.map((catagory) => {
          return (
            <p key={catagory.id}>
              <Link to={`/catagory/${catagory.id}`}>{catagory.name}</Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNav;

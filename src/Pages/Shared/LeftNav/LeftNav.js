import React, { useEffect, useState } from "react";

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
      <p>{catagories.length}</p>
    </div>
  );
};

export default LeftNav;

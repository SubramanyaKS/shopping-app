import { useContext } from "react";
import { CategoryContext } from "../../contexts/CategoryContext";

/* eslint-disable react/prop-types */
const Categories = () => {
  const {categories} = useContext(CategoryContext);

  return (
    <div className="container">
      <h3 className="text-center text-bluepurple">Categories</h3>
      <div className="row">
        {categories.map((category, index) => (
          <div className="col-md-4" key={index}>
            <div className="card p-3 m-3">
              <div className="card-body">
                <h5 className="card-title">{category}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

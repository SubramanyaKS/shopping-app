import axios from "axios";
import { useEffect, useState } from "react";
import '../assets/style.css';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      // Fetch data when the component mounts
      axios
        .get('https://fakestoreapi.com/products/categories')
        .then((response) => {
          setCategories(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
      
  return (
    <div className="container">
        <h3 className="text-center text-decoration-none">Categories</h3>
    <div className="row">
      {categories.map((category, index) => (
        <div className="col-md-4" key={index}>
          <div className="card p-3 m-3">
            <div className="card-body">
              <h5 className="card-title">{category}</h5>
              {/* Add any additional content related to the category */}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Categories
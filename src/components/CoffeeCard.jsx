import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, photo } = coffee;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      
      if (result.isConfirmed) {
        // start deleteing the coffee
        fetch(`http://localhost:4000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              // remove the coffee from the state 
              const remainingCoffees = coffees.filter(cof => cof._id !== _id)
              setCoffees(remainingCoffees)
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-3">
              <Link to={`/coffee/${_id}`}>
              <button className="btn btn-primary join-item">view</button>
              </Link>
              <Link to={`/updateCoffee/${_id}`}>
              <button className="btn btn-success join-item">edit</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-error join-item"
              >
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

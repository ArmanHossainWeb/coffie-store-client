import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, price, details, photo } =
    coffee;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    

    //   send updated coffee to db
    fetch(`http://localhost:4000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="p-24">
      <div className="bg-base-300 p-5">
        <div className="text-center space-y-4 px-28 ">
          <h1 className="text-4xl">Update Coffee</h1>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleUpdateCoffee} className=" p-5 mt-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 ">
            {/* name  */}
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input w-full"
                placeholder=" Enter coffee name"
              />
            </fieldset>
            {/* Quantity  */}
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Quantity</label>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                className="input w-full"
                placeholder="Enter Quantity"
              />
            </fieldset>
            {/* Supplier  */}
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Supplier</label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                className="input w-full"
                placeholder=" Enter supplier name"
              />
            </fieldset>
            {/* Taste  */}
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Taste</label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                className="input w-full"
                placeholder="Enter coffee taste "
              />
            </fieldset>
            {/* Category  */}
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Price</label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="input w-full"
                placeholder=" Enter coffee price"
              />
            </fieldset>
            {/* Details  */}
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Details</label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                className="input w-full"
                placeholder=" Enter Coffee Details"
              />
            </fieldset>
          </div>

          <fieldset className="fieldset rounded-box p-4">
            <label className="label">photo</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input w-full"
              placeholder=" Enter photo url"
            />
          </fieldset>
          <input type="submit" value="Update Coffee" className="btn w-full " />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;

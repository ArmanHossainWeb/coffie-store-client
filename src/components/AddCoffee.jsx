import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries())
    

    // send data to the db 
    fetch("http://localhost:4000/coffees",{
      method: "POST",
      headers:{
        "content-type":"application/json",
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
     Swal.fire({
      title: "Coffee added successfully!",
      icon: "success",
      draggable: true
});
      }
      form.reset();
    })


    
  };
  return (
    <div className="p-24">
      <div className="bg-base-300 p-5">
        <div className="text-center space-y-4 px-28 ">
          <h1 className="text-4xl">Add New Coffee</h1>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleAddCoffee} className=" p-5 mt-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 ">
            {/* name  */}
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
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
              className="input w-full"
              placeholder=" Enter photo url"
            />
          </fieldset>
          <input type="submit" value="Add Coffee" className="btn w-full " />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;

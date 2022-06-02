import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();
    
    

    return (
            <div className="">
                <h2>Add a Product </h2>

                <div className=" ">
                    <form >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                        <span className="label-text-alt">Name</span>
                        </label>
                        <input
                        type="name"
                        placeholder="name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                            value: true,
                            message: "Name is required",
                            },
                        })}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                        <span className="label-text-alt">Model</span>
                        </label>
                        <input
                        type="name"
                        placeholder="model name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("model", {
                            required: {
                            value: true,
                            message: "Name is required",
                            },
                        })}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                        <span className="label-text-alt">Price</span>
                        </label>
                        <input
                        type="text"
                        placeholder="Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                            value: true,
                            message: "Price is required",
                            },
                        })}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                        <span className="label-text-alt">Photo</span>
                        </label>
                        <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                            value: true,
                            message: "Image is required",
                            },
                        })}
                        />
                        <label className="label">
                        {errors.name?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                            {errors.name.message}
                            </span>
                        )}
                        </label>
                    </div>
                    <input
                        className="btn w-full max-w-xs text-white"
                        type="submit"
                        value="Add Product"
                    />
                    </form>
                </div>
            </div>
    );
};

export default AddProduct;
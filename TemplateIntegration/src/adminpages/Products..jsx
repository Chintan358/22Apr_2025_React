import { useState } from "react";
import { FaRupeeSign, FaTag } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";
export const Category = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };
    return <> <section className="tab-components">
        <div className="container-fluid">
            {/* <!-- ========== title-wrapper start ========== --> */}
            <div className="title-wrapper pt-30">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="title">
                            <h2>Add Product</h2>
                        </div>
                    </div>
                    {/* <!-- end col --> */}
                    <div className="col-md-6">
                        <div className="breadcrumb-wrapper">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="#0">Dashboard</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href="#0">Forms</a>
                                    </li>
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                    >
                                        Form Elements
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    {/* <!-- end col --> */}
                </div>
                {/* <!-- end row --> */}
            </div>
            {/* <!-- ========== title-wrapper end ========== --> */}

            {/* <!-- ========== Add Product start ========== --> */}
            <div className="form-elements-wrapper">
                <div className="row">
                    <div className="col-lg-6">
                        {/* category start  */}
                        <div className="card-style mb-30">
                            <h6 className="mb-25">Selects</h6>
                            <div className="select-style-1">
                                <label>Category</label>
                                <div className="select-position">
                                    <select>
                                        <option value="">Select category</option>
                                        <option value="">Category one</option>
                                        <option value="">Category two</option>
                                        <option value="">Category three</option>
                                    </select>
                                </div>
                            </div>
                            {/* <!-- end select --> */}
                            <div className="select-style-2">
                                <div className="select-position">
                                    <select>
                                        <option value="">Select category</option>
                                        <option value="">Category one</option>
                                        <option value="">Category two</option>
                                        <option value="">Category three</option>
                                    </select>
                                </div>
                            </div>
                            {/* <!-- end select --> */}
                        </div>

                        {/* <!-- input style start --> */}
                        <div className="card-style mb-30">
                            <h6 className="mb-25">Input Fields</h6>
                            <div className="input-style-1">
                                <label>Add Product Details</label>
                                <input type="text" placeholder="Category" />
                            </div>
                            {/* <!-- end input --> */}
                            <div className="input-style-2">
                                <input type="text" placeholder="Product Full Name" />
                                <span className="icon">
                                    {" "}
                                    <FaTag className="lni lni-user" />
                                    {/* <i className="lni lni-user"></i>{" "} */}
                                </span>
                            </div>
                            {/* <!-- end input --> */}
                            <div className="input-style-3">
                                <input type="number" placeholder="Price" />
                                <span className="icon">
                                    <FaRupeeSign />
                                </span>
                            </div>

                            <div className="input-style-3">
                                <input type="number" placeholder="Stock" />
                                <span className="icon">
                                    <FaBoxesPacking />
                                </span>
                            </div>
                            {/* <!-- end input --> */}
                        </div>
                        {/* <!-- end card --> */}
                        {/* <!-- ======= input style end ======= --> */}

                        {/* <!-- ======= select style start ======= --> */}

                        {/* <!-- end card --> */}
                        {/* <!-- ======= select style end ======= --> */}

                        {/* <!-- ======= select style start ======= --> */}

                        {/* <!-- end card --> */}
                        {/* <!-- ======= input style end ======= --> */}

                        {/* <!-- ======= input switch style start ======= --> */}

                        {/* <!-- ======= input switch style end ======= --> */}
                    </div>
                    {/* <!-- end col --> */}
                    <div className="col-lg-6">
                        {/* <!-- ======= textarea style start ======= --> */}
                        <div className="card-style mb-30">
                            <h6 className="mb-25">Description</h6>
                            <div className="input-style-1">
                                <label>Add Description</label>
                                <textarea placeholder="Description" rows="5"></textarea>
                            </div>
                            {/* <!-- end textarea --> */}

                            {/* ******  Preview Image  ***************************** */}

                            <div className="input-style-3">
                                {/* File Upload */}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="form-control mb-2"
                                />

                                {/* Flex wrapper for image + buttons */}
                                <div className="d-flex align-items-center gap-3">
                                    {/* Preview Box */}
                                    <div
                                        className="d-flex align-items-center justify-content-center border border-secondary rounded"
                                        style={{
                                            width: "200px",
                                            height: "150px",
                                            overflow: "hidden",
                                            backgroundColor: "#f9f9f9",
                                        }}
                                    >
                                        {image ? (
                                            <img
                                                src={image}
                                                alt="Preview"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        ) : (
                                            <p className="text-muted m-0">Image Preview</p>
                                        )}
                                    </div>

                                    {/* Buttons */}
                                    <div className="d-flex flex-column gap-2">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-sm"
                                        >
                                            Upload
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-sm"
                                            onClick={() => setImage(null)}
                                            disabled={!image}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- end preview Image --> */}
                        </div>
                        {/* <!-- ======= textarea style end ======= --> */}

                        {/* <!-- ======= checkbox style start ======= --> */}

                        <div className="card-style mb-30">
                            <h6 className="mb-25">Actions</h6>
                            <div className="d-flex gap-2">
                                <button type="button" className="btn btn-primary">
                                    Update
                                </button>
                                <button type="button" className="btn btn-danger">
                                    Delete
                                </button>
                                <button type="submit" className="btn btn-success">
                                    Submit
                                </button>
                            </div>
                        </div>
                        {/* <!-- ======= checkbox style end ======= --> */}
                    </div>
                    {/* <!-- end col --> */}
                </div>
                {/* <!-- end row --> */}
            </div>
            {/* <!-- ========== form-elements-wrapper end ========== --> */}
        </div>
        {/* <!-- end container --> */}
    </section></>
}
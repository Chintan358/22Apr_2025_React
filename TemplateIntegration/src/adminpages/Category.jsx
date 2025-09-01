import { useEffect, useRef, useState } from "react";
import { FaRupeeSign, FaTag } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, displayCategory } from "../features/products/categorySlice";
export const Category = () => {

    const { token } = useSelector((state) => state.login)
    const categories = useSelector((state) => state.category.data)
    const dispatch = useDispatch()
    const name = useRef()
    const desc = useRef()

    useEffect(() => {

        dispatch(displayCategory())
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()

        const data = {
            name: name.current.value,
            description: desc.current.value,
            token: token
        }

        dispatch(addCategory(data))

    }

    return <>
        <section class="section">
            <div class="container-fluid">

                <div className="row">
                    <div className="col-lg-6">
                        <div class="card-style mb-30">
                            <h6 class="mb-25">Product Category</h6>
                            <form onSubmit={submitHandler}>
                                <div class="input-style-1">
                                    <label>Category Name</label>
                                    <input type="text" ref={name} placeholder="enter category" />
                                </div>
                                <div class="input-style-1">
                                    <label>Category Description</label>
                                    <textarea ref={desc} />
                                </div>
                                <input type="submit" className="btn btn-success" />

                            </form>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card-style mb-30">
                            <h6 class="mb-10">Product Categories</h6>

                            <div class="table-wrapper table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="lead-info">
                                                <h6>Id</h6>
                                            </th>
                                            <th class="lead-email">
                                                <h6>Name</h6>
                                            </th>
                                            {/* <th class="lead-phone">
                                                <h6>Description</h6>
                                            </th> */}

                                            <th colSpan={2}>
                                                <h6>Action</h6>
                                            </th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {categories.map((ele, index) =>
                                            <tr>
                                                <td class="min-width">


                                                    <div class="lead-text">
                                                        <p>{index+1}</p>
                                                    </div>

                                                </td>
                                                <td class="min-width">

                                                    <div class="lead-text">
                                                        <p>{ele.name}</p>
                                                    </div>

                                                </td>
                                                {/* <td class="min-width">

                                                    <div class="lead-text">
                                                        <p>{ele.description}</p>
                                                    </div>

                                                </td> */}
                                                <td class="min-width">

                                                    <div class="lead-text">
                                                        <p>abc</p>
                                                    </div>

                                                </td>
                                                <td class="min-width">

                                                    <div class="lead-text">
                                                        <p>abc</p>
                                                    </div>

                                                </td>

                                            </tr>
                                        )}

                                    </tbody>
                                </table>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    </>
}
import { useEffect, useRef, useState } from "react";
import { FaRupeeSign, FaTag } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, displayCategory } from "../features/products/categorySlice";
import { addProduct } from "../features/products/productSlice";
export const Product = () => {

    const { token } = useSelector((state) => state.login)
    const categories = useSelector((state) => state.category.data)
    const dispatch = useDispatch()

    const [file, setfile] = useState()
    const cat = useRef()
    const name = useRef()
    const desc = useRef()
    const price = useRef()
    const qty = useRef()
    // const file = useRef()

    useEffect(() => {

        dispatch(displayCategory())
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()

        var data = new FormData()
        data.append('file', file)
        data.append('category', cat.current.value)
        data.append('name', name.current.value)
        data.append('description', desc.current.value)
        data.append('price', price.current.value)
        data.append('stock_quantity', qty.current.value)

    


        dispatch(addProduct({ data, token }))


    }

    return <>
        <section class="section">
            <div class="container-fluid">

                <div className="row">
                    <div className="col-lg-6">
                        <div class="card-style mb-30">
                            <h6 class="mb-25">Product</h6>
                            <form onSubmit={submitHandler}>
                                <div class="input-style-1">
                                    <label>Category Name</label>
                                    <select name="" id="" className="form-select" ref={cat}>
                                        {categories.map(ele => <option value={ele._id}>{ele.name}</option>)}
                                    </select>
                                </div>
                                <div class="input-style-1">
                                    <label>Name</label>
                                    <input type="text" ref={name} placeholder="enter category" />
                                </div>
                                <div class="input-style-1">
                                    <label>Product Description</label>
                                    <textarea ref={desc} />
                                </div>
                                <div class="input-style-1">
                                    <label>Price</label>
                                    <input type="text" ref={price} placeholder="enter category" />
                                </div>
                                <div class="input-style-1">
                                    <label>Quantity</label>
                                    <input type="text" ref={qty} placeholder="enter category" />
                                </div>
                                <div class="input-style-1">
                                    <label>Image</label>
                                    <input type="file" placeholder="enter category" onChange={(e) => setfile(e.target.files[0])} />
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
                                                        <p>{index + 1}</p>
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
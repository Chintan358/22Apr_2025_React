import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { displayproduct } from "./features/productSlice";

const App = () => {


  const display = useSelector((state) => state.product)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(displayproduct())
  }, [])

  return <>

    {display.isLoading ? <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div> : <div className="container mt-4">
      <table className="table table-bordered">
        <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>

          <th>Image</th>
        </tr>
        </thead>
        <tbody>
        {display.data.map(ele => <tr key={ele.id}><td>{ele.id}</td><td>{ele.title}</td><td>{ele.price}</td><td><img src={ele.image} alt="" height={50} width={50} /></td></tr>)}
        </tbody>

      </table>
    </div>}


  </>
}


export default App
import { useEffect, useRef, useState } from "react"
import { app } from "./firebase-config"
import { collection, getDoc, getDocs, updateDoc, deleteDoc, addDoc, getFirestore, doc } from "firebase/firestore"

const App = () => {

  const db = getFirestore(app)

  const [datas, setDatas] = useState([]);
  const [editId, setEditId] = useState(null)


  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  let mydata = [];
  const addUser = async (e) => {
    e.preventDefault();

    if (editId) {

      const dataEdit = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
      }
      const docRef = doc(db, "users", editId);
      await updateDoc(docRef, dataEdit)
      setEditId(null);
    }

    else {

      const data = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
      }

      addDoc(collection(db, "users"), data)
      nameRef.current.value = ""
      emailRef.current.value = ""
      phoneRef.current.value = ""
      setEditId(null)
    }
    // setDatas([...datas, data])
  }

  const getUser = async () => {

    const allusers = await getDocs(collection(db, "users"))
    allusers.docs.map(doc => {
      mydata.push({ id: doc.id, name: doc.data().name, email: doc.data().email, phone: doc.data().phone })
    })

    setDatas(mydata)

  }

  const deleteUser = async (id) => {

    console.log(id);
    const userRef = doc(db, "users", id);
    await deleteDoc(userRef)


  }

  const editUser = async (id, data) => {
    nameRef.current.value = data.name;
    emailRef.current.value = data.email;
    phoneRef.current.value = data.phone;
    setEditId(id)
  }

  // var mydata = [];
  useEffect(
    () => {
      // const allusers = await getDocs(collection(db, "users"))
      // allusers.docs.map(doc => {
      //   mydata.push({ id: doc.id, name: doc.data().name, email: doc.data().email, phone: doc.data().phone })
      // })

      // setDatas(mydata)
      getUser()

    }, [datas])



  return <>

    <div className="container m-4">
      <div className="row">
        <div className="col-5">
          <h2>Registration form</h2>
          <hr />
          <form action="" className="d-flex flex-column gap-4" onSubmit={addUser} >
            <input type="text" name="uname" placeholder="Enter username" className="form-control" ref={nameRef} />
            <input type="text" name="email" placeholder="Enter email" className="form-control" ref={emailRef} />

            <input type="text" name="phone" placeholder="Enter phone" className="form-control" ref={phoneRef} />

            <input type="submit" className="btn btn-success" />
          </form>

        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <h2>User Details</h2>
          <hr />
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((ele, i) => <tr key={ele.id}>
                <td>{i + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>
                <td>
                  <div className="d-flex gap-2">
                    <button className="btn btn-danger" onClick={() => deleteUser(ele.id)} >Delete</button>
                    <button className="btn btn-primary" onClick={() => editUser(ele.id, ele)} >Edit</button>
                  </div>
                </td>

              </tr>

              )}
            </tbody>



          </table>
        </div>

      </div>
    </div>

  </>
}

export default App
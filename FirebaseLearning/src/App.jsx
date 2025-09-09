import { app } from './firebase-config'
// import { getDatabase, ref, set } from 'firebase/database'
import { getFirestore, collection, addDoc,getDocs,getDoc } from "firebase/firestore";

const App = () => {
  const db = getFirestore(app)
  const collectionRef = collection(db, "users")
  const adddata = async () => {
    try {
      const docRef = await addDoc(collectionRef, {
        name: "John Doe",
        email: "john@example.com",
        phone: "74859685"
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const fetchdata = async ()=>{
       const querySnapshot = await getDocs(collectionRef);
       querySnapshot.docs.map(doc=>{
        console.log(`${doc.id} - ${doc.data().name} - ${doc.data().email }- ${doc.data().phone}`);
        
       })
       
  }


  // const adddata = () => {

  //   set(ref(db, 'users/misbah'), {
  //     name: "misbah",
  //     email: "misbah@gmail.com",
  //     phone: "9585968574"
  //   })

  // }

  return <>
    <button onClick={adddata}>add data</button>
    <button onClick={fetchdata}>Fetch all data</button>
  </>
}

export default App
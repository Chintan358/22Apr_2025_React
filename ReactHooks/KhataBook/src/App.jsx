import { Form } from "./components/Form";
import { Table } from "./components/Table";
import BookContextProvider from "./store/BookContext";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-3">

        <BookContextProvider>
          <Form></Form>
          <Table></Table>
        </BookContextProvider>
        
        </div>
      </div>
    </>
  );
};

export default App;

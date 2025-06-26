import { useContext, useRef } from "react"
import { BookContext } from "../store/BookContext"


export const Form = ()=>{

    const {addData} =   useContext(BookContext)

    const date = useRef()
    const name = useRef()
    const amt = useRef()
    const credit = useRef()
    const debit = useRef()

    const SubmitHandler = (e)=>{

      e.preventDefault()

      var dbt=0
      var crd=0
      debit.current.checked ? dbt=amt.current.value : crd=amt.current.value

      const data = {
        date : date.current.value,
        name: name.current.value,
        amt : amt.current.value,
        credit : crd,
        debit : dbt
      }

     
      


      addData(data)

    }

    return <>
     <div className="col-4 card p-3">
            <h1> My Khatabook </h1>
              <form onSubmit={SubmitHandler}>
                <div className="mb-3">
                  <label htmlFor="dateKhata" className="form-label">
                    Date :
                  </label>
                  <input type="date" className="form-control" ref={date} id="dateKhata" />
                </div>
                <div className="mb-3">
                  <label htmlFor="nameKhata"  className="form-label">
                    Name :
                  </label>
                  <input type="text" className="form-control" ref={name} id="nameKhata" />
                </div>
                <div className="mb-3">
                  <label htmlFor="numberKhata"  className="form-label">
                    Amount :
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="numberKhata"
                    ref={amt}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Select Options :</label>
                  <div className="mt-2">
                    <label class="form-check-label" htmlFor="optionsDebit">
                      Debit{" "}
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="options"
                      id="optionsDebit"
                      ref={debit}
                      defaultChecked  
                    />
                    <label className="form-check-label" htmlFor="optionsCredit">
                      Credit{" "}
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="options"
                      id="optionsCredit"
                      ref={credit}
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
          </div>
    </>
}
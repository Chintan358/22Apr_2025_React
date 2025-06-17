

export const Form = ()=>{
    return <>
     <div className="col-4 card p-3">
            <h1> My Khatabook </h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="dateKhata" className="form-label">
                    Date :
                  </label>
                  <input type="date" className="form-control" id="dateKhata" />
                </div>
                <div className="mb-3">
                  <label htmlFor="nameKhata" className="form-label">
                    Name :
                  </label>
                  <input type="text" className="form-control" id="nameKhata" />
                </div>
                <div className="mb-3">
                  <label htmlFor="numberKhata" className="form-label">
                    Amount :
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="numberKhata"
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
                      id="optionsKhata"
                    />
                    <label class="form-check-label" htmlFor="optionsCredit">
                      Credit{" "}
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="options"
                      id="optionsKhata"
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
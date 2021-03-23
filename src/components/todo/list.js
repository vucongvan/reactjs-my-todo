function List(params) {
    return (
        <div className="cards">
            <div className="card">
              <div className="card-block">
                <button
                  id="delete"
                  type="button"
                  className="btn btn-link float-right"
                >
                  ❌
                </button>
                <button
                  id="done"
                  type="button"
                  className="btn btn-link float-right mr-3"
                >
                  ✔️
                </button>
                <p className="card-title lead">Learn React</p>
              </div>
            </div>
            <div className="card">
              <div className="card-block">
                <button
                  id="delete"
                  type="button"
                  className="btn btn-link float-right"
                >
                  ❌
                </button>
                <button
                  id="done"
                  type="button"
                  className="btn btn-link float-right mr-3"
                >
                  ✔️
                </button>
                <del>
                  <p className="card-title lead">Write HTML in my JavaScript</p>
                </del>
              </div>
            </div>
          </div>
    );
}

export default List;
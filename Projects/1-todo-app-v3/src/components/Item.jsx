
function Item({todoName , dueDate,f}){

  return <div className="container">
      <div className="row my-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{dueDate}</div>
        <div className="col-4"><button type="button" className="btn btn-danger my-btn" onClick={()=>f(todoName)}>Delete</button></div>
      </div>
  </div>
}

export default Item;
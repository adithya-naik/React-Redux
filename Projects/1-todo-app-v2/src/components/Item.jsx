
function Item({todoName , dueDate}){

  return <div class="container">
      <div class="row my-row">
        <div class="col-4">{todoName}</div>
        <div class="col-4">{dueDate}</div>
        <div class="col-4"><button type="button" class="btn btn-danger my-btn">Delete</button></div>
      </div>
  </div>
}

export default Item;
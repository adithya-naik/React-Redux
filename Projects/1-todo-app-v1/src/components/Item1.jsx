function Item1(){

  let task = "Buy Milk"
  let date = "10/9/2024"
  return <div class="container">
      <div class="row my-row">
        <div class="col-4">{task}</div>
        <div class="col-4">{date}</div>
        <div class="col-4"><button type="button" class="btn btn-danger my-btn">Delete</button></div>
      </div>
  </div>
}

export default Item1;
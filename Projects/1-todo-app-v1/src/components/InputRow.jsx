function InputRow() {
  return (
    <div class="container">
      <div class="row my-row">
        <div class="col-4">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success my-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputRow;


// import React from 'react'

// const InputRow = () => {
//   return (
//     <div>
//       <h1 className='text-center text-danger bg-warning'>Input row</h1>
//     </div>
//   )
// }

// export default InputRow




function ErrorMsg(props){
  let recieved_list = props.list
  return   <>
  {recieved_list.length===0 && <h6>List is Empty,Go and add something.</h6>}
  </> 

}

export default ErrorMsg;
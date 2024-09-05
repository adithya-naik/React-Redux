function Reusable(){
  let num = Math.random()*100;
  return <p>random number : {Math.round(num)}</p>
}

export default Reusable;
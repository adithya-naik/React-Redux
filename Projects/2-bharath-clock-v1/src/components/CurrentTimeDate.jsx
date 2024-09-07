function CurrentTimeDate(){
  let timeDate = new Date();
  return <p className="lead">Current Time : {timeDate.toLocaleTimeString()} <br /> Current Date : {timeDate.toLocaleDateString()}</p>
}

export default CurrentTimeDate;
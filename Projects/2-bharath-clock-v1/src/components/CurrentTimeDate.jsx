function CurrentTimeDate(){
  let timeDate = new Date();
  return <p className="lead">Current Time : {timeDate.toLocaleTimeString()} - Current Date : {timeDate.toLocaleDateString()}</p>
}

export default CurrentTimeDate;
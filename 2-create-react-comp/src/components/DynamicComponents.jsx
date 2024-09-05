function DynamicComponents(){
  let num = 343;
  let name = 'Adithya';
  let fullname = () => {
    return "Jatoth Adithya Naik"
  }
  return <p>
    Notification : {num} - Hey,{name} your full name is {fullname()}.
  </p>
}

export default DynamicComponents;
function akan() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let sex = document.getElementById("gender").value;
  let wday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  let mname = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  let fname = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  if (day < 1 || day > 31) {
    return  document.getElementById("result").innerHTML = "Enter Valid Date";
  }
  if (month < 1 || month > 12) {
    return  document.getElementById("result").innerHTML = "Enter Valid Date";
  }
  if (year < 1900 || year > 2090) {
    return  document.getElementById("result").innerHTML = "Enter Valid Date";
  }
  if (month == 2 && day < 1 || day > 29) {
    return  document.getElementById("result").innerHTML = "Enter Valid Date";
  }
  let gdate = new Date(`${year}-${month}-${day}`);
  let b = gdate.getDay();
  console.log(b);
  if (sex == "male"){
    return  document.getElementById("result").innerHTML = wday[b]+" : "+ mname[b];
  }
  if (sex == "female")
  {
      return  document.getElementById("result").innerHTML = wday[b]+" : "+ fname[b];
    }
}

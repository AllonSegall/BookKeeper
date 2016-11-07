function myFunction(){
  document.getElementById('t1').innerHTML = "read more books";
}

var funClick = function(){
  if (document.getElementById("myPassword").value.length < 6) {
    document.getElementById("msg").innerHTML = "password too short";
    document.getElementById("msg").style.backgroundColor = "red";
  } if (document.getElementById("myPassword").value !== document.getElementById("rePass").value) {
    document.getElementById("msg").innerHTML = "password must match";
    document.getElementById("msg").style.backgroundColor = "red";
  } else {
    document.getElementById("msg").innerHTML = "password saved";
    document.getElementById("msg").style.backgroundColor = "green";
  }
};

document.getElementById("btnSU").onclick=funClick;

student_name=[];
function submit(){
var name1=document.getElementById("student1").value;
var name2=document.getElementById("student2").value;
var name3=document.getElementById("student3").value;
var name4=document.getElementById("student4").value;
var name5=document.getElementById("student5").value;
student_name.push(name1);
student_name.push(name2);
student_name.push(name3);
student_name.push(name4);
student_name.push(name5);
console.log(student_name)
document.getElementById("display").innerHTML=student_name;
document.getElementById("submit").style.display="none"
document.getElementById("sort").style.display="inline-block"
}
function sort(){
    student_name.sort();
    document.getElementById("display").innerHTML=student_name;
}



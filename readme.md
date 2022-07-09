//add student
type:post
url:-http://localhost:4000/api/student/add
payload:-
{
    "name":"Awaiz1234",
    "age":"12",
    "class":"11",
    "schoolName":"GWSS",
    "fatherName":"fname",
    "phoneNumber":"7788990099"
}


//admin list students 
type:post
url:-http://localhost:4000/api/admin/student/list
payload;-
{
    "email":"rahulsinha5324@gmail.com",
    "password":"rahul5324"
}

//anyone can see list
type:get
url:http://localhost:4000/api/student/get


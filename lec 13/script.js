var database={
    user:"Talha",
    age:22
}

var newsfeed=[{
  user:"Ahmad",
  age:19
},{
    user:"Ali",
    age:21
}]

function check(database,newsfeed) {
   var name=prompt("Enter Name");
   if(name===database.user)
   {
       alert("Name:"+newsfeed[0].user);
   }
   else
       alert("User not found");
}
check(database,newsfeed);
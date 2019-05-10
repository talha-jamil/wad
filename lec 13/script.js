var database=[{
    user:"Talha",
    pass:"22"
},{
    user:"Ali",
    pass:"21"
},{
    user:"Ahmad",
    pass:"19"
},{
    user:"Usman",
    pass:"20"
}]

var newsfeed=[{
  user:"Ahmad",
  age:19
},{
    user:"Ali",
    age:21
}]

function check(database,newsfeed) {
   var name=prompt("Enter Name");
   var pwd=prompt("Enter Password");
   for(var i=0;i<database.length;i++)
   {
       if(name===database[i].user && pwd===database[i].pass)
       {
           for(var j=0;j<newsfeed.length;j++)
           {
               console.log(newsfeed[j].user+newsfeed[j].age);
           }
       }
   }
}
check(database,newsfeed);
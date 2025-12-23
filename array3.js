let color=['red','orange','blue','yellow','grey'];
let n=[1,2,3,4,5,6,7,8,9];
console.log(color);
console.log(n)
let color=['red','orange','blue','yellow','grey'];
console.log(color);
console.log(color[1]);//accessing array using index value
console.log(color);
let cricket=['gowthum','karthik']
console.log(cricket);

console.log(color[color.length-1]);//acces last element in an array
console.log(color);


color[1]="pinaple";//modifying array
console.log(color);


color.push("lemon");//it add element  at the end of the array
console.log(color);



color.pop();//it will remove element from the end
console.log(color);


color.splice(1,2);
// it removes the element based on the index value
console.log(color);

color.unshift("white");//it add element in firdt index in array
console.log(color)


color.shift();//it remove the first element in array
console.log(color)

console.log(color.length)//it will print the number of element present in an array

color.length=10;//increasing the array length
console.log(color.length)
console.log(color)

color.length=5;//decreasing the array length
console.log(color.length)



//array concatination
let a=[1,2,3];
let b=[4,5,6];
let merge=a+b;//if we use the = operator it will be merge the 1,2,34,5,6
//[ 1, 2, 3, 4, 5, 6 ] like this it conver t arry elemt into string formate
console.log(merge)
let concatearray=a.concat(b);//concating array
console.log(concatearray);

//we can also concate using "#spread" operator
let team=['rcb','csk','mi'];
console.log(team);
let player=['k','m','h'];
console.log(player);
let combine=[...team, ...player]
console.log(combine)


//iterating an array

let c=['HTML','CSS','JS'];
//iterating using normal for
for(let i=0;i<c.length;i++){
    console.log(c[i]);
}
//iterating using for each method
c.forEach(function myfnc(){//iterate every element in one each iteration
console.log(c)
})


//type conversion

console.log(typeof c);
console.log(c.toString());
console.log(typeof c);

//slice means removing values on values

let ele=[1,2,3,4,5,6,7,8,9];
console.log(ele);
let subele=ele.slice(2,5);//slice get some elemet in array it not remove the element it take copy of the elkement 
console.log(subele)

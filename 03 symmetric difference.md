# Symmetric Difference

Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).


# Solution:
```javascript
function sym(args) {
  var allArg = [];
  var i = 0, j=0;
  
  //Creat arr with [] as many as arguments
  for(i=0;i<arguments.length;i++){allArg.push([]);}
  
  //Remove Repetition
  for(i=0;i<arguments.length;i++){
    for(j=0;j<arguments[i].length;j++){
      var index = allArg[i].indexOf(arguments[i][j]);
      if(index == -1){
        allArg[i].push((arguments[i][j]));
      }
    }
  }  
  
  var arr=[];
  function kareem(arr1){
    var j = 0,index =0;
    for(j=0;j<arr1.length;j++){
         index = arr.indexOf(arr1[j]);
        if(index !==-1)
          arr.splice(index,1);
        else
          arr.push(arr1[j]);
        }
  }
  for(i=0;i<allArg.length;i++){
    kareem(allArg[i]);  
  }
  
  return arr;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);

```

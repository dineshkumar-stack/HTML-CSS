a = {"a":1,"b":2,"c":3};
b = {"b":21,"c":3,"a":1};

len = Object.keys(b)
for(var i of len){
    console.log(b[i]) 
}

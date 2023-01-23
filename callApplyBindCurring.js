// 1.) Using call
var obj = {num : 2};
var addToThis = function(a){
	return this.num+ a;
};
console.log(addToThis.call(obj, 3));

// 2.) Using apply
var arr = [ 1, 2, 3 ];
var addToThis = function(a, b, c){
	return this.num + a + b + c;
};
console.log(addToThis.apply(obj, arr));

// 3.) using BIND
var obj = {num : 2};
var addToThis = function(a, b, c){
	return this.num + a + b + c;
};
var bound = addToThis.bind(obj);
console.log(bound(1, 2, 3));

/* 4.) Create a new Object called Student with age 20.
        write a function which prints the age of the 
        student from the student object     */
var Student = 
{   age : 20,
    getAge: function(){
        return this.age
    }
};
var bound = Student.getAge.bind(Student);
console.log(bound());

// 5.) Using currying
let multiply = function(x, y){
    console.log(x * y);
}
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

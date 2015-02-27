/*Uses WarmJS Library*/


/*Public Class Instance within the warm namespace*/
var instance1 = new warm.exampleClass1();

/*Access A method in the class*/
alert(instance1.property1);

/*Assign a value from outside*/
instance1.property1 = "assigned value";

/*Display Value after assignment operation*/
alert(instance1.property1);


/*Access A method in the class*/
instance1.method();

/*exampleClass2 Instance*/
var instance2 = new warm.exampleClass2();

/*Private Variables can not be accessed from the outside*/
//Uncomment the below section to see the output
//alert(instance2.privateProperty1); //Displays undefined since the inside variables are available to exampleClass2;

/*Private Methods can not be accessed from outside*/
//Uncomment the below section to see the output
//instance2.privateMethod(); //



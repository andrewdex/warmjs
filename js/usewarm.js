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


/*Instances of Coder */
var coder1 = new warm.Coder();
var coder2 = new warm.Coder();

/*Lets name the coders*/
coder1.name = "Dilusha";
coder2.name = "Andrew";

/*Lets make coder1 Hit Enter over coder2*/
coder1.hitEnter(coder2);//This will deduct Andrew's codeScore by 10 points
alert(coder2.name + "'s codeScore is " + coder2.codeScore);

/*Use of Prototype Property*/
//Adding a method to coder
warm.Coder.prototype.debug = function (toCoder) {

    toCoder.codeScore += 10;

};

coder1.debug(coder2);
alert("Prototype ::" + coder2.name + "'s Code Score has been increased upto " + coder2.codeScore);

/*use prototype property to set new variables*/



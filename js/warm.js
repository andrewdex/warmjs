/*
 * Warm JS
 * Easy to Learn JavaScript Library Written with Best Practices.
 *
 * */

(function () {


    /*Global Namespace*/
    var warm = {


        /*Example Class*/
        exampleClass1: function () {

            /*Example Property*/
            this.property1 = "hell yeah";

            /*Example Method In the Example Class*/
            this.method = function () {

                alert("this is a method from this class");
            }
        },
        /*This class includes private variable declaration and private method declaration*/
        exampleClass2: function () {

            var privateProperty1 = "hi private !";

            var privateMethod = function () {

                alert("I am private so, outsiders ! Beware !");

            }

        }

    };


    window.warm = warm;

}());


/*Public Class Instance within the warm namespace*/
var instance1 = new warm.exampleClass1();

/*Access A method in the class*/
alert(instance1.property1);

/*Access A method in the class*/
instance1.method();

/*exampleClass2 Instance*/
var instance2 = new warm.exampleClass2();

/*Private Variables can not be accessed from the outside*/
alert(instance2.privateProperty1); //Displays undefined since the inside variables are available to exampleClass2;

/*Private Methods can not be accessed from outside*/
instance2.privateMethod(); //

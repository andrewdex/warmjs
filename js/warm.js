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

        },
        /*Playing With OOP*/
        Coder: function () {

            this.name;
            this.codeScore = 100;
            this.hitEnter = function (otherCoder) {

                otherCoder.codeScore -= 10;
                alert(this.name + "Has Pressed Enter and Damaged to " + otherCoder.name);

            }


        }

    };


    /*Expose the namespace variable to window object*/
    window.warm = warm;

}());


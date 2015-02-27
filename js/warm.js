/*
 * Warm JS
 * Easy to Learn JavaScript Library Written with Best Practices.
 * Version : 0.1 Beta
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
        /*Playing With OOP - without using prototype property*/
        Coder: function () {


            this.name;
            this.codeScore = 100;
            this.hitEnter = function (otherCoder) {

                otherCoder.codeScore -= 10;
                alert(this.name + " Has Pressed Enter and Damaged to " + otherCoder.name);

            }


        },
        /*OOP :: Advanced Inheritance */
        /*Parent Class Implementation*/
        ParentClass: function () {

            this.parentProperty1 = "Hell Yeah, I am the parent !";
            this.parentMethod = function parentMethod(arg1) {

                return arg1 + " This is parent in the house !";

            }

        },
        /*Child Class Implementation*/
        ChildClass: function () {

            this.childProperty1 = "Hell Yeah, I am the Child !";
            this.childMethod = function childMethod(arg1) {

                arg1 + " This is child in the house !";

            }

        },

        /*An Object array inside the main Warm Namespace  as a library section*/
        lib: {

            /*Sorting Library*/
            sorting: {

                bubbleSort: function (arr) {

                    var cleanArray;
                    if (arr instanceof Array) {
                        cleanArray = arr;


                    } else {
                        if (arr !== undefined || arr !== "") {

                            cleanArray = arr.split(",");

                        }
                    }

                    var swapped;
                    do {
                        swapped = false;
                        for (var i = 0; i < cleanArray.length - 1; i++) {

                            if (cleanArray[i] > cleanArray[i + 1]) {
                                var temp = cleanArray[i];
                                cleanArray[i] = cleanArray[i + 1];
                                cleanArray[i + 1] = temp;
                                swapped = true;

                            }


                        }

                    } while (swapped);

                    return cleanArray;
                }


            }



        }




    };


    /*Expose the namespace variable to window object*/
    window.warm = warm;

}());


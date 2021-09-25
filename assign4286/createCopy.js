function modifyArray(array) {


    // ! first way to copy an array   (not good way)

    var cpArray1 = array  /* if we copy array in this way , then after changing 
    the value  of copied array ,original array will also change 
    for example :
    if we do cpArray1[0] = 15 and if we do console.log(array[0]) it will print 15 because value is get changed
    */


    // ? Second way to copy an array

    var cpArray2 = Object.assign([],array)    /* if we copy array in this way , then after changing 
    the value  of copied array ,original array will not change 
    for example :
    if we do cpArray2[0] = 15 and if we do console.log(array[0]) it will print
     the first element of original array because value is not changed
    */

    // ? This is the third way to copy an array , using spread operator

    var cpArray3 = [...array]     /* if we copy array in this way , then after changing 
    the value  of copied array ,original array will not change 
    for example :
    if we do cpArray2[0] = 15 and if we do console.log(array[0]) it will print
     the first element of original array because value is not changed
    */

     // ? this is the forth way to copy an array , using slice method

     var cpArray4 = array.slice()  /* if we copy array in this way , then after changing 
     the value  of copied array ,original array will not change 
     for example :
     if we do cpArray2[0] = 15 and if we do console.log(array[0]) it will print
      the first element of original array because value is not changed
     */

      // ? this is the fifth way to copy an array , using Array.from() method

      var cpArray5 = Array.from(array)  /* if we copy array in this way , then after changing 
      the value  of copied array ,original array will not change 
      for example :
      if we do cpArray2[0] = 15 and if we do console.log(array[0]) it will print
       the first element of original array because value is not changed
      */


       // ? Sixth way to copy an array using loop
       /* we can also copy an array using loop we can create another array and push all 
       element of one arayy to another array  */

       /* in this method also when we change the value of cloned array original array will not change */
      

    

}

modifyArray([1,2,3,4,6,7])
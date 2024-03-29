//** a window is  */

/** when a javascript program is created whenever the function execution is created 
 * a global execution is created
 along that this is created this points to global level
 in case of browsers it is window*/

// * this which refer to the current execution context. this is always
//refer to an object and depends on how function is called.
//There are 7 different cases where the value of this varies.

/* In the global context or inside a function this refers to the window object.
Inside IIFE (immediate invoking function) if you use "use strict", value of this is undefined.
 To pass access window inside IIFE with "use strict", you have to pass this.
While executing a function in the context of an object, the object becomes the value of this
Inside a setTimeout function, the value of this is the window object.
If you use a constructor (by using new keyword) to create an object, the value of
 this will refer to the newly created object.
You can set the value of this to any arbitrary object by passing the object as the
 first parameter of bind, call or apply
For dom event handler, value of this would be the element that fired the event */

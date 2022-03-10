/* When you extend an object, you change its behavior.

Changing the behavior of an object that will only be used by your own code is fine. 
But when you change the behavior of something that is also used by other code
 there is a risk you will break that other code.

When it comes adding methods to the object and array classes in javascript, t
he risk of breaking something is very high, due to how javascript works. 
Long years of experience have taught me that this kind of stuff causes all
 kinds of terrible bugs in javascript.

If you need custom behavior, it is far better to define your own class
 (perhaps a subclass) instead of changing a native one. That way you will not
  break anything at all.

The ability to change how a class works without sub classing 
it is an important feature of any good programming language, 
but it is one that must be used rarely and with caution. */

Date.prototype.nextDay = function () {
  var currentDate = this.getDate();
  return new Date(this.setDate(currentDate + 1));
};

var date = new Date();
date;
date.nextDay();

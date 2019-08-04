{
  let num = 10;
  String(num);       // returns a string from a number variable x
  String(123);       // returns a string from a number literal 123
  String(100 + 23);  // returns a string from a number from an expression

  num.toString();
  (123).toString();
  (100 + 23).toString();

  false.toString();   // returns "false"
  true.toString();    // returns "true"

  const str = '10';
  num = +str;         // 10
  num = +'john';      // NaN
}

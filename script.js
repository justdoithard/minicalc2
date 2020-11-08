        var res = "";

        function getInput(x) {
          nan = document.getElementById("inputNumber").value;
          if (nan === "NaN" || nan === "Infinity" || nan ===  "undefined" || nan === "-Infinity") {   // delete Nan,infinity,undefined after entering the numbers.
            document.getElementById("inputNumber").value = "";
          }
          if (res && (x >= 0 || x <= 0)) {
            res = false;
            document.getElementById("inputNumber").value = "";
            document.getElementById("inputNumber").value += x;
        
          } else {
            document.getElementById("inputNumber").value += x;
            res = false;
            var y = [];
            y = document.getElementById("inputNumber").value;
            p = y.length;
            if ((y[p - 2] === "*" || y[p - 2] === "/" || y[p - 2] === "%" || y[p - 2] === "+" || y[p - 2] === "-" || y[p - 2] === ".") && (x === "*" || x === "/" || x === "%" || x === "+" || x === "-" || x === ".")) {
              document.getElementById("inputNumber").value = y.slice(0, p - 1);
        
            }
        
          }
        }
        
        function calculate() {
          exp = "";
          exp = document.getElementById("inputNumber").value;
          l = exp.length;
          if (exp[0] == '*' || exp[0] == '/' || exp[0] == '%' || exp[0] == '+' || exp[l - 1] == '+' || exp[l - 1] == '%' || exp[l - 1] == '/' || exp[l - 1] == '*' || exp[l - 1] == '-') {
            document.getElementById("inputNumber").value = "";
          } else {
            exp = document.getElementById("inputNumber").value;
            res = eval(exp);
            console.log(res);
            document.getElementById("inputNumber").value = res;
            if(res===undefined){
              document.getElementById("inputNumber").value = "";
            }
          }
        }


        function Clear() {
          Clr = document.getElementById("inputNumber").value;
          if (Clr === "NaN" || Clr === "Infinity" || Clr === "undefined" || Clr === "-Infinity") {
            document.getElementById("inputNumber").value = "";
          } else {
            var value = document.getElementById("inputNumber").value;`enter code here`
            document.getElementById("inputNumber").value = value.substr(0, value.length - 1);
          }
        
        }
        
        function allClear() {
          document.getElementById("inputNumber").value = "";
        }

        
        
        
        
        
        
        
        
        
        
        
        
        //var number = document.getElementById('number')

        /*var current = 0
        var memory = 0
        var MAXLENGTH = 40
        
        function getNumber(dig) {
        if (current.length > MAXLENGTH)
        { current = current + ""
          current = "Aargh! Too long"; //limit length
        } else
          { if ((eval(current) == 0)
              && ( current.indexOf('.') == -1)
            )
            { current = dig;
            } else
              { current = current + dig;
              };
       };
        document.minicalc.number.value = current;
        }

        
        function Dot()                  //PUT IN "." if appropriate.
        {
         if ( current.length == 0)     //no leading ".", use "0."
           { current = "0.";
           } else
           {  if ( current.indexOf('.') == -1)
                { current = current + ".";
           };   };
         document.minicalc.number.value = current;
        }
        
        
        
        
        
        
        
        
        
        
        
        /*Memory  = "0";
        Current = "0";
        Operation = 0;


        function AddDigit(dig)          //ADD A DIGIT TO DISPLAY (kept as 'Current')
       {if (Current.length > MAXLENGTH)
        { Current = "Aargh! Too long"; //limit length
        } else
          { if (    (eval(Current) == 0)
              && (Current.indexOf(".") == -1)
            )
            { Current = dig;
            } else
              { Current = Current + dig;
              };
       };
        document.minicalc.a.value = Current;
       }

       function clear()                //CLEAR ENTRY
       { Current = "0";
         document.minicalc.a.value = Current;
       }

       function allclear()             //Clear ALL entries!
       { Current = "0";
         Operation = 0;                //clear operation
         Memory = "0";                  //clear memory
         document.minicalc.a.value = Current;
       }

       function Operate(op)            //STORE OPERATION e.g. + * / etc.
       {
         if (op.indexOf("*") > -1) { Operation = 1; };       //codes for *
         if (op.indexOf("/") > -1) { Operation = 2; };       // slash (divide)
         if (op.indexOf("+") > -1) { Operation = 3; };       // sum
         if (op.indexOf("-") > -1) { Operation = 4; };       // difference

         Memory = Current;                 
         Current = "";                     
         document.minicalc.a.value = Current;
       }

       function Calculate()            //PERFORM CALCULATION (= button)
       { 
        if (Operation == 1) { Current = eval(Memory) * eval(Current); };
        if (Operation == 2) { Current = eval(Memory) / eval(Current); };
        if (Operation == 3) { Current = eval(Memory) + eval(Current); };
        if (Operation == 4) { Current = eval(Memory - Current); };
          Operation = 0;                //clear operation
          Memory    = "0";              //clear memory
          document.minicalc.a.value = Current;
       }
        
       function Calculate()
       { 
        if (op.indexOf("+") > -1) { Current = Num(a) + Num(b); };
        if (op.indexOf("-") > -1) { Current = a - b; }; 
        if (op.indexOf("*") > -1) { Current = a * b; }; 
        if (op.indexOf("/") > -1) { Current = a / b; };
          Operation = 0;                //clear operation
          Memory    = "0";              //clear memory
          document.minicalc.c.value = Current;
       }

       //-------------------------------------------------------------------------------//

        /**function Operation()
        {
          a = document.minicalc.a.value;
          b = document.minicalc.b.value;
         if (op.indexOf("*") > -1) { Operation = 1; };        //codes for *
         if (op.indexOf("/") > -1) { Operation = 2; };       // slash (divide)
         if (op.indexOf("+") > -1) { Operation = 3; };       // sum
         if (op.indexOf("-") > -1) { Operation = 4; };       // difference

         document.minicalc.result.value = Current;
        }

        function Calculate(dig)
        { 
         if (Operation == 1) { Current = a * b; };
         if (Operation == 2) { Current = a / b; };
         if (Operation == 3) { Current = a + b; };
         if (Operation == 4) { Current = a - b; };
         
         Operation = 0;
         Memory    = "0";
         document.minicalc.result.value = Current;
        }**/
        


 
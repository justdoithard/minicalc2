        var res = "";

        function getInput(x) {
          nan = document.getElementById("inputNumber").value;
          if (nan === "NaN" || nan === "Infinity" || nan ===  "undefined" || nan === "-Infinity") {
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

        


 

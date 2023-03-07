function add(m, n) {
    let answer = m + n;
    return answer;
  }
  
  function sub(x, y) {
    return x - y;
  }
  
  // console.log(add(10, 8))
  // console.log(sub(38, 8))
  
  function mul(x, y) {
    return x * y;
  }
  // console.log(mul(5,7))
  function div(x, y) {
    return x / y;
  }
  // console.log(div(40,10))
  
  let calc1 = document.querySelector("#c1");
  
  calc1.addEventListener("click", () => {
    document.querySelector("#display").innerText += 1;
  });
  
  function display(x) {
    document.querySelector("#display").innerText += x;
  }
  
  let opr1 = 0;
  let opr2 = 0;
  let operator = "";
  document.querySelector("#cAdd").addEventListener("click", () => {
    opr1 = parseFloat(document.querySelector("#display").innerText);
    operator = "add";
  
    document.querySelector("#display").innerText = "";
  });
  
  document.querySelector("#cMin").addEventListener("click", () => {
    opr1 = parseFloat(document.querySelector("#display").innerText);
    operator = "min";
  
    document.querySelector("#display").innerText = "";
  });
  document.querySelector("#cMul").addEventListener("click", () => {
    opr1 = parseFloat(document.querySelector("#display").innerText);
    operator = "mul";
  
    document.querySelector("#display").innerText = "";
  });
  document.querySelector("#cDiv").addEventListener("click", () => {
    opr1 = parseFloat(document.querySelector('#display').innerText);
    operator = "div";
    document.querySelector('#display').innerText = '';
  });
  
  document.querySelector("#cEql").addEventListener("click", () => {
  
    opr2 = parseFloat(document.querySelector("#display").innerText)
  
  if (operator == "add") {
      document.querySelector("#display").innerText = add(opr1, opr2);
    } else if (operator == "min") {
      document.querySelector("#display").innerText = sub(opr1, opr2);
    } else if (operator == "mul") {
      document.querySelector("#display").innerText = mul(opr1, opr2);
    } else if (operator == 'div') {
      document.querySelector('#display').innerText = div(opr1, opr2);
  }
})
  document.querySelector("#c4").addEventListener("click", () => {
    document.querySelector("#display").innerText = 4;
  });
  function clr() {
    document.querySelector("#display").innerText = "";
    opr2 = 0;
    opr1 = 0;
  }
  document.querySelector("#c7").addEventListener("click", () => {
    document.querySelector("#display").innerText += 7;
  });
  document.querySelector("#c8").addEventListener("click", () => {
    document.querySelector("#display").innerText += 8;
  });
  document.querySelector("#c9").addEventListener("click", () => {
    document.querySelector("#display").innerText += 9;
  });
  document.querySelector("#c0").addEventListener("click", () => {
    document.querySelector("#display").innerText += 0;
  });
  // function dot() {
  //   document.querryselector("display").innerText = ""

  // }
  // document.querySelector('#cdot').addEventListener("click", () => {
  //   document.queryselector('#display').innerText += 
  //   document.write("opr1.toFixed(1) is : " + num.toFixed(1));
  // })
  // console.log(dot)



console.log(Math.sqrt(9))
function name(params) {
    
}
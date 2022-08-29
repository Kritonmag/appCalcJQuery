let obj
let result
let resultArr = []

// Функции

function specObject(name) {
  this.valueFirst = '';
  this.valueSecond = '';
  this.operand = name;
}

function resultObj(first,second,operand) {
  this.first = first;
  this.second = second;
  this.operand = operand;
  this.result = $('#result').text();
  this.time = new Date;
}

function meaning() {
  firstOperand.oninput = function() {
    obj.valueFirst = firstOperand.value;
  }
  secondOperand.oninput = function() {
    obj.valueSecond = secondOperand.value;
  }
}

let addition = function(first, second) {
  return Number(first) + Number(second);
}

let subtraction = function(first, second) {
  return Number(first) - Number(second);
}

let multiplication = function(first, second) {
  return Number(first) * Number(second);
}

let division = function(first, second) {
  return Number(first) / Number(second);
}

let additionStr = function(first, second) {
  return first + second;
}

function equateArr(x,y,z) {
  for (i = 0; i < x.length; i++) {
    z.push(Number(x[i]) + Number(y[i]))
  }
  return
}

let additionArr = function(first, second) {
  let newArr = []
  first = first.split(',');
  second = second.split(',');
    if(first.length == second.length) {
      equateArr(first,second,newArr)
    }
    if(first.length > second.length) {
      while (first.length > second.length) {
        second.push('0');
      }
      equateArr(first,second,newArr)
    }
    if(first.length < second.length) {
      while (first.length < second.length) {
        first.push('0');
      }
      for (i = 0; i < second.length; i++) {
        newArr.push(Number(first[i]) + Number(second[i]))
      }
    }
  return newArr;
}

// Выполнение кода

$('.btnOperator').click(function() {
  $('.areaOperator .btnOperator').removeClass('pressedButton')
    $(this).addClass('pressedButton');
    firstOperand.value = '';
    secondOperand.value = '';
    $('#result').text('');
    obj = new specObject(this.id);
    if(obj.operand == 'negativeMeaning') {
      $('#areaOperandSecond').addClass('areaOperandDisplayNone')
    }
})

meaning()

$('#resultBtn').click(function() {
  if(obj.operand == 'addition') {
    $('#result').text(addition(obj.valueFirst,obj.valueSecond))
  }
  if(obj.operand == 'subtraction') {
    $('#result').text(subtraction(obj.valueFirst,obj.valueSecond))
  }
  if(obj.operand == 'multiplication') {
    $('#result').text(multiplication(obj.valueFirst,obj.valueSecond))
  }
  if(obj.operand == 'division') {
    $('#result').text(division(obj.valueFirst,obj.valueSecond))
  }
  if(obj.operand == 'additionStr') {
    $('#result').text(additionStr(obj.valueFirst,obj.valueSecond))
  }
  if(obj.operand == 'additionArr') {
    $('#result').text(additionArr(obj.valueFirst,obj.valueSecond))
  }
  if(obj.operand == 'negativeMeaning') {
    if (obj.valueFirst == 'true' || obj.valueFirst == 'True' || obj.valueFirst == '1') {
      $('#result').text('False')
      return
    }
    if (obj.valueFirst == 'false' || obj.valueFirst == 'False' || obj.valueFirst == '0') {
      $('#result').text('True')
      return
    } else {
      alert('ERROR')
    }
  }
  resultObject = new resultObj(obj.valueFirst,obj.valueSecond,obj.operand);
  resultArr.push(resultObject)
})

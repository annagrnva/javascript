let value = NaN;

value &&= 10; //nan,  false && true = false
value ||= 20; // nan false || true =true = 20
value &&= 30; // 20 and 30 true && true = true 30
value ||= 40; //30 and 40 true || true = true находит первое истинное значение

alert(value);
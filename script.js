flag = false;
    screen = document.getElementsByTagName("th");
    function refresh(e) {
      if(!flag || (e === '+' || e === '-'||e === '%'||e === '/' || e === '*')){
        screen[0].innerHTML += e;
        flag = false;
      }
      else{
        screen[0].innerHTML = e;
        flag = false;
      }
    }
    function result() {
      res = eval(screen[0].innerHTML);
      screen[0].innerHTML = res;
      flag = true;
    }
    function clr() {
      screen[0].innerHTML = "";
    }
    function del() {
      str = screen[0].innerHTML;
      str = str.slice(0, str.length - 1);
      screen[0].innerHTML = str;
    }
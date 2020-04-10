var bubble_sort = function() {
  var re_arr = [];
  var temp_arr = window.arr.slice();
  var sorted = false;

  while (!sorted) {
    sorted = true;
    for (var j = 0; j < temp_arr.length - 1; j++) {
      if (temp_arr[j] > temp_arr[j + 1]) {
        var tmp = temp_arr[j];
        temp_arr[j] = temp_arr[j + 1];
        temp_arr[j + 1] = tmp;
        re_arr.push([j, j + 1, true]);
        sorted = false;
      } else {
        re_arr.push([j, j + 1, false]);
      }
    }
  }
  return re_arr;
}; 
var visualize_bubble = function(arr, anim_diff) {
  remove();
  function compare() {
    setTimeout(function() {
      remove();
      window.arr.forEach(function(number, index) {
        if (index == arr[0][0]) {
          var code = `<div id=${index} class="arrayElement" style=" width: ${80 /
            window.arr
              .length}vw; margin-top: 20px; background: linear-gradient(180deg, white ${100 -
            number}%, purple 0%,  purple 100%) "
      </div>`;
        } else if (index == arr[0][1]) {
          var code = `<div id=${index} class="arrayElement" style=" width: ${80 /
            window.arr
              .length}vw; margin-top: 20px; background: linear-gradient(180deg, white ${100 -
            number}%, orange 0%,  orange 100%) "
      </div>`;
        } else {
          var code = `<div id=${index} class="arrayElement" style=" value:${number}; width: ${80 /
            window.arr
              .length}vw; margin-top: 20px;  background: linear-gradient(180deg, white ${100 -
            number}%, #00FFFF 0%,  #00FFFF 100%) "
          </div>`;
        }
        document.getElementById("main").innerHTML += code;
      });

      if (arr[0][2]) {
        window.requestAnimationFrame(swap);
      } else if (arr.length > 1) {
        arr.shift();
        window.requestAnimationFrame(compare);
      } else {
        remove();
        draw_sorted(window.arr);
        enable();
      }
    }, anim_diff);

    function swap() {
      setTimeout(function() {
        remove();

        window.arr.forEach(function(number, index) {
          if (index == arr[0][0] || index == arr[0][1]) {
            var code = `<div id=${index} class="arrayElement" style=" width: ${80 /
              window.arr
                .length}vw; margin-top: 20px; background: linear-gradient(180deg, white ${100 -
              number}%, #03fc49 0%,  #03fc49 100%) "
      </div>`;
          } else {
            var code = `<div id=${index} class="arrayElement" style=" value:${number}; width: ${80 /
              window.arr
                .length}vw; margin-top: 20px;  background: linear-gradient(180deg, white ${100 -
              number}%, #00FFFF 0%,  #00FFFF 100%) "
          </div>`;
          }
          document.getElementById("main").innerHTML += code;
        });

        window.requestAnimationFrame(swap_place);
      }, anim_diff);
    }

    function swap_place() {
      [window.arr[arr[0][0]], window.arr[arr[0][1]]] = [
        window.arr[arr[0][1]],
        window.arr[arr[0][0]]
      ];
      setTimeout(function() {
        remove();

        window.arr.forEach(function(number, index) {
          if (index == arr[0][0] || index == arr[0][1]) {
            var code = `<div id=${index} class="arrayElement" style=" width: ${80 /
              window.arr
                .length}vw; margin-top: 20px; background: linear-gradient(180deg, white ${100 -
              number}%, #03fc49 0%,  #03fc49 100%) "
      </div>`;
          } else {
            var code = `<div id=${index} class="arrayElement" style=" value:${number}; width: ${80 /
              window.arr
                .length}vw; margin-top: 20px;  background: linear-gradient(180deg, white ${100 -
              number}%, #00FFFF 0%,  #00FFFF 100%) "
          </div>`;
          }
          document.getElementById("main").innerHTML += code;
        });

        arr.shift();

        if (arr.length) {
          window.requestAnimationFrame(compare);
        } else {
          remove();
          draw_sorted(window.arr);
          enable();
        }
      }, anim_diff);
    }
  }

  compare();
};

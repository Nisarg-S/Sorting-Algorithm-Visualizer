var insertion_sort = function() {
  var re_arr = [];
  var temp_arr = window.arr.slice();

  for (var i = 1; i < temp_arr.length; i++) {
    var curr_value = temp_arr[i];
    position = i;
    re_arr.push([position, i - 1, true]);

    while (position > 0 && temp_arr[position - 1] > curr_value) {
      temp_arr[position] = temp_arr[position - 1];
      position--;
      re_arr.push([position, i, false]);
    }
    temp_arr[position] = curr_value;
  }
  re_arr.push([0, 0, true]); //for finish
  re_arr.forEach(function(value) {
  });
  return re_arr;
};
// [compare_index, swap_index (-1) if done, first_compare // false/true]

// greens sorted, red compared, 1 frame for partial sort

var visualize_insertion = function(arr, anim_diff) {
  remove();
  function compare() {
    setTimeout(function() {
      remove();

      window.arr.forEach(function(number, index) {
        if (index == arr[0][0]) {
          var code = `<div id=${index} class="arrayElement" style=" width: ${80 /
            window.arr
              .length}vw; margin-top: 20px; background: linear-gradient(180deg, white ${100 -
            number}%, red 0%,  red 100%) "
      </div>`;
        } else if (index <= arr[0][1]) {
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

      if (!arr[0][2]) {
        [window.arr[arr[0][0]], window.arr[arr[0][0] + 1]] = [
          window.arr[arr[0][0] + 1],
          window.arr[arr[0][0]]
        ];
      }
      if (arr.length > 1) {
        arr.shift();
        window.requestAnimationFrame(compare());
      } else {
        remove();
        draw_sorted(window.arr);
        enable();
      }
    }, anim_diff);
  }

  window.requestAnimationFrame(compare()) ;
};

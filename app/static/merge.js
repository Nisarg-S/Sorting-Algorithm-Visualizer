var merge_sort = function() {
  var re_arr = [];

  function merge(arr) {
    for (
      var curr_size = 1;
      curr_size < arr.length - 1;
      curr_size = 2 * curr_size
    ) {
      for (
        var left_start = 0;
        left_start < arr.length - 1;
        left_start += 2 * curr_size
      ) {
        var mid = Math.min(left_start + curr_size - 1, arr.length - 1),
          right_end = Math.min(left_start + 2 * curr_size - 1, arr.length - 1);

        sub_merge(arr, left_start, mid, right_end);
      }
    }
    function sub_merge(arr, left, mid, right) {
      var left_size = mid - left + 1,
        right_size = right - mid,
        left_arr = [],
        right_arr = [];

      for (var i = 0; i < left_size; i++) {
        left_arr[i] = arr[left + i];
      }

      for (var j = 0; j < right_size; j++) {
        right_arr[j] = arr[mid + j + 1];
      }

      var i = 0,
        k = left,
        j = 0;

      while (i < left_size && j < right_size) {
        if (left_arr[i] < right_arr[j]) {
          arr[k] = left_arr[i];
          i++;
          re_arr.push(window.arr.slice());
        } else {
          arr[k] = right_arr[j];
          j++;
          re_arr.push(window.arr.slice());
        }
        k++;
      }

      while (i < left_size) {
        arr[k] = left_arr[i];
        k++;
        i++;
        re_arr.push(window.arr.slice());
      }

      while (j < right_size) {
        arr[k] = right_arr[j];
        k++;
        j++;
        re_arr.push(window.arr.slice());
      }
    }
  }
  merge(window.arr);

  return re_arr;
};

var visualize_merge = function(arr, anim_diff) {
  function a() {
    setTimeout(function() {
      remove();
      var i = 0;
      arr[0].forEach(function(number) {
        var code = `<div id=${i} class="arrayElement" style=" value:${number}; width: ${80 /
          window.arr
            .length}vw; margin-top: 20px;  background: linear-gradient(180deg, white ${100 -
          number}%, #00FFFF 0%,  #00FFFF 100%) "
          </div>`;
        i++;
        document.getElementById("main").innerHTML += code;
      });

      arr.shift();

      if (arr.length) {
        a();
      } else {
        enable();
        remove();
        draw_sorted(window.arr);
      }
    }, anim_diff);
  }
  a();
};
// [new_arr] //all blue

var quick_sort = function(){
  re_arr = []

  function quick(arr, low, high){

    if(low < high){
      part = partition(arr, low, high)
      quick(arr, low, part - 1)
      quick(arr, part + 1, high)
    }
  }

  function partition(arr, low, high){
    var i = low - 1, pivot = arr[high]

    for(var j = low; j < high; j++){
      if (arr[j] <= pivot){
        i++
        [arr[j], arr[i]] = [arr[i], arr[j]]
        re_arr.push(window.arr.slice())
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    re_arr.push(window.arr.slice())
    return i + 1
  }

  quick(window.arr, 0, arr.length - 1)
  return re_arr
}

var visualize_quick = function(arr) {
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
    }, 50);
  }
  a();
};

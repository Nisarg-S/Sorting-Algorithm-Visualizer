var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);

/////////////////////////////////////////////////////////////////

window.onload = function() {
  var changing = document.getElementById("title").innerHTML;
  var element = document.getElementById(changing);
  element.classList.remove("border-transparent");
  element.classList.add("border-black");
  element.classList.add("border-b-4");

  var arr = new_arr();

  draw(arr);

  window.arr = arr;
};

function new_arr(size = document.getElementById("size").value) {
  return [...Array(parseInt(size)).keys()].map(
    i => Math.floor(Math.random() * 99) + 1
  );
}

function remove() {
  document.getElementById("main").innerHTML = "";
}

function draw(arr) {
  arr.forEach(function(number, index) {
    var code = `<div id=${index} class="arrayElement" style=" value:${number}; width: ${80 /
      arr.length}vw; margin-top: 20px;  background: linear-gradient(180deg, white ${100 -
      number}%, #00FFFF 0%,  #00FFFF 100%) "
        </div>`;
    document.getElementById("main").innerHTML += code;
  });
}

function draw_sorted(arr) {
  arr.forEach(function(number, index) {
    var code = `<div id=${index} class="arrayElement" style=" value:${number}; width: ${80 /
      arr.length}vw; margin-top: 20px;  background: linear-gradient(180deg, white ${100 -
      number}%, #03fc49 0%,  #03fc49 100%) "
        </div>`;
    document.getElementById("main").innerHTML += code;
  });
}

function reset() {
  remove();
  window.arr = new_arr();
  draw(window.arr);
}

function sort(
  sort_type = document.getElementById("title").innerHTML.split(" ")[0],
  size = document.getElementById("size").value
) {
  disable();
  if (sort_type == "Bubble") {
    anim_diff = 200 - (size - 10) * 9.25; // 200ms at 10, 15ms at 30
    visualize_bubble(bubble_sort(), anim_diff);
  } else if (sort_type == "Insertion") {
    anim_diff = 200 - (size - 10) * 2.85;
    visualize_insertion(insertion_sort(), anim_diff);
  } else if (sort_type == "Quick") {
    visualize_quick(quick_sort());
  } else if (sort_type == "Merge") {
    anim_diff = 100 - (size - 50)
    visualize_merge(merge_sort(), anim_diff);
  }
}

function disable() {
  $("#new").removeAttr("onclick");
  $("#new_button")
    .addClass("cursor-not-allowed")
    .addClass("opacity-50");

  $("#array_size").removeAttr("onchange");

  $("#visual").removeAttr("onclick");
  $("#visual_button")
    .addClass("cursor-not-allowed")
    .addClass("opacity-50");
}

function enable() {
  $("#new").attr("onclick", "reset()");
  $("#new_button").removeClass("cursor-not-allowed opacity-50");

  $("#array_size").attr("onchange", "reset()");

  $("#visual").attr("onclick", "sort()");
  $("#visual_button").removeClass("cursor-not-allowed opacity-50");
}

function ajax() {
  document.getElementById("dbutn").style.visibility = "hidden";
  // Creating an XHR Object
  var xhttp = new XMLHttpRequest();
  // EventListener
  xhttp.onreadystatechange = function () {
    // condition
    if (this.readyState == 4 && this.status == 200) {
      $.getJSON("https://jsonplaceholder.typicode.com/todos", function (data) {
        //    document.getElementById("deemo").innerHTML=xhttp.responseText;
        var output = "";
        $.each(data, function (key, value) {
          // output +='<td>' + ""+ '</td>';
          output += `<tr><td>
          <div>
          <input type="checkbox" 
           ${value.completed ? "disabled checked" : ""}>
           </div>
           </td>`;
          output += "<td>" + value.id + "</td>";
          output += "<td>" + value.title + "</td>";
          output += "<td>" + value.completed + "</td></tr>";
        });

        $("#item_list").append(output);
        //counter to track number of tasks checked
        let count = 0;
        $('input[type="checkbox"]').on("change", function () {
          if ($(this).prop("checked") === true) {
            count++;
          } else {
            count--;
          }
          if (count == 5) {
            //when the condition is met invoking the alert box using promise-resolve
            var promise = new Promise(function (resolve, reject) {
              resolve("Congrats!!! 5 Tasks have been Successfully Completed");
            });
          }
          promise.then(function (alertMessage) {
            //success handler function is invoked
            alert(alertMessage);
            count = 0;
          });
        });
      });
    }
  };

  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}

var listt;
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json =>{listt=(json);console.log(listt);
  }
  );
  // var list={listt,function(key,value)}

//   $(document).ready(function(data){
    
//   var output="";
//                 $.each(data, function(key, value){
                
//                     output += '<tr><td>' + value.SlNo + '</td>';
//                     output += '<td>' + value.Quantity + '</td>';
//                     output +='<td>' + value.Unit + '</td>';
//                     output +='<td>' + value.Department+ '</td>';
//                     output += '<td>' + value.Notes+ '</td></tr>';                  
                   
//                 });

  
// document.getElementById("list").innerHTML=output;})

// var url="https://jsonplaceholder.typicode.com/todos";

// $.getJSON(url,function(data){
//     $.each(data.records, function(index,value){
//         $("#item_list").append(Text)
//     })
// })











                
//                 $('#list').append(output);

//   function ajax(){
    // document.getElementById("dbutn").style.visibility="hidden";
    // // Creating an XHR Object
    // var xhttp= new XMLHttpRequest();
    // // EventListener
    // xhttp.onreadystatechange= function(){
    //     // condition
    //     if(this.readyState==4 && this.status==200)  {
           
    //         $(document).ready(function(){
    //             $.getJSON("https://jsonplaceholder.typicode.com/todos", function(data){
    //             var output="";
    //             $.each(data, function(key, value){
                
    //                 output += '<tr><td>' + value.SlNo + '</td>';
    //                 output += '<td>' + value.Quantity + '</td>';
    //                 output +='<td>' + value.Unit + '</td>';
    //                 output +='<td>' + value.Department+ '</td>';
    //                 output += '<td>' + value.Notes+ '</td></tr>';                  
                   
    //             });
                
    //             $('#list').append(output);
                
    //              });
    //             });
    // //     }
    // }
    
    // xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    // xhttp.send();
    //  }

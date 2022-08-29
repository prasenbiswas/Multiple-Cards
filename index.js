console.log("hello welcome to CRUD operation")
  $(document).ready(function(){
      $.get("/fruits.json", function(data, status){
        localStorage.setItem("allData" , JSON.stringify(data))
        let allData = JSON.parse(localStorage.getItem("allData"))
        showData();
      });
  });
  function showData(){
  let allData = JSON.parse(localStorage.getItem("allData"))
for(let i=0; i<allData.length; i++){
    $(".card-container").append(` <div class="card mx-2 card${i}" style="width: 18rem;"></div>`)
    $(`.card${i}`).append(`<img src="`+(allData[i].image)+`" class="card-img-top" alt="...">`)
    $(`.card${i}`).append(`<div class="card-body card-body${i}"></div>`)
    $(`.card-body${i}`).append(`
    <h5 class="card-title card-title${i}">`+allData[i].fruit+`</h5>
    <p>1Qty - <b>Price: `+allData[i].price+`Rs</b></p>
    <p>Available Qty: <b>`+allData[i].qty+`</b></p>
    <div class="d-flex justify-content-center add-button-container my-4" id="`+allData[i].id +`"><button type="button" href="#" class="btn btn-success addButton" id="`+allData[i].id +`" onclick="addFruits(`+allData[i].id +`)">Add</button></div>
    `)
} 
  }

function addFruits(id){
  var count = 1;
    let allData = JSON.parse(localStorage.getItem("allData"))
    let findObj = allData.find(x => x.id === id);
    let findIndex = allData.indexOf(findObj);
    allData[findIndex].qty = (allData[findIndex].qty - count);
    setTimeout(function() { $(".alert-box").html(``)}, 2000);
    localStorage.setItem("allData" , JSON.stringify(allData));
    $(".card-container").html("");
    showData();
    $("#"+allData[findIndex].id).html(`<form><button type="button" class="btn btn-success" onclick="plusVal()">+</button><input type="number" class="inputQty"><button type="button" class="btn btn-success">-</button></form>`)
    $("input").val(count);
    $(".alert-box").append('<div class="alert alert-success alert-dismissible fade show" role="alert"><strong >Successfully!</strong> You added item in your bucket</div>')

}
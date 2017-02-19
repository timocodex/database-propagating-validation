$(document).ready(function(){
  showEvent()
  $('.modal').modal();
})

function showEvent(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/event',
    success: function(data) {
      $('#tabelEvent').empty()
      data.forEach(function(datas){
        $('#tabelEvent').append(`
          <tr>
            <td>${datas.title}</td>
            <td>${datas.date}</td>
            <td>${datas.name}</td>
            <td>${datas.email}</td>
          </tr>
          `)
      })
    },
    error: function(error) {
      console.log(error);
    }
  });
}

function createNew(){
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/event',
    data: {title:$('#newTitle').val(),date:$('#newDate').val(),name:$('#newName').val(),email:$('#newEmail').val()},
    success: function(resp) {
      showEvent()
      alert(resp)
      $('#newTitle').val('')
      $('#newDate').val('')
      $('#newName').val('')
      $('#newEmail').val('')
    },
    error: function(error) {
      console.log(error);
    }
  });
}

// function showUpdate(todo,id){
//   $('#todoupdate').val(title)
//   $('#idUpdate').val(id)
// }
// function showDelete(id){
//   $('#idUpdate').val(id)
// }
//
// function deletePost(){
//   $.ajax({
//     type: 'DELETE',
//     url: `http://localhost:3000/api/todo/${$('#idUpdate').val()}`,
//     success: function(resp) {
//       $('#titleDelete').html("Delete Success")
//       $('#data-'+$('#idUpdate').val()).remove()
//     },
//     error: function(error) {
//       console.log(error);
//     }
//   });
// }
//
// function ok(){
//   $('#titleDelete').html('')
// }
//
//
// function done(id){
//   $.ajax({
//     type: 'PUT',
//     url: `http://localhost:3000/api/todo/${id}`,
//     success: function(resp) {
//
//       showTodo()
//     },
//     error: function(error) {
//       console.log(error);
//     }
//   });
// }

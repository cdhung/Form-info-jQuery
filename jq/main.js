

// console.log('aaa');

// $(document).ready(function(){
//     $('#add-btn').click(function(){
//         $('#info-output').append($('#fullname').val());
//     });
// });
 // Example starter JavaScript for disabling form submissions if there are invalid fields
 (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


  // Ouput info
  var count = 1;
  
  // console.log(gender);

  $(document).ready(function(){
      $('#add-btn').click(function(){
          var info = "Học sinh: " + $('#fullname').val() + ", Giới tính: " + $('.gender input:checked').val() + ", Năm học: " + $('#yourclass').val() + ", Điểm Toán: " + $('#toan').val() + ", Điểm Văn: " + $('#van').val() + ", Điểm Anh: " + $('#anh').val();
          $('#info-output').append('<p class = "clear">' + info + "</p>");
          var avg = ($('#toan').val()*1 + $('#van').val()*1 + $('#anh').val()*1)/3;
          $('#diem-output').append('<p class = "clear"><strong>Điểm trung bình: </strong>' + avg + "</p>");
          
          console.log(info);

          if(avg<5){
              $('#rank-output').append('<p class = "clear"><strong>Học lực: </strong>Trung bình</p>');
          }else {
              $('#rank-output').append('<p class = "clear"><strong>Học lực: </strong>Khá</p>');
          }
          $('.output').addClass('output-add');
      });
  });

  $(document).ready(function(){
      $('#clear-btn').click(function(){
           $("p").remove(".clear");
           $('.empty').val("");
      });
  });

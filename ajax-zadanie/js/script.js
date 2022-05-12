
let btnGetData = document.getElementById("get-data"); 


     $('#get-data').click(function(){

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .done(function(data){
            
            
            let pId = $('<p></p>').text(`Imię: ${data.imie}`);
            let pUserId = $('<p></p>').text(`Nazwisko ID: ${data.nazwisko}`);            
            let pTitle = $('<p></p>').text(`Zawód ID: ${data.zawod}`);
            let pBody = $('<p></p>').text(`Firma ${data.firma}`);
    
            
            console.log(data); 


           
            let div = $('#dane-programisty');

             div.append(pId);
             div.append(pUserId);
             div.append(pTitle);
             div.append(pBody);
             
        })       
    }) 

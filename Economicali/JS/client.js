function data()
{

    axios.get('http://localhost:9000/data',{ "Content-Type": "application/json"})
        .then(function(response){
            if(response.status === 200 ) {
                console.log("In client js");
                console.log(response);
                var texbox = document.getElementById('textbox').value=response.data.name;
                return response;
            };
            
            throw new Error('Request failed.');
            //console.log("In client js");
        })
    }

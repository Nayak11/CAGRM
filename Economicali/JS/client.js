
/* sample flow of data wrt to sample html page upon click on button it should display text in the texbox */
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
        });
    }

    /* main search functionality */
    function search(){

        axios.get('http://localhost:9000/bills',{ "Content-Type": "application/json"})
        .then(function(response){
            if(response.status === 200 ) {
                var matchresults =[];
                //console.log("In client js");
                //console.log(response);
                var inputsearch = document.getElementById('textbox').value;
                response.data.map(res => {
                    if(res.bill_no === inputsearch){
                        matchresults.push(res);
                    }
                });
                console.log(matchresults);
                return matchresults;
            };
            throw new Error('Request failed.');
            //console.log("In client js");
        })

        
    }

    /*display info of people when image is clicked */
    function displayAuthorInfo(){

        axios.get('http://localhost:9000/authors',{ "Content-Type": "application/json"})
        .then(function(response){
            if(response.status === 200 ) {
                var matchresults =[];
                //console.log("In client js");
                //console.log(response);
                var author_name = document.getElementById('name').innerText;
                console.log(author_name);
                response.data.map(res => {
                    if(res.author === author_name){
                        matchresults.push(res);
                    }
                });
                console.log(matchresults[0]);
               document.getElementById("authorname").innerText=matchresults[0].author;
               document.getElementById("aboutauthor").innerText="Bill Title: "+matchresults[0].title + "\n\n"+"Status: "+matchresults[0].status;
                return matchresults;
            };
            throw new Error('Request failed.');
            //console.log("In client js");
        })
    }


    /*Send the drop down selected from category to the server.js for the api /dashboard */

    function sendCategory(){
        alert("abc");
        var category = {
            categorydata : document.getElementById("status").value    
        }
        console.log(category);
        axios.post('http://localhost:9000/dashboard',category)
        .then(function(response){
            if(response.status === 200 ) {
                console.log("Inside response 200");
                var pass =[];
                var introduced=[];
                var fail =[];
                //console.log("In client js");
                //console.log(response);
               
                //console.log(author_name);

                response.data.map(res => {
                    if(res.status === 'PASS'){
                        pass.push(res);
                    }
                    if(res.status === 'INTRODUCED')
                    {
                        introduced.push(res);
                    }
                    if(res.status === 'FAIL')
                    {
                       fail.push(res);
                    }

                });
                var statusResult ={"Pass" : pass.length ,"Introduced":introduced.length,"Fail":fail.length}
                
                /* Display status for Education category */
                google.charts.load('current', {'packages':['corechart']});
                google.charts.setOnLoadCallback(drawChart);
                function drawChart() {

                    var data = new google.visualization.DataTable();
                    data.addColumn('string', 'status');
                    data.addColumn('number', 'count');
                    data.addRows([
                      ['Introduced', introduced.length ],
                      ['Fail', fail.length],
                      ['Pass',pass.length]
                    ]);
            
                    // Set chart options
                    var options = {'title':'Count of different status for each category',
                                   'width':400,
                                   'height':300};
                    //colors:['#','#',....]
            
                    // Instantiate and draw our chart, passing in some options.
                    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
                    chart.draw(data, options);
                }
            }
            else {
                throw new Error('Request failed.');
            }
            
        });


    }

    /*display pass,fail,introduced chart in the dashboard when category is selected */
    function displayStatus(){
        axios.post('http://localhost:9000/dashboard')
        .then(function(response){
            if(response.status === 200 ) {
                var pass =[];
                var introduced=[];
                var fail =[];
                //console.log("In client js");
                //console.log(response);
               
                //console.log(author_name);

                response.data.map(res => {
                    if(res.status === 'PASS'){
                        pass.push(res);
                    }
                    if(res.status === 'INTRODUCED')
                    {
                        introduced.push(res);
                    }
                    if(res.status === 'FAIL')
                    {
                       fail.push(res);
                    }
                });
                var statusResult ={"Pass" : pass.length ,"Introduced":introduced.length,"Fail":fail.length}
                
                /* Display status for Education category */
                google.charts.load('current', {'packages':['corechart']});
                google.charts.setOnLoadCallback(drawChart);
                function drawChart() {

                    var data = new google.visualization.DataTable();
                    data.addColumn('string', 'status');
                    data.addColumn('number', 'count');
                    data.addRows([
                      ['Introduced', introduced.length ],
                      ['Fail', fail.length],
                      ['Pass',pass.length]
                    ]);
            
                    // Set chart options
                    var options = {'title':'Count of different status for each category',
                                   'width':400,
                                   'height':300};
                    //colors:['#','#',....]
            
                    // Instantiate and draw our chart, passing in some options.
                    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
                    chart.draw(data, options);
            
                  }

               return statusResult;
            };
            
            throw new Error('Request failed.');
            //console.log("In client js");
        }) 


    }

function sendMail()
{
    var payload = {
        name :  document.getElementById('inputUsername').value,
        email : document.getElementById('inputEmail').value,
        mobileno: document.getElementById('telephone').value,
        message: document.getElementById('message').value
    }
    console.log(payload);
    axios.post('http://localhost:9000/sendMail',payload)
        .then(function(response){
            if(response.status === 200 ) {
                var x = document.getElementById("snackbar");
                x.className = "show";
                setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
            }
            else
            {
                throw new Error('Request failed.');
            }
        })
}
function goToContactUs(){
    $("contactUsBtn").click(function() {
        $('html,body').animate({
                scrollTop: $(".contact").offset().top},
            'slow');
    });
}

// get data from data file
var data_final = data;

// reference table body
var tbody = d3.select("tbody");

//make table function
function makeTable(data_final){
    
    //console log data to make sure it is there
    data_final.forEach((row) => {
        console.log(row);

            // add data to table in html
            Object.values(row).forEach((value) => {
                var row = tbody.append("tr");
                var cell = row.append("td");
                cell.text(value);
            });

    });
    
};

//filter data function (index.html, #datetime)
function filterData(){
    var date = d3.select("#datetime").property("value");
    var filteredData = data_final.filter(row => row.datetime === date);
    makeTable(filteredData);
};

//event listener for clicks (index.html, #filter-btn)
d3.selectAll("#filter-btn").on("click", filterData);

//call make table function
makeTable(data_final);

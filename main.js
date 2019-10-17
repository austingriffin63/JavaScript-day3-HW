// This is the plain JavaScript DOM selector 
let element = document.getElementById('hello')

// This is the JQuery DOM selector
let element2 = $('#hello') // Hashtag = select ID/ period(.) = select class
/*setTimeout(function(){
    element.setAttribute('class','center-text')
}, 6000)
*/
function moveText(){
    element.setAttribute('class','center-text');
}

/*
function moveJqueryText(){
    element2.addClass('center-text')
}
*/

$('#seemoreButton').click(function(){
    element2.addClass('center-text');
})

// Using Jquery to access WEBAPI data we can use:
// .ajax, .get

function dataChange(){
let year = $("#change-form input[name=Year]").val()
let lap = $("#change-form input[name=Lap]").val()
console.log(year)

    $.get('https://ergast.com/api/f1/' + year + '/' + lap + '/driverStandings.json', function(data){
        let common = data.MRData.StandingsTable.StandingsLists[0]
      
        // For Loop solution
        for(let i = 0; i < 8;i++){
            let position = common.DriverStandings[i].position
            let name = common.DriverStandings[i].Driver.givenName
            let nationality = common.DriverStandings[i].Driver.nationality
            let sponser = common.DriverStandings[i].Constructors[0].name
            let points = common.DriverStandings[i].points
            $('#position' + i.toString()).text(position)
            $('#name' + i.toString()).text(name)
            $('#nationality' + i.toString()).text(nationality)
            $('#sponser' + i.toString()).text(sponser)
            $('#points' + i.toString()).text(points)
        }



        console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.permanentNumber)
})
}


// loop through data, getting 7 racers, nationality,sponser,points
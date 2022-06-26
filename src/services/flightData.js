
const flightData = () => {

    async function findAirports (city) {

        let response = await fetch("http://localhost:8080/name/"+city,{mode:"cors"});
            response = await response.json();
        return response;
    }

    async function findFlights(airport,beginDate,endDate){
        
        let response = await fetch("https://opensky-network.org/api/flights/arrival?airport="+airport+"&begin="+beginDate+"&end="+endDate);
            response = await response.json();
        return response;
    }

    return{findAirports,findFlights}
}

export default flightData
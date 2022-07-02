
const flightData = () => {

    async function findAirports (city) {

        let response = await fetch("https://world-airports.herokuapp.com/"+city,{mode:"cors"});
            response = await response.json();
        return response;
    }

    async function findArrivals(airport,beginDate,endDate){
        
        let response = await fetch("https://opensky-network.org/api/flights/arrival?airport="+airport+"&begin="+beginDate+"&end="+endDate);
            response = await response.json();
        return response;
    }


    async function findDepartures(airport,beginDate,endDate){
        
        let response = await fetch("https://opensky-network.org/api/flights/departure?airport="+airport+"&begin="+beginDate+"&end="+endDate);
            response = await response.json();
        return response;
    }

    return{findAirports,findArrivals, findDepartures}
}

export default flightData

function fetchTeam() {
    fetch('https://estagio.geopostenergy.com/WorldCup/GetAllTeams', {

    method: 'GET',
    headers: {
        'git-user': 'ruan-carlos98'
    }})
        .then(response => {
            if (!response.ok) {
                throw Error('ERROR');
            }
            return response.json();
        })
        .then(teams => {
            console.log(teams);
            const html = teams.Result.map(team => {
                return `

                <p>Time: ${team.Name}</p> 
                
                `;})
                .join("");
                console.log(html);
                document.querySelector("#teams").insertAdjacentHTML("afterbegin", html);
        })
        .catch(error => {
            console.log(error);
        });
}

fetchTeam();
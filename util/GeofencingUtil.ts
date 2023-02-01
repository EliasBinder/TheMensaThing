const currentRegions: any = {};

function enterRegion(region: "BZ"|"BX"|"BK") {
    fetch("https://europe-west1-unibz-mensapp.cloudfunctions.net/enter/" + region, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((response) => response.json())
        .then((json) => {
            currentRegions[region] = json.uuid;
        })
}

function exitRegion(region: "BZ"|"BX"|"BK") {
    fetch("https://europe-west1-unibz-mensapp.cloudfunctions.net/exit/" + region + "/" + currentRegions[region], {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(currentRegions[region] = undefined);
}

import React, {useState, useEffect} from 'react'

const ApiFetch = (props) => {
    const baseURL = process.env.REACT_APP_BASE_URL_NEZULATOON_API;
    var latitude = 0;
    var longitude = 0;
    var coords = props.coords;
    var streatName = "Latham";
    var weaponName = "SpetialGun";

    if (coords) {
        latitude = coords.latitude;
        longitude = coords.longitude;
    }

    var apiURL = baseURL + '?streatName=' + streatName + '&weaponName=' + weaponName + '&latitude=' + latitude + '&longitude=' + longitude;

    const [userStatus, setUserStatus] = useState([])
        useEffect(() => {
            fetch(apiURL, {method: 'GET'})
            .then(res => res.json())
            .then(data => {
                setUserStatus(data)
            })
        },[apiURL])

    return (
        <div>
            <p>{userStatus.weaponName}</p>
            <p>{userStatus.streatName}</p>
            {/* <p>{userStatus.latitude}</p>
            <p>{userStatus.longitude}</p> */}
            
        </div>
    )
}

export default ApiFetch
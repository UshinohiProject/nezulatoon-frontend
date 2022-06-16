import React, {useState, useEffect} from 'react'

const ApiFetch = () => {
    const baseURL = process.env.REACT_APP_BASE_URL_NEZULATOON_API;
    var streatName = "Latham";
    var weaponName = "SpetialGun";

    const [weapon, setWeapon] = useState([])
        useEffect(() => {
            fetch(baseURL + '?streatName=' + streatName + '&weaponName=' + weaponName, {method: 'GET'})
            .then(res => res.json())
            .then(data => {
                setWeapon(data)
            })
        },[])

    return (
        <div>
            <p>{weapon.weaponName}</p>
            <p>{weapon.streatName}</p>
            
        </div>
    )
}

export default ApiFetch
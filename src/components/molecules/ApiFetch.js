import React, {useState, useEffect} from 'react'
import './ApiFetch.css'

const ApiFetch = (props) => {
    if (!props.isGeolocationAvailable) {
        return (
            <div>ご使用のブラウザではプレイできません。</div>
        )
    } else if (!props.isGeolocationEnabled) {
        return (
            <div>位置情報取得が拒否されています。</div>
        )
    } else if (props.coords) {
        const baseURL = process.env.REACT_APP_BASE_URL_NEZULATOON_API;
        var coords = props.coords;
        var latitude = coords.latitude;
        var longitude = coords.longitude;
        var streatName = "Latham";
        var weaponName = "SpetialGun";

        var apiURL = baseURL + '?streatName=' + streatName + '&weaponName=' + weaponName + '&latitude=' + latitude + '&longitude=' + longitude;

        const [userStatus, setUserStatus] = useState([])
            useEffect(() => {
                fetch(apiURL, {method: 'GET'})
                .then(res => res.json())
                .then(data => {
                    setUserStatus(data)
                })
            },[apiURL])
        
        while (!userStatus.savedImageID) {
            return (
                <div>位置情報取得中&hellip; </div>
            )
        }
        return (
            <div>
                <img className="map" src={userStatus.savedImageID} alt="map"></img>
                <p>{userStatus.weaponName}</p>
                <p>{userStatus.streatName}</p>

            </div>
        )
    } else {
        return (
            <div>位置情報取得中&hellip; </div>
        )
    }
}

export default ApiFetch
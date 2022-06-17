import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
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
        var streatName = props.streatName;
        var weaponName = props.weaponName;

        var apiURL = baseURL + '?streatName=' + streatName + '&weaponName=' + weaponName + '&latitude=' + latitude + '&longitude=' + longitude;

        const [userStatus, setUserStatus] = useState([])
        useEffect(() => {
            fetch(apiURL, {method: 'GET'})
            .then(res => res.json())
            .then(data => {
                setUserStatus(data)
            })
        },[apiURL])
        console.log("calling API")
    
        if (userStatus.savedImageID) {
            return (
                <div>
                    <img className="map" src={userStatus.savedImageID} alt="map"></img>
                    <p>{userStatus.weaponName}</p>
                    <p>{userStatus.streatName}</p>
                    <Link className="home-link" to={`/`}>商店街を再選択 &#8250;</Link>


                </div>
            )
        } else {
            return (
                <div>マップ取得中&hellip; </div>
            )
        }
    } else {
        return (
            <div>位置情報取得中&hellip; </div>
        )
    }
}

export default ApiFetch
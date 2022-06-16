import React from "react";
import { useGeolocated } from "react-geolocated";

const Map = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    return !isGeolocationAvailable ? (
        <div>ご使用のブラウザではプレイできません。</div>
    ) : !isGeolocationEnabled ? (
        <div>位置情報取得が拒否されています。</div>
    ) : coords ? (
        <table>
            <tbody>
                <tr>
                    {/* 緯度 */}
                    <td>latitude</td>
                    <td>{coords.latitude}</td>
                </tr>
                <tr>
                    {/* 経度 */}
                    <td>longitude</td>
                    <td>{coords.longitude}</td>
                </tr>
                <tr>
                    {/* 高度 */}
                    <td>altitude</td>
                    <td>{coords.altitude}</td>
                </tr>
                <tr>
                    {/* 進行方向 */}
                    <td>heading</td>
                    <td>{coords.heading}</td>
                </tr>
                <tr>
                    {/* 速度 */}
                    <td>speed</td>
                    <td>{coords.speed}</td>
                </tr>
            </tbody>
        </table>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
};

export default Map;
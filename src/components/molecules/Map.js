import React from "react";

const Map = (props) => {

    return !props.isGeolocationAvailable ? (
        <div>ご使用のブラウザではプレイできません。</div>
    ) : !props.isGeolocationEnabled ? (
        <div>位置情報取得が拒否されています。</div>
    ) : props.coords ? (
        <table>
            <tbody>
                <tr>
                    {/* 緯度 */}
                    <td>latitude</td>
                    <td>{props.coords.latitude}</td>
                </tr>
                <tr>
                    {/* 経度 */}
                    <td>longitude</td>
                    <td>{props.coords.longitude}</td>
                </tr>
            </tbody>
        </table>
    ) : (
        <div>位置情報取得中&hellip; </div>
    );
};

export default Map;
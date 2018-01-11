export const RESTAURANTS = "RESTAURANTS";
export const RESINFO = "RESINFO";
export const BACKCLICKED = "BACKCLICKED";
import axios from "axios";
import React, {Component} from 'react';

export const DATA_LOADING = "DATA_LOADING";

export function displayRestaurants(){

    return (dispatch) => {
        dispatch(isFetching(true));
        navigator.geolocation.getCurrentPosition(
        (position) => {
            dispatch(fetchRestaurants(position.coords.latitude, position.coords.longitude))
        },

        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

    }
}


export function fetchRestaurants(lat, long){

    return (dispatch) => {
        const mykey = "Z1x5-qAHMC5hRvaXcpaQpNnzh1uYaizEJHe_qHlzY6vSNSE0Qv7dL3N3eOYURAQ5UEX4HqdpbvejjAbHDHh4i5WY0Dx4AfqMliTWD9PUbQKWJ8tpDfYBXOA8abVWWnYx";
        let url = "https://api.yelp.com/v3/businesses/search?term=restaurant&latitude=" +
            lat + "&longitude=" + long;
        axios.get(url, {
            headers: {
                "Authorization": "Bearer " + mykey
            }
        }).then((response) => {
            if (response.status != 200) {
                throw Error(response.statusText);
            }
            return response;
        }).then((response) => {
            dispatch(isFetching(false));
            dispatch(restaurantList(response.data));
        }).catch((e) => console.log(e));
    }



}

export function isFetching(state) {
    return {
        type: DATA_LOADING,
        state: state
    };
}

export function backToMain(){
    return{
        type: BACKCLICKED,
        backBTN: Boolean,
        isShowMain: Boolean
    }
}

export function restaurantInfo(dataInfo){


    return {
        type: RESINFO,
        currentRest: dataInfo,
        isShowMain: Boolean
    }
}


export function restaurantList(data) {

    return {
        type: RESTAURANTS,
        data: data,
        isShowMain: Boolean


    };
}


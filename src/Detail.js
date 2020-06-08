import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";

export default function Detail(props) {

    const { id } = useParams();

    const getDetailData = async () => {

        let url = `https://localhost:3001/jobs/${id}` //why this is 3001 not 3000? 3001 is Back ENd, mean data on here
        let data = await fetch(url)
        let result = await data.json() // get data from 3001
        console.log("show result", result);


    }

    useEffect(() => {
        getDetailData();
    }, []);
    // why i have to use effect here?,  what is uses? component didmound

    return (
        <div>
            <h1>this is detail page</h1>
            <h2>your ID : {id}</h2>
        </div>
    )
}

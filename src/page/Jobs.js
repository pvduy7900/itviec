import React, {useState, useEffect } from 'react'
import {Container} from 'react-bootstrap'
import JobCard from '../components/JobCard' // .. is mean out 2 steps, from job to src and come to components 

export default function Jobs() {
    let [data, setData] = useState([]);
    // use async when have await, 
    const getJobs = async () => {
        let url = `http://localhost:3001/jobs`; // trong nay co du lieu ve jobs
        let data = await fetch(url); // await here mean, do it done then do next one
        let result = await data.json();
        setData(result);
        console.log("my precious", data);
    };
    useEffect(() => {
        getJobs();
    }, []);
    return (
        <Container>
            {data && data.map(item => <JobCard job={item} />)}
        </Container>
    );
}

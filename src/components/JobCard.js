import React from 'react'
import {Row,Col,Badge} from 'react-bootstrap'
import moment from "moment"


export default function JobCard(props) {

const job = props.job

const jobSelect = () =>{

}


    return (
        <div className="job-content" onClick={() => jobSelect()}>
            <Row>
                <Col>
                    <div className="jobcard-logo">
                        <img src={job.img} />
                    </div>
                </Col>
                <Col xs={8}>
                    <div className="jobcard-descriptions">
                        <h2 className="jobcard-title">{job.title}</h2>
                        <div>$ {job.salary}</div>
                        <div>
                            <ul className="benefit-list">
                                {job.benefits.map(benefit => (
                                    <li>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            {job.tags.map(tag => (
                                <Badge variant="secondary" className="badge-style">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="date-location-box">
                        {job.isHotjob ? (
                            <div className="hotjob-label">Hot Job</div>
                        ) : (
                                <div></div>
                            )}

                        <div className="jobcard-location">
                            <div>{job.city}</div>
                            <div>District {job.district}</div>
                        </div>
                        <div className="job-time">{moment(job.time).fromNow()}</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

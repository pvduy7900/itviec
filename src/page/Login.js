import React,{useRef} from 'react'
import { Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


export default function Login() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);



    let history = useHistory();
    const count = useSelector(state => state);
    const dispatch = useDispatch();
    const takedata = () => {
        dispatch({ type: "Login", payload: { email: emailRef.current.value, password: passwordRef.current.value, isAuthenticated: false } })
        history.goBack();
    }

    return (
        <div>
            <Form>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>

                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} />

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passwordRef} />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" onClick={takedata}>
                    Submit
                </Button>

            </Form>
        </div>
    )
}

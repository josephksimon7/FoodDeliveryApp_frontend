import React from 'react'
import { Container } from "react-bootstrap";
import { assets } from "../../assets/assets";
import "./PhoneVerification.css"

const PhoneVerification = () => {
    return (
        <div>

            <>
                <Container>
                    <div className="p-5 m-5 text-center">
                        {" "}
                        <img src={assets.foodreg} height={300} alt="" />
                        <h2 className="mb-2 emq">Verify Your Phone Number</h2>
                        <p className="emv">
                            We have sent an OTP  to your Phone. <br />
                            Please enter OTP to complete verification
                        </p>
                        <input
                            id="otpInput"
                            type=""
                            placeholder="Enter The OTP Here"
                            style={{ borderRadius: "5px" }}
                        />
                        <br />
                        <button className="btn btn-primary " id="pnbtn" >
                            Submit OTP
                        </button>

                        {
                            <button className="btn btn-outline-dark mt-3 " id="rsndbtn" style={{ marginLeft: "5px" }} >
                                Resend OTP
                            </button>
                        }









                    </div>
                </Container>
            </>

        </div>
    )
}

export default PhoneVerification
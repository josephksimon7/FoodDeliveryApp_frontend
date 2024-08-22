import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { assets } from '../../assets/assets';
import './EmailVerification.css';
import { emailgenerateOtpApi, emailVerificationOtpApi, phonegenerateOtpApi } from '../../Services/allApi';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const EmailVerification = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const [userEmail] = useState(() => JSON.parse(sessionStorage.getItem('email')));
  const [otpGenerated, setOtpGenerated] = useState(false);

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    // Check if OTP is valid
    if (otp.length !== 6) {
      return toast.error('Invalid OTP. OTP should be 6 digits long.', { position: 'top-right' });
    }
    try {
      const userData = {
        email: userEmail,
        otp,
      };
      const result = await emailVerificationOtpApi(userData);

      if (result.status === 200) {
        toast.success('Email Verification Successful', { position: 'top-center' });
        const phone = JSON.parse(sessionStorage.getItem('phone')); // Retrieve phone from session storage
        await generateOtp(phone);
        navigate('/phoneVerification');
      } else {
        console.log(result);
        toast.error('Verification Failed! Try Again', { position: 'top-right' });
      }
    } catch (error) {
      console.error('Error during verification:', error);
      toast.error('An error occurred during verification. Please try again later.', { position: 'top-right' });
    }
  };

  const handleEmail = async () => {
    if (!userEmail) {
      toast.error('User email is not available.', { position: 'top-right' });
      toast.error('YOU NEED TO REGISTER FIRST', { position: 'top-right' });
      navigate('/');
      return;
    }

    if (otpGenerated) {
      toast.error('OTP has already been generated.', { position: 'top-right' });
      return;
    }

    try {
      const result = await emailgenerateOtpApi({ email: userEmail });

      if (result.status === 200) {
        toast.success('OTP Successfully Generated', { position: 'top-center' });
        setOtpGenerated(true);
      }
    } catch (err) {
      console.error('OTP generation failed', err);
      toast.error('An error occurred during OTP generation. Please try again later.', { position: 'top-right' });
    }
  };

  const generateOtp = async (phone) => {
    try {
      const result = await phonegenerateOtpApi({ phone });
      if (result.status === 200) {
        toast.success('OTP Generated Successfully', { position: 'top-center' });
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred during phone OTP generation. Please try again later.', { position: 'top-right' });
    }
  };

  return (
    <div>
      <div className='logo-container'>
        <h2>
          <div className="d-flex justify-content-center  gap-1">
            <i
              class="fa-solid fa-burger fa-xs fs-1 mt-3 "
              style={{ color: "#FFC801" }}
            ></i>
            <div>
              <span style={{ color: "#FFC801" }}>
                {" "}
                <b>B</b>ite
              </span>
              <span
                className="text-gray-700 "
                style={{ fontWeight: "500" }}
              >
                Box
              </span>
            </div>
          </div>
        </h2>{" "}

      </div>

      <Container className='mt-5 mb-5'>
        <Row>
          <Col lg={6}>
            <div className='flex justify-center'>
              <img src={assets.emailverify} alt="" />

            </div>

          </Col>
          <Col>
            <div className=" mt-5  text-center ">

              <h1 className="mb-2 emq mt-5">Verify Your Email Address</h1>
              <h3 className="emv mt-5">
                We have sent a verification link to your email. <br />
                Please enter OTP to complete verification
              </h3>
              <input
                className='mt-5 p-3'
                id="otpInput"
                type="text"
                placeholder="Enter The OTP Here"
                style={{ borderRadius: '5px' }}
                onChange={(e) => setOtp(e.target.value)}
              />
              <br />
              <button className="btn  btn-warning mt-5 " id="embtn" onClick={handleOtpSubmit}>
                Submit OTP
              </button>
              <button className="btn btn-outline-dark mt-5" id="rsndbtn" style={{ marginLeft: '5px' }} onClick={handleEmail}>
                Resend OTP
              </button>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EmailVerification;
import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Dropdown, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import HomeCarousal from '../../Components/HomeCarousal';
import Homecard from '../../Components/Homecard';
import MenuExplore from '../../Components/MenuExplore';
import Footer from '../../Components/Footer';

const Home = () => {

const [category,setCategory]= useState("All")







  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('Existinguser');
    if (storedUser) {
      try {
        setUserData(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse user data from session storage', error);
      }
    }
  }, []);

  const logout = () => {
    sessionStorage.removeItem('Existinguser');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('phone');
    navigate('/');
  };

  const defaultImage = assets.profileicon// Default image URL

  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home" className="ms-3">
            <img src={assets.logo} alt="Logo" style={{ height: '75px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link href="#home" className="text-black me-5 ms-2 hover fw-bold ">Home</Nav.Link>
              <Nav.Link href="#menu" className="text-black me-5 ms-2 hover fw-bold">Menu</Nav.Link>
              <Nav.Link href="#contact" className="text-black me-5 ms-2 hover fw-bold">Contact Us</Nav.Link>
             <div className='navcart'>
                <Nav.Link href="#cart" className="me-5 hover ms-2">
                  <img src={assets.carticon} alt="" height="20px" width="20px" />
                </Nav.Link>
                <div className='dot'></div>
             </div>
              {userData ? (
                <Dropdown className="me-5 mt-1">
                  <Dropdown.Toggle variant="link" id="dropdown-basic" className="d-flex align-items-center text-decoration-none">
                    <Image
                      src={userData.image || defaultImage}
                      alt="User Avatar"
                      height="15px"
                      width="15px"
                      roundedCircle
                      className="me-3"
                    />

                  </Dropdown.Toggle>

                  <Dropdown.Menu align="end">
                    <Dropdown.Item>
                      <Image
                        src={userData.image || defaultImage} alt="User Avatar" height="15px" width="15px" roundedCircle className="mx-auto mt-2 mb-1" />
                    </Dropdown.Item>
                    <Dropdown.Item> {userData.username} </Dropdown.Item>
                    <Dropdown.Item >{userData.email}</Dropdown.Item>
                    <Dropdown.Item >{userData.phone}</Dropdown.Item>
                    <Dropdown.Item onClick={logout} style={{ color: "#FE0C00" }}><i class="fa-solid fa-arrow-right-from-bracket me-1"></i>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* ----------------------------------------------------------------------------------- */}
     <HomeCarousal></HomeCarousal>

     <MenuExplore category={category} setCategory={setCategory}></MenuExplore>

      <Homecard></Homecard>

      <Footer></Footer>

      






    </div>
  );
};

export default Home;

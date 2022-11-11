import React from 'react'
import styled from 'styled-components'
import { GiMedicines} from 'react-icons/gi'
import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiLinkedinFill } from 'react-icons/ri'
import { CgTwitter } from 'react-icons/cg'



const MainFooter = styled.div`
position: absolute;
width: 100%;
bottom: 0;
`
const Container = styled.div`
`
const Col = styled.div`
display: flex;
flex-direction: column;
`

const Row = styled.div`
display: flex;
justify-content:  space-around;
`
const SocialIcons = styled.div`
display: flex;
justify-content: space-around;
padding: 30px 0;
font-size: 1.5rem;
color: #15A9E3;
`



const Left = styled.div`
flex: 1;
display: flex;
align-items: center;

`

export default function Footer() {
  return (
    <MainFooter>
     <Container>
      <Row>
        <Col>
        <Left><GiMedicines size={25} style={{paddingRight: 8 ,color: '#15A9E3'}}/><h2 style={{color: '#184363'}}>Happy Medi</h2></Left>
        <SocialIcons>
          <GrFacebookOption />
          <AiOutlineInstagram />
          <RiLinkedinFill />
          <CgTwitter />
        </SocialIcons>
        </Col>
        <Col>
          
          <ul style={{listStyleType: "none"}}>
            <li><h4 style={{color: '#15A9E3'}}>Need Help</h4></li>
            <li><p>Monday - Friday: 9:00 - 20:00</p></li>
            <li><p>Saturday: 9:00 - 15:00</p></li>
            <li>Email: info@happymedi.at</li>
          </ul>
        </Col>
        <Col>
          
          <ul style={{listStyleType: "none"}}>
            <li><h4 style={{color: '#15A9E3'}}>Information</h4></li>
          <li><p>About Us</p></li>
            <li>Delivery Information</li>
            <li><p>Privacy and Policy</p></li></ul>
        </Col>
        <Col>
       
    <ul style={{listStyleType: "none"}}>
    <li><h4 style={{color: '#15A9E3'}}>Account</h4></li>
    <li><p>Dashboard</p></li>
            <li><p>My Orders</p></li>
            <li><p>Account Details</p></li>
    </ul>
        </Col>
      </Row>
     </Container>
     <hr/>
     <Row>
      <p>
        &copy;{new Date().getFullYear()} Happy Medi | All Right Reserved
      </p>
     </Row>
    </MainFooter>
  )
}
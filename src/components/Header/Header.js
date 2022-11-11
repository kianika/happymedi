import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { GiMedicines} from 'react-icons/gi'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form';
import { AiOutlineUser } from 'react-icons/ai';


const Container = styled.div`
height: 60px;
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content : space-between;
`

const Logo = styled.h2`
cursor: pointer;
margin: 0px;
padding-left: 1rem;
color: #184363;
`

const SearchInput = styled.input`
flex: 2;
background-color: #edf4f6;
border: none;

`

const SearchContainer = styled.div`
display: flex;
height: 40px;

`
const IconContainer = styled.span`
border: none;
border-radius: 0 45px 45px 0;
background-color: orange;
display: flex;
align-items:center;
justify-content: center;
padding: 0 10px;
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;`
const Center = styled.div`
flex: 4;`
const Right = styled.div`
flex: 1;
cursor: pointer;
display:flex;
align-items: center;
justify-content: center;

`

export default function Header() {
  return (
    <Container>
      <Wrapper>
      <Left><GiMedicines size={30} style={{color: '#15A9E3'}}/><Logo>Happy Medi</Logo></Left>
      <Center>
        <form>
       
        <SearchContainer>
        <Form.Select aria-label="Default select example" style={{borderRadius: '45px 0 0 45px', border: 'none', backgroundColor: '#edf4f6'}}>
      <option>Category</option>
      <option value="1">Beauty</option>
      <option value="2">Medicine</option>
      <option value="3">Herbs</option>
    </Form.Select>
    <SearchInput type="text" placeholder='What are you Looking for?'/>
          <IconContainer>
          <CiSearch />
          </IconContainer>
        </SearchContainer>
        </form>
      </Center>
      <Right>
      <AiOutlineUser style={{padding: 7}}/> My Account
      </Right>
      </Wrapper>

    </Container>
  )
}

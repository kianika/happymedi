import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { GiSwitzerland } from 'react-icons/gi'
import styled from 'styled-components'

const PageContainer = styled.div`
min-height: 100vh;
position: relative;
`

export default function  Page() {
  return (
    <PageContainer>
    <Header />
    <Footer />

 
   
    </PageContainer>
  )
}

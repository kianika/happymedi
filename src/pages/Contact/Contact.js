import React from 'react'
import styled from 'styled-components'


const Row = styled.div`
display: flex;
`
export default function Contact() {
  return (
    <div style={{padding: '0 120px'}}>
      
      <p style = {{fontSize: '2rem'}}>Contact Us</p>
      <p> Lets us know what you think! In order to provide better service, please do not hesitate to give us your feedback. Thank you.</p>
      <hr/>
      <form style={{marginTop: '80px'}}>
       <Row>
          <input type="text" placeholder='Name' style={{border: `none`, borderBottom: '1px solid #15A9E3', flex: '1', margin: '15px', paddingBottom: '5px'}}/>
          <input type="email" placeholder='Email'  style={{border: `none`, borderBottom: '1px solid #15A9E3', flex: '1', margin: '15px' , paddingBottom: '5px'}} />
       </Row>
       <Row>
       <input type="subject" placeholder='Subject'  style={{border: `none`, borderBottom: '1px solid #15A9E3', flex: '1', margin: '30px 15px 30px 15px' , paddingBottom: '5px'}} />
       </Row>
       <Row>
        <textArea rows="3" cols="50" placeholder='Message'  style={{border: `none`, borderBottom: '1px solid #15A9E3', flex: '1', margin: '30px 15px 30px 15px' , paddingBottom: '5px'}}>

        </textArea>
       </Row>
        <input type="submit" value="Submit" style={{backgroundColor: '#F2971F', padding: '13px 30px', color: 'white', border: ' none', borderRadius: '10px'}}/>
      </form>
    </div>
  )
}

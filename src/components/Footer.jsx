
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter} from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
display: flex;
${mobile({flexDirection: "column"})}
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p`
margin: 20px 0px;
`

const SocialContainer = styled.div`
display: flex;
`

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({display:"none"})}
`

const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const Listitems = styled.li`
    width: 50%;
    margin-bottom: 20px;
`

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({backgroundColor: "#fff8f8"})}
`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`


const Payment = styled.img`
width: 50%;
`


const Footer = () => {
  return (
      <Container>
          <Left>
              <Logo>CHIMEX.</Logo>
              <Desc>
                  There are many variations of Lorem Ipsum available, but the majority have suffered some alterations in some form,
                  by injected humour, or randomized words which don't look even slightly believable.
              </Desc>
              <SocialContainer>
                  <SocialIcon color="3B5999">
                      <Facebook />
                  </SocialIcon>
                  <SocialIcon color="E4405F">
                      <Instagram />
                  </SocialIcon>
                  <SocialIcon color="55ACEE">
                      <Twitter />
                  </SocialIcon>
                  <SocialIcon color="E60023">
                      <Pinterest />
                  </SocialIcon>
              </SocialContainer>
          </Left>

          <Center>
              <Title>Useful Links</Title>
              <List>
                  <Listitems>Home</Listitems>
                  <Listitems>Cart</Listitems>
                  <Listitems>Men Fashion</Listitems>
                  <Listitems>Women Fashion</Listitems>
                  <Listitems>Accessories</Listitems>
                  <Listitems>My Account</Listitems>
                  <Listitems>Order Tracking</Listitems>
                  <Listitems>Wishlist</Listitems>
                  <Listitems>Terms</Listitems>
                 
              </List>
          </Center>

          <Right>
              <Title>Contacts</Title>
              <ContactItem><Room style={{marginRight:"10px"}}/>
                  23, Pentville Estate Lokogoma, Abuja
              </ContactItem>
              <ContactItem><Phone style={{marginRight:"10px"}}/>
                  +234-90-3085-3526
              </ContactItem>
              <ContactItem><MailOutline style={{marginRight:"10px"}}/>
                  contact@chimex.dev
              </ContactItem>
              <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
          </Right>
      
    </Container>
  )
}

export default Footer


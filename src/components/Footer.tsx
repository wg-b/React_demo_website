import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import logoimage from '../assets/images/Logo-footer.jpeg';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';

const footerItems = ["CLASSES", "CALENDAR", "STUDIO RENTAL", "EQUIMENT RENTAL", "FAQ", "TERMS & CONDITIONS", "SUBSCRIBE", "BLOG"];

export default function Footer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ 
          position: 'relative', 
          component: "nav",        
          color: "#000000",
          backgroundColor: "#FFF",
          boxShadow: "0 0 11px 8px rgb(0 0 0 / 5%)",
          textTransform: "capitalize",
        }}>
        <Container maxWidth="lg" sx={{ pt: 8, pb: 4, color: '#2b2b2b'}}>  
        
          <Link
            href='https://instagram.com/wearebkc'
            variant="h6"
            underline='none' 
            color={"#616161"}
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              px: 2, py: 1, 
              cursor: "pointer",
              "&:hover": {
                color: "#000"
              },
            }}
              
                  
          >
            <InstagramIcon />            
          </Link>         
          <Box sx={{ fontFamily: "Helvetica Neue, Arial, sans-serif", height: '30%', display: "flex", alignItems: 'center', flexWrap: 'wrap', pb: 2, justifyContent: 'center'}}>
            {footerItems.map((item) => (
              <Link
                key={item}
                sx={{
                  color: 'text.disabled',
                  px: 3,
                  fontWeight: "700",
                  fontSize: 11,   
                  cursor: 'pointer', 
                  "&:hover": {
                    color: "#000"
                  },                
                }}
                underline="none"
              >
                {item}
              </Link>
            ))}
          </Box>

          <Typography
            variant="h6"
            component="h6"					
            fontWeight={"300"}
            fontFamily={"Libre Franklin"}
            fontSize="16px"
            color={"#616161"}
            textAlign={"center"}
            sx={{						
              width: { xs: "100%", md: "100%" },
              display: 'flex',
              justifyContent: 'center', 
               
              pb: 2,
              px: 2,           
            }}
          >
            BKC | 736 Bushwick ave Brooklyn, New York 11221 | (718) 362-2394 | @WeAreBKC | All rights reserved
				</Typography>          
        <Link
          variant="h6"
          sx={{ display: 'flex', justifyContent: 'center', px: 2, py: 2, cursor: "pointer" }}
          underline='none'
        >
          <Box
            component="img"
            alt="logo"              
            src={logoimage}
          />            
        </Link>          
        </Container>
      </AppBar>
    </Box>
  );
}

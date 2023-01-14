import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import mainview from "../assets/images/back.jpg";
import CardMedia from "@mui/material/CardMedia";
import { grey } from "@mui/material/colors";
import Carousel from "./Carousel";
import Smallcarousel from "./Smallcarousel";
import { createTheme } from "@mui/system";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";


const theme = createTheme({
	typography: {},
});

export default function TypographyTheme() {
	return (
		<Container maxWidth="lg" sx={{ pt: 8, pb: 2, color: "#2b2b2b" }}>
			<Box sx={{ display: "flex" }}>
				<Box
					sx={{
						flex: 1,
						textAlign: "center",
					}}
				>
					<Box
						component="img"
						alt="logo"
						sx={{ width: { xs: "100%", md: "100%" } }}
						src={mainview}
					/>
				</Box>
			</Box>
			<Typography
				variant="h6"
				component="h6"
				align="center"
				sx={{
					flexGrow: 1,
					width: { xs: "80%", md: "80%" },
					m: "auto",
					textAlign: "justify",
					fontWeight: "700",
					mt: { xs: 1, sm: 1, md: 2, lg: 3 },
					fontSize: { xs: 12, sm: 14, md: 16, lg: 18 },
					fontFamily: "Helvetica Neue, Arial, sans-serif",
				}}
			>
				With BKC you can explore your creative side through photo, video and software classes designed to inspire and motivate you.
				Discover a new passion or learn a new skill.  Ignite your ideas.  And strike a much-needed balance between your left and right brain.
			</Typography>
			<Typography
				variant="h6"
				component="h6"
				align="center"
				sx={{
					flexGrow: 1,
					width: { xs: "80%", md: "80%" },
					m: "auto",
					textAlign: "justify",
					mt: { xs: 1, sm: 1, md: 2, lg: 3 },
					fontSize: { xs: 11, sm: 12, md: 14, lg: 16 },
					fontFamily: "Helvetica Neue, Arial, sans-serif",
				}}
			>
				After a year of shut doors, we’re beyond happy to re-introduce {" "}
				<Typography
					component="span"
					fontWeight="600"
					color="#ffcc00"
					sx={{
						flexGrow: 1,
						width: { xs: "80%", md: "80%" },
						m: "auto",
						textAlign: "justify",
						mt: { xs: 1, sm: 1, md: 2, lg: 3 },
						fontSize: { xs: 11, sm: 12, md: 14, lg: 16 },
						cursor: 'pointer'
					}}
				>
					IN-PERSON LEARNING
				</Typography>{" "}
				at our Bushwick space, alongisde our synchronous remote learning platform {" "}
				<Typography
					component="span"
					fontWeight="600"
					color="#ffcc00"
					sx={{
						flexGrow: 1,
						width: { xs: "80%", md: "80%" },
						m: "auto",
						textAlign: "justify",
						mt: { xs: 1, sm: 1, md: 2, lg: 3 },
						fontSize: { xs: 11, sm: 12, md: 14, lg: 16 },
						cursor: 'pointer'
					}}
				>
					BKC LIVE.
				</Typography>{" "}
				In-Person seating is extremely limited so book early to reserve your spot. {" "}
				<Typography
					component="span"
					fontWeight="600"
					color="#ffcc00"
					sx={{
						flexGrow: 1,
						width: { xs: "80%", md: "80%" },
						m: "auto",
						textAlign: "justify",
						mt: { xs: 1, sm: 1, md: 2, lg: 3 },
						fontSize: { xs: 11, sm: 12, md: 14, lg: 16 },
						cursor: 'pointer'
					}}
				>
					ANALOG
				</Typography>{" "}
				classes will continue with limited capacity at Gowanus Darkroom, and they sell out fast!
			</Typography>

			<Typography
				variant="h6"
				component="h6"
				fontWeight="800"
				sx={{
					flexGrow: 1,
					textAlign: "center",
					mt: 4,
					fontSize: { xs: 20, sm: 24, md: 28, lg: 32 },
					fontFamily: "Helvetica Neue, Arial, sans-serif",
				}}
			>
				Get inspired.  Stay motivated.  Never stop learning.
			</Typography>
			<Box justifyContent={"center"} sx={{ mt: 3, display: 'flex', }}>
				<Button
					variant="text"
					sx={{
						py: { xs: "15px", md: "25px" },
						px: { xs: "30px", md: "40px" },
						height: "100%",
						border: "2px solid black",
						color: "#212121",
						"&:hover": {
							backgroundColor: "#212121",
							color: "#ffffff"
						},
					}}
				>
					<Typography
						variant="h5"
						fontWeight="500"
						sx={{
							flexGrow: 1,
							textAlign: "center",
							fontSize: { xs: 16, md: 20 },
						}}
					>
						LEARN MORE
					</Typography>
				</Button>
			</Box>
			<Carousel />
			<Box
				sx={{
					borderLeft: "1px solid black",
				}}>
				<Typography
					variant="h6"
					component="h6"
					color={"#000"}
					fontWeight={400}
					sx={{
						flexGrow: 1,
						width: "90%",
						m: "auto",
						fontFamily: "AmaticSC",
						mt: 6,
						// fontSize: 47,
						fontSize: { xs: 36, sm: 40, md: 44, lg: 47 },
						textRendering: "optimizeLegibility"
					}}
				>
					“BKC is awesome.  Small classes, excellent instructors, reasonable prices, cool vibe.
					Each class, I feel a door is opened, and I go home excited to test what I’ve learned.”
				</Typography>
			</Box>

			<Typography
				variant="h6"
				component="h6"
				color={"text.disabled"}
				sx={{
					flexGrow: 1,
					width: "100%",
					m: "auto",
					textAlign: "right",
					mt: 4,
					fontFamily: "Libre Franklin",
					fontSize: 18,
				}}
			>
				— Adam B. (★★★★★ via Yelp)
			</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
				<Link to="/" style={{textDecoration: 'none'}}>
					<Typography
						variant="h6"
						component="h6"
						color={"#ffcc00"}
						sx={{
							textAlign: "right",
							mt: 4,
							fontFamily: "Libre Franklin",
							fontStyle: "italic",
							fontSize: 18,
							pl: 1
						}}
					>
						Reviews
					</Typography>
				</Link>
				<Typography
					variant="h6"
					component="h6"
					color={"text.disabled"}
					sx={{
						textAlign: "right",
						mt: 4,
						fontFamily: "Libre Franklin",
						fontStyle: "italic",
						fontSize: 18,
						// display: "flex"
					}}
				>
					Read more
				</Typography>
			</Box>
			<Smallcarousel />
			<Box sx={{ px: 4, py: 4 }}>
				<Typography
					variant="h6"
					component="h6"					
					fontWeight={"700"}
					// fontFamily={"Libre Franklin"}
					fontSize="30px"
					color={"#212121"}
					lineHeight={"36px"}
					sx={{
						width: { xs: "100%", md: "100%" },
						textAlign: "left",
						mt: { xs: 1, sm: 1, md: 2, lg: 3 },
					}}
				>
					Stay connected!
				</Typography>
				<Typography
					variant="h6"
					component="h6"					
					fontWeight={"300"}
					// fontFamily={"Libre Franklin"}
					fontSize="16px"
					color={"#616161"}
					lineHeight={"24px"}
					sx={{						
						width: { xs: "100%", md: "100%" },
						textAlign: "justify",
						mt: { xs: 1, sm: 1, md: 1, lg: 2 },
					}}
				>
					To stay in touch about classes and events here at BKC and beyond, jot your name and email below and we’ll give you a shout no more than 4 times a month.
					You can also{"  "}
					<Typography
						component="span"
						
						sx={{
							cursor: 'pointer',
							textDecoration: 'underline'
						}}
					>
						follow us on Instagram
					</Typography>
					{" "}if you prefer that kind of thing.
				</Typography>
				<TextField id="outlined-basic" placeholder="First Name" variant="outlined" focused={false} sx={{mt: 4, pr: 1}}/>
				<TextField id="outlined-basic" placeholder="Last Name" variant="outlined" focused={false} sx={{mt: 4, pr: 1}}/>
				<TextField id="outlined-basic" placeholder="Email Adress" variant="outlined" focused={false} sx={{mt: 4, pr: 1}}/>
				<Button
					variant="text"
					sx={{
						py: { xs: "15px", md: "15px" },
						px: { xs: "30px", md: "30px" },
						height: "100%",
						border: "2px solid black",
						color: "#212121",
						mt: 4,
						"&:hover": {
							backgroundColor: "#212121",
							color: "#ffffff"
						},
					}}
				>
					<Typography
						variant="h5"
						fontWeight="500"
						sx={{
							flexGrow: 1,
							textAlign: "center",
							fontSize: "15px",
						}}
					>
						SIGN UP
					</Typography>
				</Button>
				<Typography
					variant="h6"
					component="h6"					
					fontWeight={"300"}
					// fontFamily={"Libre Franklin"}
					fontSize="12px"
					color={"text.disabled"}
					sx={{						
						width: { xs: "100%", md: "100%" },
						textAlign: "justify",
						mt: 4,
					}}
				>
					Your privacy is always respected. We won't share this information with any third parties
				</Typography>				
			</Box>			
			
		</Container>
	);
}

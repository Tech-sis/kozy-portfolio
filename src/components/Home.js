import React from 'react'
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container } from '@mui/system'
import { Typography, Box, Button, Link } from '@mui/material'
import Divider from '@mui/material/Divider';
import logo from '../images/logo.svg'
import yemi from '../images/profileImage.png'
import star from '../images/Star.svg'
import heroImage from '../images/heroImage.svg'
import articles from './article'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


const Home = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <header>
        <Box component='img' src={logo} sx={{}} ></Box>
        {/* <img alt='logo' src={logo} /> */}
        <Divider variant='middle' />
        <Box>
          <Typography variant='subtitle1' component='h2'>Content Writer</Typography>
          <Divider orientation="vertical" variant='middle' flexItem />
          <Typography variant='subtitle1' component='h2'>Brand Storyteller</Typography>
        </Box>

      </header>
      <main>
        <section>
          <Typography variant='h1' component='h1'>kosoko oyeyemi</Typography>
        </section>
        <section>
          <Container>
            <Box component='img' src={yemi} ></Box>
            <Typography variant='body2' component='aside' >
              Every storyteller is answering a question. For me, I am mostly trying to answer the question about how to use content as a leveraging tool to promote brands.
              I love stories! I love to tell them, I love to consume them. I love to be transported to places - from the streets of Seoul in a K-Drama to Diagon Alley. I love to use stories to communicate, to make brands more relatable and closer to their audience
            </Typography>
          </Container>
        </section>
        <section>
          <Container>
            <Typography variant='h2' component='h2'>Skills & Expertise</Typography>
            <Box component='img' src={logo} sx={{}} ></Box>
            <hr />
            <div>
              <Typography variant='body2' component='body'>
                At my core, I am a content writer. Over the years, I have picked up additional skills which have proven to be useful in accelerating my career.
              </Typography>
            </div>
            <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
                centered
              >
                <Tab label="Content Writing" {...a11yProps(0)} />
                <Tab label="Creative Writing" {...a11yProps(1)} />
                <Tab label="Editing" {...a11yProps(2)} />
                <Tab label="Content Creation" {...a11yProps(3)} />
              </Tabs>
              <TabPanel value={value} index={0} dir={theme.direction}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3} dir={theme.direction}>
                Item Four
              </TabPanel>
            </Box>
            <Box>
              <Divider variant='middle' />
              <Typography variant='subtitle2' component='h2'><span>62%</span>of consumers are willing to reckon with a brand that they vibe with, rather than a brand that seems untouchable</Typography>
              <Divider variant='middle' />
            </Box>
          </Container>
        </section>
        <section>
          <Container>
            <Typography variant='h2' component='h2'>Selected Works</Typography>
            <Box component='img' src={logo} sx={{}} ></Box>
            <hr />
            {articles.map((article) => (
              <Box key={article.id}>
                <img src={heroImage} alt={article.alt} />
                <Typography variant='h3' component='h3'>{article.heroTitle}</Typography>
                <Typography variant='body2' component='body'>
                  {article.body}
                </Typography>
                <Button variant='contained'>Read More</Button>
              </Box>
            ))}
          </Container>
        </section>
        <section>
          <Container>
            <Typography variant='h2' component='h2'>Career Highlights</Typography>
            <Box component='img' src={star} sx={{}} ></Box>
            <hr />
            <Container>
              <Typography variant='h3' component='h3'>Awards and Certification</Typography>
              <div>
                <Typography variant='subtitle2' component='subtitle'>
                  The Strategy of Content Marketing
                </Typography>
                <Typography variant='body2' component='body'>
                  University of California, Davis
                </Typography>
                <Typography variant='body2' component='body'>
                  2022
                </Typography>
              </div>
              <div>
                <Typography variant='subtitle2' component='subtitle'>
                  <span>Member</span>: Chartered Institute of Personnel Management, Nigeria
                </Typography>
                <Typography variant='body2' component='body'>
                  2020
                </Typography>
              </div>
              <div>
                <Typography variant='subtitle2' component='subtitle'>
                  <span>Member</span>: Project Management Institute
                </Typography>
                <Typography variant='body2' component='body'>
                  2020
                </Typography>
              </div>
              <div>
                <Typography variant='subtitle2' component='subtitle'>
                  <span>Fellow</span>: YALI Regional Leadership Center West Africa Accra
                </Typography>
                <Typography variant='body2' component='body'>
                  2019
                </Typography>
              </div>
              <div>
                <Typography variant='subtitle2' component='subtitle'>
                  <span> Student of the Year</span>: Political Science Class of 2015
                </Typography>
                <Typography variant='body2' component='body'>
                  University of Lagos
                </Typography>
              </div>
              <div>
                <Typography variant='subtitle2' component='subtitle'>
                  <span>Assmus Best Graduating Student</span>: Political Science Class of 2015
                </Typography>
                <Typography variant='body2' component='body'>
                  University of Lagos
                </Typography>
              </div>
            </Container>
          </Container>
          <hr />
        </section>
        <section>
          <Container>
            <Typography variant='h2' component='h2'>Lets Collaborate</Typography>
            <Box component='img' src={logo} sx={{}} ></Box>
            <hr />
            <Container>
              <div>
                <Box component='img' src={yemi} sx={{}} ></Box>
                <Box>
                  <TwitterIcon />
                  <Link href='https://twitter.com/iamyemib' target='_blank' rel='noopener'>
                    <Typography variant='body2' component='body'>
                      Say hi on Twitter
                    </Typography>
                  </Link>
                </Box>
                <Box>
                  <LinkedInIcon />
                  <Link href='https://twitter.com/iamyemib' target='_blank' rel='noopener'>
                    <Typography variant='body2' component='body'>
                      Connect on LinkedIn
                    </Typography>
                  </Link>
                </Box>
                <Box>
                  <EmailIcon />
                  <Link href='https://twitter.com/iamyemib' target='_blank' rel='noopener'>
                    <Typography variant='body2' component='body'>
                      Send an Email
                    </Typography>
                  </Link>
                </Box>
              </div>
            </Container>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Home

'use client'
import React,{useState,useEffect} from 'react'
import { Typography , Button, IconButton,Stack,ButtonGroup,ToggleButton,ToggleButtonGroup,
TextField,InputAdornment,Box,MenuItem,FormControl,FormLabel,
FormControlLabel,RadioGroup,Radio,FormHelperText,Checkbox, FormGroup,Switch,Rating,Autocomplete,
 Divider,Grid,Card,CardContent,CardMedia,CardActions,Accordion,AccordionSummary,AccordionDetails, Paper
,ImageList,ImageListItem,ImageListItemBar,Menu, Link,Breadcrumbs,Drawer
,SpeedDial,SpeedDialAction,SpeedDialIcon} from '@mui/material'

import SendIcon from '@mui/icons-material/Send';
import { FunctionsSharp, Send, TroubleshootSharp } from '@mui/icons-material';
import { Bookmark , BookmarkBorder,CopyAll,Print,Share} from '@mui/icons-material';
import { convertLength } from '@mui/material/styles/cssUtils';

export default function Home() {
  const [country,setCountry] = useState([])
  const [format,setFormat] = useState([])
  const [experience,setExperience] = useState()
  const [accept,setAccept] = useState(false)
  const [skills,setSkills] = useState([])
  const [expanded,setExpanded] = useState(false)
  const [anchorEl,setAnchorEl] = useState(null)
  const [slide,setSlide] = useState(false)
  const op = Boolean(anchorEl)
 function HandleE(e){
    setAnchorEl(e.currentTarget)
  }
  function ChangeFormat(e){
    if(fil){
    const fil = format.filter(el=>{
      return el=e.target.value
    })}
    console.log(fil)
     if(fil.length==0){
      setFormat([...format,e.target.value])
      fil=[]
     }else{setFormat(format.filter(el=>{
      return el!=e.target.value
     }))
     fil=[]
    }
  }
 useEffect(()=>{
   console.log(format)
 },[format])
 function handleCount(e){
   setCountry([...country,e.target.value[e.target.value.length-1]])
 }
 useEffect(()=>{
  console.log(country)
 },[country]) 
 function handleExpe(e){
  setExperience(e.target.value)
 }
 useEffect(()=>{
  console.log(experience)
  console.log(accept)
  console.log(skills)
 },[experience,accept,skills]) 
  function handleSkills(e){
    if(skills.indexOf(e.target.value)==-1){
      setSkills([...skills,e.target.value])
    }else{scrfvd
      setSkills(skills.filter(el=>{
        return el!==e.target.value
      }))
    }
  }
function handleExpan(num){
  if(expanded==num){
    setExpanded(false)
  }else{setExpanded(num)}
}
function handc(){
  setAnchorEl(null)
}
  return (
    <Paper sx={{height:'3000px'}}>
     <Stack spacing={3} display='flex' direction='row'>
       <Button variant='text' color='secondary' startIcon={<SendIcon/>} disableRipple>asd</Button>
       <Button variant='contained'>asd</Button>
     </Stack>
     <IconButton>
      <SendIcon/>
     </IconButton>
    <Typography variant='h1' gutterBottom color='secondary'>
      text
    </Typography>
    
    <ButtonGroup  variant='outlined' color='secondary'>
      <Button>prev</Button>
      <Button>center</Button>
      <Button>next</Button>
    </ButtonGroup>
    
    <ToggleButtonGroup 
    orientation='vertical'
    value={format}
    onChange={(e)=>ChangeFormat(e)}
    exclusive
    >
      <ToggleButton value='red' >red</ToggleButton>
      <ToggleButton value='green'>green</ToggleButton>
      <ToggleButton value='blue'>blue</ToggleButton>
    </ToggleButtonGroup>
    <TextField label='amo' color='secondary' helperText='fill ' required error type='password' inputProps={{startAdornment:<InputAdornment position='start'>+98</InputAdornment>}}/>
    <Box width='250px' padding='10px'>
      <TextField label='Select Country' select fullWidth onChange={e=>handleCount(e)} value={country} SelectProps={{multiple:true}}>
          <MenuItem value='IN'>India</MenuItem>
          <MenuItem value='US'>Usa</MenuItem>
          <MenuItem value='IR'>Iran</MenuItem>
      </TextField>
    </Box>
    <FormControl error>
      <FormLabel >job experience</FormLabel>
      <RadioGroup onChange={e=>handleExpe(e)} value={experience} row>
        <FormControlLabel control={<Radio size='small' color='secondary' />}label='0-2' value='0-2'/>
        <FormControlLabel control={<Radio/>} label='2-5' value='2-5'/>
        <FormControlLabel control={<Radio/>} label='5-10' value='5-10'/>
      </RadioGroup>
      <FormHelperText>manam</FormHelperText>
    </FormControl>
    <FormControl >
       <FormLabel>Skills</FormLabel>
       <FormGroup>
       <FormControlLabel label='Html' value='Html'  control={<Checkbox/>} checked={skills.includes('Html')} onChange={e=>handleSkills(e)}/>
       <FormControlLabel label='css' value='css'  control={<Checkbox/>} checked={skills.includes('css')} onChange={e=>handleSkills(e)}/>
       <FormControlLabel label='java' value='java'  control={<Checkbox/>} checked={skills.includes('java')} onChange={e=>handleSkills(e)}/>
       </FormGroup>
       
    </FormControl>
    <FormControl>
    <Checkbox icon={<BookmarkBorder/>} checkedIcon={<Bookmark/>} checked={accept} onChange={()=>setAccept(!accept)}/>
    </FormControl>
   <FormControlLabel label='Dark Mode'  control={<Switch label='Dark Mode' color='secondary' size='medium'/>} />
   <Rating highlightSelectedOnly/>
   <Stack 
  
    direction='column'
    divider={<Divider orientation='vertical' sx={{width:'2rem'}}/>}
    > 
    <Box 
    sx={{
      background:'red',
      color:'green',
      p:'2rem',
      width:'30%',
      '&:hover':{
        background:'blue'
      }
    }}>
      Convenience
    </Box>
    <Box 
    sx={{
      background:'red',
      color:'green',
      p:'2rem',
      width:'30%',
      '&:hover':{
        background:'blue'
      }
    }}>
      Convenience
    </Box>
    
    </Stack>
    <Grid container my={5} columnSpacing={2} rowSpacing={2} sx={{background:'white'}} >
       <Grid item xs={6} md={6}  ><Box sx={{background:'blue'}}>item 1</Box></Grid>
       <Grid item xs={6} md={6} ><Box sx={{background:'blue'}}>item 1</Box></Grid>
       <Grid item xs={6} md={6} ><Box sx={{background:'blue'}}>item 1</Box></Grid>
       <Grid item xs={6} md={6} ><Box sx={{background:'blue'}}>item 1</Box></Grid>
    </Grid>
    <Card sx={{width:'20%'}}>
      <CardMedia component='img'/>
      <CardContent>
        <Typography variant='h3'>Hello</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus eius nostrum? Reprehenderit atque quasi labore ut nobis ex suscipit repudiandae, beatae earum veritatis, exercitationem minus possimus quae aliquam dignissimos?</Typography>
      </CardContent>
      <CardActions><Button variant='contained'>Share</Button></CardActions>
    </Card>
    <Stack sx={{width:'40%'}} direction='column'>
    <Accordion expanded={expanded===1} onChange={()=>handleExpan(1)}>
      <AccordionSummary>
        <Typography variant='h5'>summary1</Typography>
      </AccordionSummary>
      <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, libero enim! Officiis excepturi nostrum ipsa molestias aut non! Delectus incidunt nam rerum. Debitis eum dolorem assumenda quisquam nostrum temporibus? Delectus.</AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded===2} onChange={()=>handleExpan(2)}>
      <AccordionSummary>
        <Typography variant='h5'>summary2</Typography>
      </AccordionSummary>
      <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, libero enim! Officiis excepturi nostrum ipsa molestias aut non! Delectus incidunt nam rerum. Debitis eum dolorem assumenda quisquam nostrum temporibus? Delectus.</AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded===3} onChange={()=>handleExpan(3)}>
      <AccordionSummary>
        <Typography variant='h5'>summary3</Typography>
      </AccordionSummary>
      <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, libero enim! Officiis excepturi nostrum ipsa molestias aut non! Delectus incidunt nam rerum. Debitis eum dolorem assumenda quisquam nostrum temporibus? Delectus.</AccordionDetails>
    </Accordion>
    </Stack>
    <Stack>
      <ImageList variant='woven' sx={{width:'500px',height:'400px'}} cols={3} gap={8} >
        {itemData2.map(item=>(
        <ImageListItem  key={item.img}>
          <img src={item.img} alt={item.title} loading='lazy'/>
        </ImageListItem>
        ))}
      </ImageList>
      
    </Stack>
    <Box sx={{width:'500px',height:'400px',overflowY:'scroll'}}>
    <ImageList variant='masonry'  cols={3} gap={8} >
        {itemData2.map(item=>(
        <ImageListItem  key={item.img}>
          <img src={item.img} alt={item.title} loading='lazy'/>
        </ImageListItem>
        ))}
      </ImageList>
    </Box>
    <Button variant='contained' color='primary' onClick={e=>HandleE(e)}>nas</Button>
    <Menu anchorEl={anchorEl} open={op} onClose={handc}>
      <MenuItem onClick={handc}>floor</MenuItem>
      <MenuItem onClick={handc}>ceiling</MenuItem>
    </Menu>
    <Stack>
    <Link href='#' variant='h6' underline='hover' color='secondary' >I3center</Link>
    </Stack>
    <Box>
      <Breadcrumbs separator='-' itemsBeforeCollapse={2} itemsAfterCollapse={2} maxItems={2} >
       <Link>home</Link>
       <Link>about</Link>
       <Link>products</Link>
       <Link>shit</Link>
      </Breadcrumbs>
    </Box>
    <Button onClick={()=>setSlide(true)}>open</Button>
    <Drawer anchor='left' open={slide} onClose={()=>setSlide(false)}>
      <Typography variant='h5'>Hello im under the water</Typography>
    </Drawer>
    <SpeedDial ariaLabel='bale bale' sx={{bottom:'13px',right:'13px',position:'absolute'}} icon={<SpeedDialIcon/>}>
      <SpeedDialAction icon={<Print/>} tooltipTitle='Print' tooltipOpen={true}/>
      <SpeedDialAction icon={<Share/>} tooltipTitle='Share' tooltipOpen/>
    </SpeedDial>
    </Paper>
    
  )
} 
const itemData = [
  
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
const itemData2 = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
];

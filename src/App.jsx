import { Box, Button } from "@chakra-ui/react"
// import Navbar from "./components/navbar"
import Times from "./components/times"
import { useState } from "react";
import { Text } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import React from 'react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import Footer from "./components/footer";


function App() {
  // const [loading, setLoading] = useState(true);

  const [api, setApi] = useState("https://islomapi.uz/api/present/day?region=Farg'ona")
  console.log(api)

  const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const [current, setCurrent] = useState(time)
    const updateTime = () => {
        let time = new Date().toLocaleTimeString()
        setCurrent(time)
    }
    setInterval(updateTime, 1000);

  return (
    <Box>


    <Box display={{base: 'none',md :'flex'}} p={'10px'} minHh={'5vh'} bg={'#FAD5A5'} w={'100%'}>
      <Box  w={{base: '90%', md: '80%'}}  className='center' display={{base: 'none', md: 'flex'}} justifyContent={'space-between'} alignItems={'center'}>
        
        <Box>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'7px'}>
        <Text fontWeight={'400'} fontSize={{base: '16px', md: '20px'}} color={'#fff'}>Hozirgi Vaqt:</Text> 
        <Text fontWeight={'400'} fontSize={{base: '16px', md: '20px'}} color={'#fff'}>{current}</Text>
      </Box>
        <Text textAlign={'center'} fontWeight={'400'} fontSize={{base: '16px', md: '20px'}} color={'#fff'}>Bugungi sana: {date}</Text> 
        </Box>
        <Box>
            <Text  fontSize={{base: '24px', md: '33px'}} fontWeight={{base: '400', md: '700'}} color={'#fff'}>Namoz Vaqtlari</Text>
        </Box>

        <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Viloyat
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Farg'ona")}>Fargona</MenuItem>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Toshkent")}>Toshkent</MenuItem>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Andijon")} >Andijon</MenuItem>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Namangan")} >Namangan</MenuItem>
            <MenuItem onClick={() => setApi( "https://islomapi.uz/api/present/day?region=Jizzax")} >Jizah</MenuItem>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Samarqand")} >Samarqand</MenuItem>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Buxoro")} >Buhoro</MenuItem>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Navoiy")} >Navoiy</MenuItem>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Xorazm")}>Xorazm</MenuItem>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Qoraqalpogiston")}>Qoraqalpoq</MenuItem>
            <MenuItem onClick={() => setApi("https://islomxapi.uz/api/present/day?region=sir-daryo")}>Sirdaryo</MenuItem>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Qashqadaryo")}>Qashqadaryo</MenuItem>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Surxondaryo")}>Surxondaryo</MenuItem>
          </MenuList>
        </Menu>
        </Box>
      </Box>

      
    </Box>

    <Box display={{base: 'flex',md :'none'}} p={'10px'} minHh={'5vh'} bg={'#FAD5A5'} w={'100%'}>
    <Box  w={'85%'} className="center ">
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Box>
        <Text  fontSize={{base: '24px', md: '33px'}} fontWeight={{base: '400', md: '700'}} color={'#fff'}>Namoz Vaqtlari</Text>
        </Box>

        <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Viloyat
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Farg'ona")}>Fargona</MenuItem>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Toshkent")}>Toshkent</MenuItem>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Andijon")} >Andijon</MenuItem>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Namangan")} >Namangan</MenuItem>
            <MenuItem onClick={() => setApi( "https://islomapi.uz/api/present/day?region=Jizzax")} >Jizah</MenuItem>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Samarqand")} >Samarqand</MenuItem>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Buxoro")} >Buhoro</MenuItem>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Navoiy")} >Navoiy</MenuItem>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Xorazm")}>Xorazm</MenuItem>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Qoraqalpogiston")}>Qoraqalpoq</MenuItem>
            <MenuItem onClick={() => setApi("https://islomxapi.uz/api/present/day?region=sir-daryo")}>Sirdaryo</MenuItem>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Qashqadaryo")}>Qashqadaryo</MenuItem>
            <MenuItem onClick={() => setApi("https://islomapi.uz/api/present/day?region=Surxondaryo")}>Surxondaryo</MenuItem>
          </MenuList>
        </Menu>
        </Box>

        </Box>


        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Text textAlign={'center'} fontWeight={'400'} fontSize={'16px'} color={'#fff'}>Sana: {date}</Text> 
        <Text fontWeight={'400'} fontSize={'16px'} color={'#fff'}>Vaqt: {current}</Text>
        </Box>

        
      </Box>
    </Box>


      {/* <Navbar api={api} setApi={setApi} /> */}
      <Times api={api}/>
      <Footer />
    </Box>
  )
}

export default App

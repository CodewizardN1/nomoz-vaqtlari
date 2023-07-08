import { Box, Button } from "@chakra-ui/react"
// import Navbar from "./components/navbar"
import Times from "./components/times"
import Clock from "./components/clock"
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

  return (
    <Box>


    <Box p={'10px'} minHh={'8vh'} bg={'#00FFFF'} w={'100%'}>
      <Box  w={{base: '90%', md: '80%'}}  className='center' display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Box>
            <Text display={{base: 'none', md: 'flex'}} fontSize={{base: '25px', md: '33px'}} fontWeight={{base: '400', md: '700'}}>Code Wizard</Text>
        </Box>
        <Box>
            <Text  fontSize={{base: '24px', md: '33px'}} fontWeight={{base: '400', md: '700'}} color={'orange.200'}>Nomoz Vaqtlari</Text>
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


      {/* <Navbar api={api} setApi={setApi} /> */}
      <Clock api={api} />
      <Times api={api}/>
      <Footer />
    </Box>
  )
}

export default App

/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import Form from "views/admin/notificationTemplate/components/Form";
import React from "react";
import DataTable from "./components/DataTable";

export default function Settings() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex justifyContent={"flex-end"}>
      
      <Button borderRadius={10} my={5} colorScheme={"blackAlpha"} variant="solid" >Create</Button>
      </Flex>
      <SimpleGrid
        mb='20px'
        columns={1}
        spacing={{ base: "20px", xl: "20px" }}>
        <DataTable />
        <Form/>
      </SimpleGrid>
    </Box>
  );
}

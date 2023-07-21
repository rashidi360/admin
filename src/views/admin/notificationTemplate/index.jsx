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
import { Box, SimpleGrid } from "@chakra-ui/react";
import ColumnsTable from "views/admin/notificationTemplate/components/ColumnsTable";
import ComplexTable from "views/admin/notificationTemplate/components/ComplexTable";
import Form from "views/admin/notificationTemplate/components/Form";
import TemplateCard from "views/admin/notificationTemplate/components/TemplateCard";
import ColumnData from "views/admin/notificationTemplate/variables/columnsData"
 
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "views/admin/notificationTemplate/variables/columnsData";
import tableDataDevelopment from "views/admin/notificationTemplate/variables/tableDataDevelopment.json";
import tableDataCheck from "views/admin/notificationTemplate/variables/tableDataCheck.json";
import tableDataColumns from "views/admin/notificationTemplate/variables/tableDataColumns.json";
import tableDataComplex from "views/admin/notificationTemplate/variables/tableDataComplex.json";
import React from "react";

export default function Settings() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={1}
        spacing={{ base: "20px", xl: "20px" }}>
        
        <Form
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        />
        <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: "20px", xl: "20px" }}>

        
        <TemplateCard columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}

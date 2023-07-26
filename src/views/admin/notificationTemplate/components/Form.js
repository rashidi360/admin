import {
  Flex,
  Text,
  useColorModeValue,
  FormControl,
  FormLabel,
  Select,
  Input,
  Stack,
  Textarea,
  Button,
  useToast,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import React, { useMemo, useState } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import axios from "axios";
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react"; // Import AlertDescription component
import AlertPop from "./AlertPop";

export default function Form(props) {
  const { columnsData, tableData } = props;
  const toast = useToast();
  const [formSubmissionData, setFormSubmissionData] = useState(null);
  const [columns] = useMemo(() => [columnsData], [columnsData]); // Use useMemo with dependency array
  const tableInstance = useTable(
    {
      columns,
      data: tableData,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const { initialState } = tableInstance;
  initialState.pageSize = 11;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [template, setTemplate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if any of the fields are empty and show an error message
    if (!name || !type || !template) {
      toast({
        title: "Error!",
        description: "Please fill in all the fields before submitting.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const teamPayload = {
      name,
      type,
      template,
    };
    try {
      setIsSubmitting(true);
      await axios.post("http://localhost:3333/notification", teamPayload);
      console.log("Form submitted successfully!");
      setFormSubmissionData(teamPayload);
      toast({
        title: "Application submitted!",
        description: "Thanks for submitting your application. Our team will get back to you soon.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
      p={10}
    >
      <Flex px="25px" justify="space-between" mb="20px" align="center" p={5}>
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Notification Template
        </Text>
      </Flex>
      <form method="POST" onSubmit={handleSubmit}>
        <FormControl id="first-name" isRequired p={5}>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Name"
            value={name}
            onChange={({ target }) => setName(target?.value)}
            borderRadius="5px"
          />
        </FormControl>
        <FormControl id="country" p={5}>
          <FormLabel>Type</FormLabel>
          <Select
            placeholder="Select the Type"
            value={type}
            onChange={({ target }) => setType(target?.value)}
          >
            <option value="EMAIL">Email</option>
            <option value="SMS">SMS</option>
          </Select>
        </FormControl>
        <FormControl>
          <Stack spacing={3} p={5}>
            <FormLabel>Enter Your Template</FormLabel>
            <Textarea
              placeholder="Enter the message"
              value={template}
              onChange={({ target }) => setTemplate(target?.value)}
              boxSize={"lg"}
              p={5}
            ></Textarea>
          </Stack>
        </FormControl>
        <Button
          onClick={handleSubmit}
          colorScheme="blackAlpha"
          variant="solid"
          ml={5}
          pl={5}
          isLoading={isSubmitting}
          loadingText="Submitting..."
        >
          Create
        </Button>
      </form>
      {formSubmissionData && (
        <AlertPop
          title="Application submitted!"
          description="Thanks for submitting your application. Our team will get back to you soon."
        />
      )}
    </Card>
  );
}

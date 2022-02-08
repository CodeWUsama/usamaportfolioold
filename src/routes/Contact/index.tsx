import { Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Button from "components/Button";
import { Flex, InvisibleText, Text } from "components/Global/styled.components";
import Image from "components/Image";
import Sidebar from "components/Sidebar";
import { Colors } from "./../../constants";

const Contact = () => {
  return (
    <Flex height="100%" justifyContent="space-between">
      <Sidebar />
      <Flex flexDirection="column" height="100%">
        <Flex
          id="header"
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: 26 }}
        >
          <Text fontSize={45} fontWeight={"bold"} capital>
            Contact
          </Text>
        </Flex>
        <Flex id="content" height="100%" justifyContent="space-around">
          <Flex
            id="leftBox"
            width="45%"
            flexDirection="column"
            height="100%"
            gap={40}
            justifyContent="center"
          >
            <Text color={Colors.base} fontSize={22} fontWeight="bold">
              SEND A MESSAGE
            </Text>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Subject" />
            <TextArea placeholder="Message" rows={8} />
            <Button text="SUBMIT" width="100%" />
          </Flex>
          <Flex
            id="rightBox"
            width="45%"
            flexDirection="column"
            gap={23}
            justifyContent="center"
            height="100%"
          >
            <Text color={Colors.base} fontSize={22} fontWeight="bold">
              CONTACT INFO
            </Text>
            <Flex gap={20} alignItems="center">
              <Image src="/Icons/telephone.png" height={40} width={40} />
              <Text>+923029531201</Text>
            </Flex>
            <Flex gap={20} alignItems="center">
              <Image src="/Icons/gmail.png" height={40} width={40} />
              <Text>workwithusamabilal@gmail.com</Text>
            </Flex>
            <Flex gap={20} alignItems="center">
              <Image src="/Icons/whatsapp.png" height={40} width={40} />
              <Text>+923029531201</Text>
            </Flex>
            <Flex gap={20} alignItems="center">
              <Image src="/Icons/linkedin.png" height={40} width={40} />
              <Text>https://www.linkedin.com/in/usama-bilal-a08404173</Text>
            </Flex>
            <Flex gap={20} alignItems="center">
              <Image src="/Icons/github.png" height={40} width={40} />
              <Text>https://github.com/CodeWUsama</Text>
            </Flex>
            <Flex gap={20} alignItems="center">
              <Image src="/Icons/facebook.png" height={40} width={40} />
              <Text>https://facebook.com/iamub33</Text>
            </Flex>
            <Flex gap={20} alignItems="center">
              <Image src="/Icons/twitter.png" height={40} width={40} />
              <Text>https://twitter.com/usama__bilal</Text>
            </Flex>
            <Flex gap={20} alignItems="center">
              <Image src="/Icons/instagram.png" height={40} width={40} />
              <Text>https://instagram.com/usama__bilal</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <InvisibleText>Usama is my name</InvisibleText>
    </Flex>
  );
};

export default Contact;

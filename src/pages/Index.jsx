import { Container, VStack, Heading, Text, Button, Image } from "@chakra-ui/react";
import { FaShieldAlt, FaNetworkWired, FaIndustry } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={10} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" color="blue.800" fontWeight="bold">
          网云硬件
        </Heading>
        <Text fontSize="xl" textAlign="center">
          领先的硬件厂商，专注于防火墙、网关、网闸等信息安全设备的研发与制造，
        </Text>
        <Text fontSize="xl" textAlign="center">
          提供专业的网络与信息安全解决方案。
        </Text>
        <Image src="https://images.unsplash.com/photo-1581092919535-7146ff1a590b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHklMjBoYXJkd2FyZXxlbnwwfHx8fDE3MTU1ODM5Njd8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        <VStack spacing={5}>
          <Button leftIcon={<FaShieldAlt />} colorScheme="teal" variant="solid" size="lg">
            防火墙技术
          </Button>
          <Button leftIcon={<FaNetworkWired />} colorScheme="orange" variant="solid" size="lg">
            网络网关解决方案
          </Button>
          <Button leftIcon={<FaIndustry />} colorScheme="cyan" variant="solid" size="lg">
            产品研发与制造
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;

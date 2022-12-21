import { Flex } from "@chakra-ui/react";
import loginIcon from "../../../assets/images/Header/login-icon.svg";
import crownIcon from "../../../assets/images/Header/crown-icon.svg";
import Button from "./Button";
import Icon from "../../../components/Icon";

const RightSide = () => {
  return (
    <Flex
      alignItems="center"
      gap="4"
      flexBasis="100%"
      justifyContent="flex-end"
    >
      <Icon icon={crownIcon} label="Botín" />
      <Button color="dark.200" hoverColor="dark.100">
        Iniciar sesion
      </Button>
      <Button color="primary.500" hoverColor="primary.700">
        Registrarse
      </Button>
      <Icon icon={loginIcon} label="Ingresar" />
    </Flex>
  );
};

export default RightSide;

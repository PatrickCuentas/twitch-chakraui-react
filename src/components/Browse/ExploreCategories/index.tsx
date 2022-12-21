import { Flex, chakra, Image } from "@chakra-ui/react";

const ExploreCategories = () => {
  const icons = [
    {
      name: "Juegos",
      src: "https://static.twitchcdn.net/assets/gaming-e9019587744b56b11b43.svg",
    },
    {
      name: "IRL",
      src: "https://static.twitchcdn.net/assets/irl-baa32e8e64a6974282c0.svg",
    },
    {
      name: "Música",
      src: "https://static.twitchcdn.net/assets/music-5fb4595a30d04d991e24.svg",
    },
    {
      name: "Esports",
      src: "https://static.twitchcdn.net/assets/esports-7a078acca57531d11e29.svg",
    },
    {
      name: "Creative",
      src: "https://static.twitchcdn.net/assets/creative-6423fb5fbcf31fadee38.svg",
    },
  ];
  return (
    <Flex gap="0.5rem" flexWrap="wrap" justifyContent="center">
      {icons.map((item) => (
        <ExploreCategory key={item.name} item={item} />
      ))}
    </Flex>
  );
};

export default ExploreCategories;

const ExploreCategory = ({
  item,
}: {
  item: {
    name: string;
    src: string;
  };
}) => {
  return (
    <Flex
      justifyContent="space-between"
      height="45px"
      alignItems="center"
      bgColor="primary.700"
      borderRadius="6px"
      padding="1rem"
      flexGrow="1"
      minWidth="200px"
      maxWidth="400px"
      cursor="pointer"
      _hover={{
        bgColor: "primary.500",
      }}
    >
      <chakra.span fontSize="1.5rem" color="white" fontWeight="500">
        {item.name}
      </chakra.span>
      <Image src={item.src} />
    </Flex>
  );
};

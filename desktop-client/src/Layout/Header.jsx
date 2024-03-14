import React from "react";
import {
  StyledHeader,
  StyledNavItem,
  StyledRightSideNavItem,
  StyledHeaderLogo,
  StyledBellIcon,
} from "../styles/HeaderStyles";
import { AiOutlineShop, AiOutlineFileSearch } from "react-icons/ai";
import { TbUsers } from "react-icons/tb";
import { GoChecklist } from "react-icons/go";
import { LiaAmbulanceSolid } from "react-icons/lia";
import { GiPlanePilot } from "react-icons/gi";
import { TbUser } from "react-icons/tb";
import { PiBellSimpleFill } from "react-icons/pi";
import { HeaderNavData } from "./HeaderNavData";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GiAirplaneDeparture } from "react-icons/gi";
import styled from "styled-components";
import { Avatar, WrapItem } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  UnorderedList,
  ListItem,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Icon,
  Portal,
} from "@chakra-ui/react";
import { dividerColorLight } from "../Colors";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";

const universalStyle = {
  size: 16,
  style: { paddingRight: "6px", strokeWidth: 1.2 },
};

const StyledHeaderLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #46afcf;
  cursor: pointer;
  transition: all 0.18s ease-in-out;
  height: 100%;
  padding-left: 26px;
  margin-left: 5px;
  padding-right: 26px;
`;

const StyledNavItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.18s ease-in-out;
  height: 100%;
  padding-left: 26px;
  margin-left: 5px;
  padding-right: 26px;
  font-size: 14px;
  text-decoration: none;
  font-weight: normal;
  &:hover {
    background-color: #313139;
    color: #cccccc;
    transform: scale(1); /* Adjust the scaling factor as needed */
  }

  &:active {
    background-color: #2b2b32cc;
    transform: scale(0.99); /* Adjust the scaling factor as needed */
  }
`;

const personeleLinks = [
  {
    title: "Account",
    route: "/getMedicalPersonele",
    icon: (
      <MdOutlineManageAccounts
        style={{ fontSize: "18px", marginRight: "5px" }}
      />
    ),
  },
  {
    title: "Settings",
    route: "/getMedicalDoctors",
    icon: (
      <MdOutlineSettings style={{ fontSize: "18px", marginRight: "5px" }} />
    ),
  },
];

function Header() {
  return (
    <>
      <StyledHeader>
        <StyledHeaderLogoLink to={"/"}>
          <GiAirplaneDeparture size={30} />
        </StyledHeaderLogoLink>
        {HeaderNavData.map((value, index) => (
          <StyledNavItemLinks to={value.route} key={index}>
            {value.title}
          </StyledNavItemLinks>
        ))}
        <StyledRightSideNavItem>
          <Popover>
            <PopoverTrigger>
              <Icon
                boxSize={7}
                mr={15}
                mt={1}
                display={"flex"}
                alignItems={"center"}
              >
                <StyledBellIcon />
              </Icon>
            </PopoverTrigger>
            <Portal>
              <PopoverContent minHeight={20}>
                <PopoverHeader>Notifications</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>This is the meat</PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <WrapItem pr={6} pl={3} cursor={"pointer"}>
                <Avatar
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                  size={"sm"}
                />
              </WrapItem>
            </PopoverTrigger>
            <Portal>
              <PopoverContent width={250}>
                <PopoverArrow />
                <PopoverHeader mt={1} mb={1}>
                  Hello Omar
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <UnorderedList
                    listStyleType={"none"}
                    ml={0}
                    pl={0}
                    mb={1}
                    mt={1}
                    overflow={"auto"}
                  >
                    {personeleLinks.map((item, key) => (
                      <ListItem
                        key={key}
                        mt={1}
                        pb={1}
                        cursor={"pointer"}
                        whiteSpace="pre-wrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        fontWeight={400}
                        fontSize={15}
                        transition="all 0.1s"
                        _hover={{
                          color: "#6d6d6d",
                        }}
                        _active={{
                          color: "#7e7e7e",
                        }}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"flex-start"}
                        borderBottom={`1px solid ${dividerColorLight}`}
                      >
                        {item.icon}
                        {item.title}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </PopoverBody>
                <PopoverFooter>
                  <Button colorScheme="red" width={"100%"}>
                    Log Out
                  </Button>
                </PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>
        </StyledRightSideNavItem>
      </StyledHeader>
    </>
  );
}

export default Header;

import React, { Fragment, useCallback } from "react";
import { SimpleGrid, VStack } from "@chakra-ui/react";
import HomeCard from "../components/HomeCard";
// import { homecardcontent } from "../content/homecardcontent";
import { GiFangs } from "react-icons/gi";
import { GiDirectionSigns } from "react-icons/gi";
import { HiBeaker } from "react-icons/hi2";
import { RiBroadcastFill } from "react-icons/ri";
const fangs = <GiFangs size="3em" />;
const directSign = <GiDirectionSigns size="3em" />;
const broadcast = <RiBroadcastFill size="3em" />;
const beaker = <HiBeaker size="3em" />;

const homecardcontent = {
  artists: {
    title: "Artists",
    desc: "Get a list of our tattoo artists",
    icon: fangs,
    href: "/artists",
  },
  directions: {
    title: "Directions",
    desc: "Get directions to our studio",
    icon: directSign,
    href: "/directions",
  },
  contact: {
    title: "Contact",
    desc: "Contact us for a quote or consent form",
    icon: broadcast,
    href: "/contact",
  },
  gallery: {
    title: "Gallery",
    desc: "Check out our artist's work for examples",
    icon: beaker,
    href: "/gallery",
  },
};

const { artists, directions, contact, gallery } = homecardcontent;

// const renderCards = useCallback(() => {
//   return (
const cardContent = (
  <Fragment>
    <HomeCard
      title={artists.title}
      desc={artists.desc}
      icon={<GiFangs size="3em" />}
      href={artists.href}
    />
    <HomeCard
      title={directions.title}
      desc={directions.desc}
      icon={<GiDirectionSigns size="3em" />}
      href={directions.href}
    />
    <HomeCard
      title={contact.title}
      desc={contact.desc}
      icon={<RiBroadcastFill size="3em" />}
      href={contact.href}
    />
    <HomeCard
      title={gallery.title}
      desc={gallery.desc}
      icon={<HiBeaker size="3em" />}
      href={gallery.href}
    />
  </Fragment>
);
// });

const HomeCards = () => {
  return (
    <VStack>
      <SimpleGrid columns={{ base: 1, md: 2, "2xl": 4 }} spacing={1}>
        {/* {Object.values(hc).map((section, i) => (
          <HomeCard
            title={section.title}
            desc={section.desc}
            icon={section.icon}
            href={section.href}
            key={i}
          />
        ))} */}
        {/* <HomeCard
          title={artists.title}
          desc={artists.desc}
          icon={<GiFangs size="3em" />}
          href={artists.href}
        />
        <HomeCard
          title={directions.title}
          desc={directions.desc}
          icon={<GiDirectionSigns size="3em" />}
          href={directions.href}
        />
        <HomeCard
          title={contact.title}
          desc={contact.desc}
          icon={<RiBroadcastFill size="3em" />}
          href={contact.href}
        />
        <HomeCard
          title={gallery.title}
          desc={gallery.desc}
          icon={<HiBeaker size="3em" />}
          href={gallery.href}
        /> */}
      </SimpleGrid>
    </VStack>
  );
};

export default HomeCards;

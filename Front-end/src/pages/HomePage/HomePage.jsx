import React from "react";
import { GridFeedCard } from "../../components/FeedGridCard";
import { Footer } from "../../components/Footer";
import HeaderBar from "../../components/HeaderBar";
import { PostUser } from "../../components/PostUser";

export const HomePage = () => {
  return (
    <>
      <HeaderBar/>
      <PostUser/>
      <GridFeedCard/>
      <Footer/>
    </>
  )
}

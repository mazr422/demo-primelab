import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const DemoLandingPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard");
  }, []);

  return <Head>Demo Dashboard</Head>;
};

export default DemoLandingPage;

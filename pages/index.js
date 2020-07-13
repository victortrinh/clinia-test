import React from "react";
import Head from "next/head";

import "../styles.scss";
import AppointmentForm from "../components/appointmentForm";
import { getServices } from "../lib/services";
import { getForms } from "../lib/forms";

function Index(props) {
  return (
    <div>
      <Head>
        <title>Appointment Form</title>
      </Head>
      <AppointmentForm {...props} />
    </div>
  );
}

Index.getInitialProps = async (ctx) => {
  const forms = await getForms();
  const services = await getServices();

  return { forms, services };
};

export default Index;

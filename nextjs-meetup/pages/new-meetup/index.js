import Head from "next/head";
import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetUpPage() {
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  }
  return (
    <Fragment>
      <Head>
        <title>New Meetup</title>
        <meta name="description" content="Create a new amazing network"></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetUpPage;

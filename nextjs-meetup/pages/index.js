import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://cdn5.tropicalsky.co.uk/images/800x600/historic-parliament-building-victoria.jpg",
    address: "1 Dallas Road",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://cdn1.tropicalsky.co.uk/images/800x600/craigdarroch-castle-victoria-bc.jpg",
    address: "5 Dallas Road",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups}></MeetupList>;
}

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  //fetch data from API - simulation

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;

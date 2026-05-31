import Section1 from "./components/Section1/Section1";
import Section2 from "./components/ection2/Section2";

const App = () => {
  const User = [
    {
      img: "https://plus.unsplash.com/premium_photo-1683121489634-5d3f7892a6fe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMGluJTIwb2ZmaWNlfGVufDB8fDB8fHww",
      intro: "",
      color: "blue",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtpbmclMjBpbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
      intro: "",
      color: "purple",
      tag: "fucker",
    },
    {
      img: "https://images.unsplash.com/photo-1507206130118-b5907f817163?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmclMjBpbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
      intro: "",
      color: "green",
      tag: "Unbraked",
    },
    {
      img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtpbmclMjBpbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
      intro: "",
      color:"pink",
      tag: "fucker",
    },
  ];
  return (
    <>
      <Section1 users={User} />
      <Section2 />
    </>
  );
};

export default App;

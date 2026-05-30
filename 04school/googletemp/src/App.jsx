
import Card from './components/Card'



const jobOpenings = [
  {
    brandLogo: "/logos/google.png",
    company: "Google",
    datePosted: "2 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$95/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "/logos/meta.png",
    company: "Meta",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "/logos/amazon.png",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$80/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "/logos/apple.png",
    company: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Cupertino, USA",
  },
  {
    brandLogo: "/logos/netflix.png",
    company: "Netflix",
    datePosted: "2 weeks ago",
    post: "Product Designer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$105/hr",
    location: "Los Angeles, USA",
  },
  {
    brandLogo: "/logos/microsoft.png",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$100/hr",
    location: "Seattle, USA",
  },
  {
    brandLogo: "/logos/openai.png",
    company: "OpenAI",
    datePosted: "6 days ago",
    post: "AI Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "San Francisco, USA",
  },
  {
    brandLogo: "/logos/nvidia.png",
    company: "NVIDIA",
    datePosted: "10 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$125/hr",
    location: "Santa Clara, USA",
  },
  {
    brandLogo: "/logos/tesla.png",
    company: "Tesla",
    datePosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$85/hr",
    location: "Austin, USA",
  },
  {
    brandLogo: "/logos/adobe.png",
    company: "Adobe",
    datePosted: "1 day ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "Noida, India",
  },
];



const App = () => {
  return (
  <div className="parent">
{jobOpenings.map(function(job,idx){
  return(
   <div key={idx}>
  <Card company={job.company} datePosted={job.datePosted} logo={job.brandlogo} post={job.post} tag1={job.tag1} tag2={job.tag2} pay={job.pay} location={job.location}/>
</div>
  );
})}
</div>
  )
};

export default App;
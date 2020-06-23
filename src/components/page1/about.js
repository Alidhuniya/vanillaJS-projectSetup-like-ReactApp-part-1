const About = () => {
   let firstName = "ali";
   let lastName = "dhuniya";

   const adding = address();

   return `
      <div>
   <h2>My name is ${firstName} ${lastName}</h2>
      
   <h3> Addreess is ${adding} </h3>
      </div>
   `

   
}

export default About;


function address() {
      return `
      <p> Bhairahwa</p>
      `
}
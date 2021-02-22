import { Link, Route } from 'react-router-dom'
import avatar from "../jhope.GIF"
function About() {
  
  return (
    <div className="about">
      <Route path="/about">
        <h1 className="heading">A Home for the Cregs</h1>
        <img className="profile" src={avatar} alt=".loading"/>
      <p >
          You're probably wondering why this app exists? Well first thing we want to say is that we accept all Cregs regardless of spelling. This is a safe place of all of you Cregs, Kraigs, etc out there. According to a recent survey from the Census, Cregs are having a hard time finding love in a hopeless place. Not a lot of people know who Creg is or what they even look like. Shocker.. I know.. So one day 
           
          the founder, Creg Eversteen decided to make a website dedicated to all the Cregs out there because he wanted us to be recognized! (Yes I am also a Craig, the one who is typing this.) Us Cregs are intelligent, unique, creative specimens that all we want is to be seen :). Whether it is looking for love or social networking, please feel free to include yourself on this app. (Only if youre a Creg that is). 
           
          Also we are not Craiglist, we came up with our name first.
           <br />
           <br/>
          -Cregs-List
           
    </p>
    </Route>
      </div>
  )
}

export default About;
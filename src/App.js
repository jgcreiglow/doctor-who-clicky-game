import React, {Component} from 'react';
import LazyHero from 'react-lazy-hero';
import './App.css';
import doctors from "./doctors.json";
import DoctorCard from "./components/DoctorCards/";
import Navbar from "./components/Navbar/";

class App extends Component {
  //state
  state = {
    message: "Click an image to begin, but don't click the same one twice!!",
    topScore: 0,
    Score: 0,
    doctors: doctors,
    unselectedDoctors: doctors
  }
  
  componentDidMount() {
  };
  
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  selectDoctor= name => {
    const findDoctor = this.state.unselectedDoctors.find(item => item.name === name);
  
    if(findDoctor === undefined) {
        // if you click a doctor the second time
        this.setState({ 
            message: "EXTERMINATE!",
            topScore: (this.state.Score > this.state.topScore) ? this.state.Score : this.state.topScore,
            Score: 0,
            doctors: doctors,
            unselectedDoctors: doctors
        });
    }
    else {
        // on first click of the doctor
        const newDoctors = this.state.unselectedDoctors.filter(item => item.name !== name);
        
        this.setState({ 
            message: "Bowties are cool and so are you! Keep going!!",
            Score: this.state.Score + 1,
            doctors: doctors,
            unselectedDoctors: newDoctors
        });
    }
  
    this.shuffleArray(doctors);
  };
    render() {
  
      return (
        <div className="container-fluid">
        {/* navbar  */}
          <Navbar
            message={this.state.message}
            Score={this.state.Score}
            topScore={this.state.topScore}
          />
          <div>
            {/* Hero with logo */}
            <LazyHero
              color="#526ea2"
              opacity="0.0"
              parallaxOffset="60"
              transitionDuration="600"
              minHeight="80vh"
              imageSrc="http://cultbox.co.uk/wp-content/uploads/2017/07/doctor-who-logo.jpg">
    
            </LazyHero>
          </div>


          <div className="row">
          {/* Card map of images   */}
          {
                    this.state.doctors.map(doctor => (
                        <DoctorCard
                           name={doctor.name}
                            image={doctor.image}
                            selectDoctor={this.selectDoctor} 
                  Score={this.state.Score}
                  key={doctor.name}
                        />
                    ))
                }
 
          </div>
          {/* footer */}
          <div className="navbar sticky-bottom footer">
            <span className="justify-content-center">
                <a href="https://github.com/jgcreiglow"><i class="fab fa-github"></i></a>
            </span>
            <span className="justify-content-center">
              Made in DC by Jessica Creiglow
          </span>
            <span className="justify-content-center">
              2018
          </span>
          </div>
        </div>
      )
    }
  }

export default App;
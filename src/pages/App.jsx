import { Link } from "react-router-dom";
import dashboard from "../../public/assets/dashboard.png";
import menu from "../../public/assets/menu.png";
import amdin from "../../public/assets/amdin.png";
import teacher from "../../public/assets/teacher.png";
import allAdmin from "../../public/assets/alladmin.png";



function App() {
  // localStorage.clear();

  return (
    <div className="font-sans w-screen min-h-screen h-full bg-neutral-900">
      <div className="bg-white">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold font-sans text-center pt-16 mb-2">
        OurSchool
      </h1>
      <div className="text-lg lg:text-xl font-semibold font-sans text-center mb-10 px-10">
        Introducing the Future of Education Management!
      </div>
      <div className="flex flex-col items-center mb-14">
        <Link
          to="/"
          className="px-6 py-4 w-max text-xl font-semibold text-center bg-yellow hover:brightness-90 transition rounded-xl"
        >
          Get Started
        </Link>
      </div>
      <img
        className="w-10/12 mx-auto rounded-xl mb-14 drop-shadow-md"
        alt="screenshot of fastodo web-based todo app"
        src={dashboard}
      />

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:space-x-10 mb-20 ml-5">
        <img
          src={menu}
          alt="screenshot of fastodo's todo creator"
          className="max-w-md w-2/3 rounded-lg drop-shadow-md"
        />
        <div>
          <h2 className="w-max text-2xl font-bold mt-4 lg:mt-0 mb-2">
          Why Choose Our School Management System?
          </h2>
          <p className="max-w-sm lg:w-98">
            ✅ Streamlined Admissions Process <br />
            ✅ Effortless Fee and Exam Fee Management <br />
            ✅ Real-time Attendance Tracking <br />
            ✅ Seamless Teacher and Staff Management <br />
            ✅ Personalized Student Timetables <br />
            ✅ Easy-to-Use Interface for All <br />
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:space-x-10 mb-20 ml-5">
        <div>
          <h2 className="w-max text-2xl font-bold mt-4 lg:mt-0 mb-2">
          Admins, Simplify and Excel!
          </h2>
          <p className="max-w-sm lg:w-96">
          Efficiently manage staff, assign subjects, and monitor school activities effortlessly. Our platform centralizes all operations, enabling you to make informed decisions and drive your institution's success.
          </p>
        </div>
        <img
          src={amdin}
          alt=""
          className="max-w-[13em] w-2/3 rounded-lg order-first lg:order-last drop-shadow-md"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:space-x-10 mb-20 ml-5">
        <img
          src={teacher}
          alt=""
          className="max-w-md w-2/3  rounded-lg drop-shadow-md"
        />
        <div>
          <h2 className="w-max text-2xl font-bold mt-4 lg:mt-0 mb-2">
          Teachers, Unleash Your Potential! 
          </h2>
          <p className="max-w-sm lg:w-96">
          Empower yourself with our user-friendly platform! Effortlessly mark student attendance, instantly notify parents about absences, and streamline exam sessions with ease. Manage your students' progress and access personalized timetables, making teaching a breeze..
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:space-x-10 mb-20 ml-5">
        <div>
          <h2 className="w-max text-2xl font-bold mt-4 lg:mt-0 mb-2">Calling All Administrators!!</h2>
          <p className="max-w-sm lg:w-96">
            Revolutionize your school's operations with our cutting-edge School Management System. Seamlessly manage student admissions, track fees and exam payments effortlessly, and assign dedicated class teachers at the click of a button. Take control of your institution like never before!
          </p>
        </div>
        <img
          src={allAdmin}
          alt="screenshot of fastodo's sorter feature"
          className="max-w-md w-2/3  rounded-lg order-first lg:order-last drop-shadow-md"
        />
      </div>

      <p className="text-3xl font-bold text-center mt-20 mx-10 pb-1">
      Join us in shaping the future of education management.
      </p>
      <p className="text-center mx-10 mb-8 font-semibold">
      Embrace innovation, simplicity, and efficiency with our School Management System. Your journey to an organized and empowered educational institution starts now!
      </p>

      <div className="flex flex-col items-center mb-16">
        <Link
          to="/"
          className="px-6 py-4 w-max text-xl font-semibold text-center bg-yellow hover:brightness-90 transition rounded-xl"
        >
          Get Started
        </Link>
        
      </div>

      <footer className="py-8 bg-[#252525] text-white">
        <div className="text-center">
         
          Made by ___________
        </div>
      </footer>
    </div>
    </div>
  );
}

export default App;

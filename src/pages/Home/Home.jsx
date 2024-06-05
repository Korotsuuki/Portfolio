import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { LiaFigma } from "react-icons/lia";
import { TbSeo } from "react-icons/tb";
import Projects from '../../components/Projects/Projects.jsx';
import About from '../../components/About/About.jsx';

function Home() {
  return (
    <section className='home'>
        <div className='infos__logo'>
            <h1>Salut, c&apos;est Benoît</h1>
            <p>Développeur Front-End</p>
            <div>
            <FaHtml5 style={{ color: '#E96228'  }} size={50} />
            <FaCss3 style={{ color: '#0091D5'  }} size={50} />
            <TbBrandJavascript style={{ color: '#F7D138'  }} size={50} />
            <FaSass style={{ color: '#C76494'  }} size={50}/>
            <LiaFigma style={{ color: '#9D56F7'  }} size={50}/>
            <FaReact style={{ color: '#5ED3F4'  }} size={50} />
            <TbSeo style={{ color: '#5ED3F4'  }} size={50}/>
            </div>
        </div>
        <div className='home__social'>
            <div className='social'>
                <Link to="https://github.com/Korotsuuki" target='_blank' rel='noopener noreferrer'>
                    <FaGithubSquare style={{ color: 'hsl(0, 0%, 100%)'  }} size={100} />
                </Link>
                <Link
                to="https://www.linkedin.com/in/beno%C3%AEt-diacre-7668b0225/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin style={{ color: 'rgb(10,102,194)'  }} size={100} />
            </Link>
            </div>
        </div>
        <Projects/>
        <About/>
    </section>
  )
}

export default Home
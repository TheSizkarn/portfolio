import {useState} from "react";
import {ListSkills, NavSkills} from "./styles";

const Skills = () => {
  const [skill, setSkill] = useState('competences');
  
  return (
    <div className="skills">
      <NavSkills>
        <li
          className={skill === 'competences' ? 'active' : null}
          onClick={() => setSkill('competences')}
        >
          <span>Compétences</span>
        </li>
        <li
          className={skill === 'xp' ? 'active' : null}
          onClick={() => setSkill('xp')}
        >
          <span>Expériences</span>
        </li>
        <li
          className={skill === 'diplomes' ? 'active' : null}
          onClick={() => setSkill('diplomes')}
        >
          <span>Diplômes</span>
        </li>
      </NavSkills>
      <ListSkills className={skill === 'competences' ? 'active' : null}>
        <li>
          <strong>Expert en développement web Front-End</strong><br/>
          NextJS - React - Javascript - Wordpress
        </li>
        <li>
          <strong>UX/UI Designer Web & Mobile</strong><br/>
          Conception de maquette avec Figma
        </li>
        <li>
          <strong>Développeur web Back-End</strong><br/>
          Symfony - API Platform
        </li>
      </ListSkills>
      <ListSkills className={skill === 'xp' ? 'active' : null}>
        <li>
          <strong>Développeur web Front-End - Citya Immobilier</strong><br/>
          2019 - 2022
        </li>
        <li>
          <strong>Freelance Développeur Wordpress</strong><br/>
          2018
        </li>
        <li>
          <strong>Vidéaste sur YouTube - TheSizkarn</strong><br/>
          2013 - 2016
        </li>
      </ListSkills>
      <ListSkills className={skill === 'diplomes' ? 'active' : null}>
        <li>
          <strong>Formation Openclassrooms - Développement web</strong><br/>
          2017
        </li>
        <li>
          <strong>Bac Professionnel Électrotechnique</strong><br/>
          2014
        </li>
      </ListSkills>
    </div>
  )
}

export default Skills;
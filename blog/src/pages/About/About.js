import React from "react";
import styles from './About.module.css';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Blog</h2>
      <p>Projeto desenvolvido para a o desafio SoftMakers.</p>
      <p>Vaga de <span>Junior FullStack</span>.</p>
      <Link to="/post/create" className="btn">Criar post</Link>
    </div>
  )
};

export default About;
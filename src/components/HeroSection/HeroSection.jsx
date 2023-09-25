import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={`container ${styles.wrapper}`}>
      <div className={styles.content}>
        <h1>Open the door to the magic world of VFX</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illum
          aut ipsam laudantium ad nulla corrupti reprehenderit illo, quo
          laborum!
        </p>
        <a href='#'>Explore</a>
      </div>
    </section>
  );
}

export default HeroSection;

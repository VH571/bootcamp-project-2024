import style from "./resume.module.css";
import Link from "next/link";

export default function Resume() {
    return (
        <main> 
            <h1 className={style.pagetitle}>Resume</h1>
        <div className={style.resume}>
            {/*<!-- Education Section -->*/}
            <section className= {style.section}>
                <h2>Education</h2>
                <div className= {style.entry}>
                    <h3 className= {style.entrytitle}>Bachelor of Science in Computer Science</h3>
                    <p className= {style.entryinfo}>California Polytechnic State University, San Luis Obispo, 2022 - Present</p>
                    <p className={style.entrydescription}>Studying core concepts in programming, algorithms, and web development.</p>
                </div>
            </section>

            {/*<!-- Skills Section -->*/}
            <section className={style.section}>
                <h2>Skills</h2>
                <ul className={style.skilllist}>
                    <li>HTML, CSS</li>
                    <li>Python, Java</li>
                    <li>C</li>
                    <li>Git, GitHub</li>
                </ul>
            </section>

            {/*<!-- Projects Section -->*/}
            <section className={style.section}>
                <h2>Projects</h2>
                <div className={style.entry}>
                    <h3 className={style.entrytitle}>Personal Website</h3>
                    <p className={style.entryinfo}>A personal website built using HTML, CSS to showcase my portfolio and resume.</p>
                    <p className={style.entrydescription}>  <Link href="/" >Learn More</Link> </p>
                </div>
            </section>

            {/*<!-- Coursework Section -->*/}
            <section className={style.section}>
                <h2>Coursework</h2>
                <ul className={style.courselist}>
                    <li>Data Structures and Algorithms</li>
                    <li>Web Development</li>
                    <li>Database Management Systems</li>
                    <li>Intro to Computer Organization</li>
                    <li>Systems Programming</li>
                    <li>Object-Oriented Programming</li>
                    <li>Introduction to Software Engineering</li>
                </ul>
            </section>

            {/*<!-- Interests Section -->*/}
            <section className= {style.section}>
                <h2>Interests</h2>
                <p>Cybersecurity, Vinyl Collecting, Building PCs,  Traveling.</p>
            </section>
        </div>
        </main>
    ) 
  }
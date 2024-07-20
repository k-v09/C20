import React from "react";

const Home = () => (<body className="homely">
    <aside className="xtran">
        <article className="ff">
            <h3>Black Belt</h3>
            <img src="/bbi.png" alt="BB Icon"/>
            <p>I started martial arts at age six and still make it a major part of my life. I've studied arts from all over the world! For a while I wanted to be a UFC fighter, though my priorities have since changed drastically.</p>
        </article>
        <article className="ff">
            <h3>Physicist</h3>
            <img src="/phi.png" alt="Physics Icon"/>
            <p>Physics has been a major passion of mine my whole life. Most of my freetime is dedicated to learning more about the subject and I even wrote my senior research paper about relativity!</p>
        </article>
        <article className="ff">
            <h3>Nerd</h3>
            <img src="/ndi.png" alt="Nerd Icon"/>
            <p>From Starwars lore to Smash Bros frame data, I've spent way too much time memorizing information I'll never use.</p>
        </article>
    </aside>
    <main className="homeMain">
        <section className="submain" id="sm1">
            <img src="/betterYay.jpg" alt="Full-Stack Cert" className="right"/>
            <h2>Full-Stack Developer</h2>
            <p>
                I started programming in my freshman year of high school and for the rest of my time at school, I used this skill to aid my personal projects. I learned languages such as: python, c++, java, and julia; useful tools including: Unity, NumPy, and Flutter; and studied in the fields of: computer science, networking & telecommunications, and robotics. These skills all helped me to learn not only the knowledge to understand code, but also the mindset that it requires.
            </p>
        </section>
        <section className="submain" id="sm2">
            <img className="left" src="/mathmeme.jpeg" alt="Math Example"/>
            <h2>Math Lover</h2>
            <p>
                Math is a central part of my life. I find the natural beauty of all forms of math awe inspiring. I enjoy researching and discovering math, which has led me to write and publish a few of my theorems
            </p>
        </section>
        <section className="submain" id="sm3">
            <img src="/theDream.jpeg" alt="Keytar guy" className="right"/>
            <h2>Musician</h2>
            <p>
                Of all things listed here, music is the most important. It is a critical form of expression (whether that's personal or social). I learned my first instrument, drums, when I was seven. After some time, I learned many others like bass, guitar, piano, and most of the variations of those (organ, accordion, etc.). 
            </p>
        </section>
    </main>
</body>);

export default Home;
import style from "./home.module.css";
// You can name the function within page.tsx anything you want.
export default function Home() {
  return (
	<main>
		<h1>Hello World</h1>
		<div className={style.about}>
                <div className={style.aboutimage}>
                    <img src="images/ezgif-4-4333f85ceb.jpg" alt="Skateboard Bread"/>
                </div>
                <div className={style.abouttext}>
                    <p> My name is Victor Herrera and I'm from San Bernardino, CA. 
                        Im a 3rd year computer science major. I like listening to Indie, Alternative, City Pop 
                        music and I like collecting vinyl records too! </p>
                </div>
     	</div>
	</main>
	) 
}
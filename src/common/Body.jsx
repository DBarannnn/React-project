import "./Body.css";

export default function Body(){
    return(
        <>
        <section className="section">
            <h2 className="section-heading">Recent posts</h2>
            <ul className="section-recent-content">

                <li>
                    <h3 className="section-heading">Patch 7.25. Major gameplay update, what`s new?</h3>
                    <p className="section-recent-text"> Step into the World of Dota with Patch 7.25 - A Comprehensive and Thrilling Gameplay Overhaul! Explore the Major Changes, Hero Tweaks, Item Updates, and More - Unravel the Exciting New Features and Enhancements Redefining the Dota Experience!</p>
                </li>
                <li>
                    <h3 className="section-recent-heading">New Lion build has too much power</h3>
                    <p className="section-recent-text">The new Lion build in Dota 2 has taken the battlefield by storm, redefining the hero's role as a fearsome crowd-control powerhouse. With the introduction of a revamped talent tree and item synergies, Lion has found a fresh lease of life in the support role.</p>
                </li>
                <li>
                    <h3 className="section-recent-heading">Five features you may not know about Pudge.</h3>
                    <p className="section-recent-text">Unleash the gruesome power of Pudge, the Butcher, with these five lesser-known features that can elevate your gameplay to new heights. Whether you're a seasoned Pudge player or just getting acquainted with this infamous hero, exploring these hidden mechanics will...</p>
                </li>
            </ul>
            <div className="section-separator"></div>
        </section>

        <section className="section">
            <h2 className="section-heading">Trending</h2>
            <ul className="section-trending-content">
                <li>
                    <img src="src\images\voker.jpg" alt="invoker image" className="trending-img" />
                    <div className="trending-description">
                        <h3 className="trending-heading">Master your invoker</h3>
                        <p className="section-recent-text">Master the Art of Invoker - A Procaster's Guide to Dominating Dota's Most Versatile Hero! Delve into the Complex World of Invoker Spells, Combos, and Strategies. Learn How to Adapt to Any Situation, Control Teamfights, and Turn the Tide of Battles. From Sunstrikes to Tornadoes, Empowering Alacrity to Devastating Chaos Meteor, Unleash the True Power of Invoker and Elevate Your Gameplay to the Next Level...</p>
                    </div>
                </li>
                
                <li>
                    <div className="trending-description">
                        <h3 className="trending-heading">Master your invoker</h3>
                        <p className="section-recent-text">Master the Art of Invoker - A Procaster's Guide to Dominating Dota's Most Versatile Hero! Delve into the Complex World of Invoker Spells, Combos, and Strategies. Learn How to Adapt to Any Situation, Control Teamfights, and Turn the Tide of Battles. From Sunstrikes to Tornadoes, Empowering Alacrity to Devastating Chaos Meteor, Unleash the True Power of Invoker and Elevate Your Gameplay to the Next Level...</p>
                    </div>
                    <img src="src\images\geeks.jpg" alt="geeks image" className="trending-img" />
                </li>
            </ul>
        </section>
        </>
    )
}
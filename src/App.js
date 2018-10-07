import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Coffee my Love, my Life</h1>
        <div>
          <img src= "https://www.ahchealthenews.com/wp-content/uploads/2014/02/coffee-and-heart-health.jpg" className="image" />
        </div>
        <article>
          <p>There are over 120 species of Coffea, which is grown from seed. The two most popular are Coffea arabica (commonly known simply as "Arabica") accounts for 75–80 percent of the world's coffee production, 
          while Coffea canephora (known as "Robusta") accounts for about 20 percent.[1]
          The trees produce edible red or purple fruits called "cherries" that are described either as epigynous berries or as indehiscent drupes.[2] These contain two seeds, called "coffee beans", though they are not true beans. 
          In about 5-10% of any crop of coffee cherries, only a single bean is found. Called a peaberry, it is smaller and rounder than a normal coffee bean. 
          These are often removed from the yield and either sold separately or discarded.[why?]
          When grown in the tropics, coffee is a vigorous bush or small tree that usually grows to a height of 3–3.5 m (9.8–11.5 ft). Most commonly cultivated coffee species grow best at high elevations,
          but do not tolerate freezing temperatures.[citation needed]
          The tree of Coffea arabica will grow fruits after three to five years, producing for an average of 50 to 60 years, although up to 100 is possible.[3] The white flowers are highly scented. The fruit takes about 9 months to ripen.</p>
        </article>
        <footer>Provided by <a href="https://en.wikipedia.org/wiki/Coffea">Coffea - Wikipedia</a></footer>
      </div>
    );
  }
}

export default App;

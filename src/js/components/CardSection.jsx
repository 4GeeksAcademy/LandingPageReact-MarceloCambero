import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <div className="container">
      <div className="row d-flex mt-4">
        <div className="col">
          <Card
            img="https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
            title="Card 1"
            description="This is a description for Card 1."
            buttonText="Find Out More!"
          />
        </div >
        <div className="col">
          <Card
            img="https://www.civitatis.com/blog/wp-content/uploads/2020/12/que-ver-irlanda.jpg"
            title="Card 2"
            description="This is a description for Card 2."
            buttonText="Find Out More!"
          />
        </div>
        <div className="col">
          <Card
            img="https://img.nh-hotels.net/8yYbq/rEDyJ/original/Netherlands_Houses.jpg"
            title="Card 3"
            description="This is a description for Card 3."
            buttonText="Find Out More!"
          />
        </div>
        <div className="col">
          <Card
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsmujbaBfqMTsa3jAKitvr1nKXJ2OmcrMbQg&s"
            title="Card 4"
            description="This is a description for Card 4."
            buttonText="Find Out More!"
          />
        </div>
      </div>

    </div>

  )
}

export default CardSection;
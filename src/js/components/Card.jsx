import React from "react";

const Card = (props) => {
    return (
        <div className="card text-center d-flex" style={{width:"18rem"}}>
                    <div className="card-body">
                        <img  className="img-fluid" src={props.img} />
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        {props.buttonText && (
                            <a href="#" className="btn btn-primary">{props.buttonText}</a>
                        )}
                    </div>
                </div>
    );
}

export default Card;

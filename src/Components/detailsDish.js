import React, { Component } from 'react'
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap'

class DetailsDish extends Component {

    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card >
                    <CardImg width="100%" src={dish.image} alt={dish.nmae} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>
                            {dish.description}
                        </CardText>
                    </CardBody>
                </Card>
            )
            
        } else {
            return (
                <div></div>
            )
        }
    }


    render() {

        const comment=this.props.comments.map((comment)=>{
            return(
                <li key={comment.id}>
                <p>{comment.comment}</p>
                 <h6>{comment.author} <span> {comment.date}</span> </h6>
                </li>
            )
        })

        // let commentDiv = () => {
        //     return (
                
        //     )
        // }
        
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                <h3>Comments</h3>
                <ul>
                    {comment}
                </ul>
        </div>
            </div>
        )
    }

}

export default DetailsDish
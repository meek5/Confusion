import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap'
import DetailsDish from './detailsDish'

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
            comments:[]
        }
    }


    onDishSelect(dish) {
        this.setState({comments:dish.comments},console.log(dish.comments))
        this.setState({ selectedDish: dish },()=>console.log(dish))       
    }



    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay className="ml-5">
                            <CardTitle> {dish.name} </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (

            <div className="container">
                <div className="row">
                    {menu}
                </div>

                
                    <DetailsDish selectedDish={this.state.selectedDish} comments={this.state.comments}/>
                
            </div>
        );
    }
}
export default Menu
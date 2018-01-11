import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    List,
    ListItem,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    View,
    Card,
    CardItem,
    Thumbnail
} from 'native-base'

export class RestaurantInfos extends Component{

    render()
    {

        let img = "";

        if (this.props.restaurant.image_url != "") {
            img = this.props.restaurant.image_url;
        } else {
            img = "http://www.omgchrome.com/wp-content/uploads/2015/06/chrome-trex-dinosaur.jpg"
        }

        return(

            <ListItem onPress={this.props.getData}>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{uri: img}} />
                        </Left>
                        <Body>
                            <Text>{this.props.restaurant.name}</Text>
                            <Text note>{(this.props.restaurant.distance/1000 ).toFixed(2)} {"km"}</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                </Card>
            </ListItem>

        )
    }
};
RestaurantInfos.protoTypes = {
    restaurant: PropTypes.object.isRequired
};


const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        getData: () => dispatch(actions.restaurantInfo(ownProps.restaurant)),
    }}

export default connect(null,mapDispatchToProps)(RestaurantInfos);

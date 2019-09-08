import React from 'react';
import {Suspense,lazy} from 'react';

import getFruits from '../services/getFruits';

const GraphHorizontal = lazy(() => import('./graphHorizontal'));

class listItemFavoriteFruit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            items_unique: [],
            color: ''
        };
    }

    componentDidMount() {

      this.getFruits();

    }

    componentWillUnmount() {

    }

    getFruits() {
        //get fruits API
        const callback =  (response) => {
            this.setState({
                items: response
            });

        };
        getFruits.get(callback);
    }


    getPeople = (people) => {
        // copy all items state to fruit
        let fruits = this.state.items;

        // create a new array if peoples fruit passed in is equal to items object value fruit
         let newFruits = fruits.map(item => {
            if(item.favoriteFruit === people){
               return item;
            } else {
                return null;
            }
        });

        //remove all null elements
        newFruits = newFruits.filter((el) => {
            return el !== null;
        });

        //update state of unique fruits state object
        this.setState({
            items_unique: newFruits
        });

    };

    render() {

        return (

            <div>

                {this.state.items !== undefined && (
                <Suspense fallback={<div>Loading...</div>}>
                    <GraphHorizontal
                        state={this.state.items}
                        getPeople={this.getPeople}
                    />
                </Suspense>
                )}

                <br/><br/>
                <h2>List Items Component</h2>

                <ul className="favlist">
                    { this.state.items_unique.length === 0 && (
                        (this.state.items).map((item, key) => {
                            return (
                                <li key={key}>
                                    <span className="left block">{item.name}</span>

                                    <span className="right block" >{item.favoriteFruit}</span>
                                </li>
                            )
                        })
                        )
                    }

                    { this.state.items_unique !== this.state.items && (
                        (this.state.items_unique).map((item, key) => {
                            return (
                                <li key={key}>
                                    <span className="left block">{item.name}</span>

                                    <span className="right block">{item.favoriteFruit}</span>
                                </li>
                            )
                        })
                    )
                    }
                </ul>
                <br/><br/>
            </div>

        );
    }
}

export default listItemFavoriteFruit;
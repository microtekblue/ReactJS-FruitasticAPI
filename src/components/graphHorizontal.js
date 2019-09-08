import React from 'react';

class graphHorizontal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            colors: []
        };

        this.colors = [];
    }

    componentDidUpdate(prevProps, prevState){
        //props passed down are set to state
        if(this.props.state !== prevProps.state){

            this.setState({
                items: this.props.state,
                colors: this.colors
            });
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    getUniqueFruitsList = () => {
        //map to new array of only fruits
        let fruits = this.state.items.map(item => {
            return item.favoriteFruit;
        });

        // remove duplicates and return new array
        return fruits.filter((v, i, a) => a.indexOf(v) === i);
    };


    getFruitCountList = (fruit) => {
        let countFruits = this.state.items.map(item => {
            if(item.favoriteFruit === fruit){
                return item.favoriteFruit;
            } else {
                return null;
            }
        });

        // remove all null items
        countFruits = countFruits.filter((el) => {return el !== null});

        // return array size to get fruit count
        return countFruits.length;
    };

    getRandomColor = (j) => {
        //generate random color hex
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        //set colors only once, on update set colors to state,
        // if no state, set each new color, else, use initial index to set color from colors array
       this.colors.push(color);

       if(this.state.colors.length === 0){
            return color;
        } else {
             return this.colors[j];
       }
    };

    selectFruit = (fruit) => {
        //get selected fruit and console log fruit name and count total
        const fruitNameTotal = this.getFruitCountList(fruit);

        console.log('Fruit selected: ' + fruit + ', ' + fruitNameTotal);

        //pass prop up to parent list component
        this.props.getPeople(fruit);
    };

    render() {

        let getFruit = this.getUniqueFruitsList();

        return (

            <div>
                <h1>Graph Component</h1>

                <ul className="graph">
                    {
                        (getFruit).map((fruit, i) => {
                            return (
                                <li className="row" key={i}>

                                <span className="left block bar-label"
                                onClick={() => this.selectFruit(fruit)}>{fruit}</span>

                                 <span className={'left block bar'} style={{
                                     backgroundColor: this.getRandomColor(i),
                                     width: (this.getFruitCountList(fruit) * 10) + 'px',}}>{this.getFruitCountList(fruit)}</span>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>

        );
    }
}

export default graphHorizontal;
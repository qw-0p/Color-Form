import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import '../styles/Color.scss';

class Color extends Component {
    componentWillMount() {
        this.style = {backgroundColor: '#CCC'};
    }
    shouldComponentUpdate(nextProps) {
        const {rating} = this.props;
        return rating !== nextProps.rating;
    }
    componentWillUpdate(nextProps) {
        this.style = null;
        this.refs.title.style.backgroundColor = 'red';
        this.refs.title.style.color = 'white';
    }
    componentDidUpdate(prevProps) {
        const {rating} = this.props;
        const status = rating > prevProps.rating ? 'better' : 'worse';
        this.refs.title.style.backgroundColor = '';
        this.refs.title.style.color = 'black';
    }
    render() {
        const {title, rating, color, onRate} = this.props;
        return (
            <section className='color' style={this.style}>
                <h1 ref='title'>{title}</h1>
                <div className='color' style={{backgroundColor: color}}></div>

                <StarRating starsSelected={rating} onRate={onRate} />
            </section>
        );
    }
}
Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
};

Color.defaultProps = {
    rating: 0,
    onRemove: (f) => f,
    onRate: (f) => f
};

export default Color;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

class SearchHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        };
    }

    handleSearch(e) {
        if (e.target.value !== '') {
            this.setState({
                keyword: e.target.value,
            });
        } else {
            this.setState({ keyword: '' });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const keyword = this.state.keyword;
        Router.push(`/search?keyword=${keyword}`);
    }

    render() {
        const { rawCategories } = this.props;
        const rawCategoriesWithDefault = [
            { name: 'Tất cả', id: 0 },
            ...rawCategories,
        ];
        const { searchPanel, searchProducts } = this.state;
        return (
            <form
                className="ps-form--quick-search"
                method="get"
                action="/"
                onSubmit={this.handleSubmit.bind(this)}>
                <div className="ps-form__categories">
                    <select className="form-control">
                        {rawCategoriesWithDefault.map((category) => (
                            <option value={category.id} key={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Tìm sản phẩm..."
                    onChange={this.handleSearch.bind(this)}
                />
                <button onClick={this.handleSubmit.bind(this)}>
                    <i className="icon-magnifier"></i>
                </button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return state.product;
};

export default connect(mapStateToProps)(SearchHeader);

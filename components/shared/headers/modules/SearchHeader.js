import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

class SearchHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            category: 0,
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

    handleChangeCategory(e) {
        this.setState({
            category: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const keyword = this.state.keyword;

        if (this.state.category === 0) {
            Router.push(`/search?keyword=${keyword}`);
        } else {
            Router.push(
                `/search?category=${this.state.category}&keyword=${keyword}`
            );
        }
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
                    <select
                        className="form-control"
                        value={this.state.category}
                        onChange={this.handleChangeCategory.bind(this)}>
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

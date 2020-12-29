import React from 'react';
import Link from 'next/link';
import Product from '../../../components/elements/products/Product';

const ProductWidgets = ({ products }) => (
    <section>
        <aside className="widget widget_ads">
            <Link href="/shop">
                <a>
                    <img src="/static/img/ads/product-ads.png" alt="martfury" />
                </a>
            </Link>
        </aside>
        <aside className="widget widget_same-brand">
            <h3>Sản phẩm tương tự</h3>
            <div className="widget__content">
                {products &&
                    products.map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
            </div>
        </aside>
    </section>
);

export default ProductWidgets;

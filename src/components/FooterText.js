import React from 'react';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';

import Link from '../utils/link';
import withPrefix from '../utils/withPrefix';

export default function FooterText(props) {
    const section = _.get(props, 'section');
    const image = _.get(section, 'image');
    const imageUrl = _.get(section, 'image_url');
    const imageAlt = _.get(section, 'image_alt');
    const title = _.get(section, 'title');
    const content = _.get(section, 'content');
    let textColor = _.get(section, 'textColor');

    return (
        <section className="cell widget footer-text-color">
            {image &&
                (imageUrl ? (
                    <Link className="widget-image" href={withPrefix(imageUrl)}>
                        <img src={withPrefix(image)} alt={imageAlt} />
                    </Link>
                ) : (
                    <p className="widget-image">
                        <img src={withPrefix(image)} alt={imageAlt} />
                    </p>
                ))}
            {title && <h2 className="widget-title">{title}</h2>}
            <ReactMarkdown>{content}</ReactMarkdown>
            <style global jsx>{`
                :root {
                    --footer-text-color: ${textColor};
                };
            `}</style>
        </section>
    );
}

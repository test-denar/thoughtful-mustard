import React from 'react';
import _ from 'lodash';

import Action from './Action';

export default function FooterNav(props) {
    const section = _.get(props, 'section');
    const title = _.get(section, 'title');
    const navLinks = _.get(section, 'nav_links');
    let titleColor = _.get(section, 'titleColor');
    let textColor = _.get(section, 'textColor');

    return (
        <section className="cell widget widget-nav">
            {title && <h2 className="" style={{color: titleColor}}>{title}</h2>}
            {navLinks && (
                <ul className="menu" style={{color: textColor}}>
                    {_.map(navLinks, (action, actionIdx) => (
                        <li key={actionIdx} className="menu-item">
                            <Action action={action} />
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

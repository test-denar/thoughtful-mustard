import React from 'react';
import _ from 'lodash';

import CtaButtons from './CtaButtons';

export default function SectionCta(props) {
    const section = _.get(props, 'section');
    const sectionId = _.get(section, 'section_id');
    const title = _.get(section, 'title');
    const subtitle = _.get(section, 'subtitle');
    const actions = _.get(section, 'actions');
    let backgroundColor = _.get(section, 'backgroundColor');
    let titleColor = _.get(section, 'titleColor');
    let textColor = _.get(section, 'textColor');

    return (
        <section id={sectionId} className="block cta-block outer" style={{backgroundColor: backgroundColor}}>
            <div className="inner-large">
                <div className="grid">
                    <div className="cell block-content">
                        {title && <h2 className="block-title" style={{color: titleColor}}>{title}</h2>}
                        {subtitle && <p className="block-copy" style={{color: textColor}}>{subtitle}</p>}
                    </div>
                    {actions && (
                        <div className="cell block-buttons">
                            <CtaButtons actions={actions} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

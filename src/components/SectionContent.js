import React from 'react';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';

import CtaButtons from './CtaButtons';
import withPrefix from '../utils/withPrefix';

export default function SectionContent(props) {
    let section = _.get(props, 'section');
    const sectionId = _.get(section, 'section_id');
    const background = _.get(section, 'background', 'gray');
    const image = _.get(section, 'image');
    const imageAlt = _.get(section, 'image_alt');
    const title = _.get(section, 'title');
    const content = _.get(section, 'content');
    const actions = _.get(section, 'actions');
    let backgroundColor = _.get(section, 'backgroundColor');
    let titleColor = _.get(section, 'titleColor');
    let textColor = _.get(section, 'textColor');

    return (
        <section id={sectionId} className={`block text-block outer`} style={{backgroundColor: backgroundColor}}>
            <div className="inner">
                <div className="grid">
                    {image && (
                        <div className="cell block-preview">
                            <img src={withPrefix(image)} alt={imageAlt} />
                        </div>
                    )}
                    <div className="cell block-content">
                        {title && <h2 className="block-title" style={{color: titleColor}}>{title}</h2>}
                        {content && (
                            <div className="block-copy" style={{color: textColor}}>
                                <ReactMarkdown>{content}</ReactMarkdown>
                            </div>
                        )}
                        {actions && (
                            <div className="block-buttons">
                                <CtaButtons actions={actions} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

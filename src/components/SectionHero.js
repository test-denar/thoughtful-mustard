import React from 'react';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';

import CtaButtons from './CtaButtons';
import withPrefix from '../utils/withPrefix';

export default function SectionHero(props) {
    const section = _.get(props, 'section');
    const sectionId = _.get(section, 'section_id');
    const image = _.get(section, 'image');
    const imageAlt = _.get(section, 'image_alt');
    const title = _.get(section, 'title');
    const content = _.get(section, 'content');
    const actions = _.get(section, 'actions');
    let titleColor = _.get(section, 'titleColor');
    let subtitleColor = _.get(section, 'subtitleColor');
    let backgroundColorLeft = _.get(section, 'backgroundColorLeft');
    let backgroundColorRight = _.get(section, 'backgroundColorRight');
    let imagePosition = _.get(section, 'imagePosition');
    let stackedOrFlat = _.get(section, 'stackedOrFlat');
    let displayHeroImage = _.get(section, 'displayHeroImage');
    let textAlign = _.get(section, 'textAlign');
    let buttonAlignment = _.get(section, 'buttonAlignment');
    let backgroundImage = _.get(section, 'backgroundImage');
    let textBlockWidth = _.get(section, 'textBlockWidth');

    if (imagePosition === "left (or top)") {
        imagePosition = 0;
    } else {
        imagePosition = 1;
    }

    if (stackedOrFlat === "flat") {
        stackedOrFlat = "row";
    } else {
        stackedOrFlat = "column";
    }
    
    if (backgroundColorLeft === "lorem-ipsum") {
        backgroundColorLeft = "white";
    }

    if (backgroundColorRight === "lorem-ipsum") {
        backgroundColorRight = "white";
    }

    if (displayHeroImage === "yes") {
        displayHeroImage = "";
    } else {
        displayHeroImage = "none";
    }

    if (buttonAlignment === "left") {
        buttonAlignment = "flex-start";
    } else if (buttonAlignment === "right") {
        buttonAlignment = "flex-end";
    } else if (buttonAlignment === "center") {
        buttonAlignment = "center";
    }

    if (textBlockWidth === "normal") {
        textBlockWidth = "41.666%";
    } else if (textBlockWidth === "medium") {
        textBlockWidth = "71%";
    } else if (textBlockWidth === "full") {
        textBlockWidth = "100%";
    }
    
    return (
        <section id={sectionId} className={`block hero-block outer`} style={{background: `linear-gradient( to right, ${backgroundColorLeft}, ${backgroundColorRight})`, backgroundImage: `url(${backgroundImage})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`, backgroundPosition:`center`}}>
            <div className="inner">
                <div className="grid order-container" style={{flexDirection: stackedOrFlat}}>
                    {image && (
                        <div className="cell block-preview" style={{order: imagePosition, display: displayHeroImage}}>
                            <img src={withPrefix(image)} alt={imageAlt} />
                        </div>
                    )}
                    <div className="cell block-content order-content" style={{textAlign: textAlign, maxWidth: textBlockWidth}}>
                        {title && <h2 className="block-title" style={{color: titleColor}}>{title}</h2>}
                        {content && (
                            <div style={{color: subtitleColor}}>
                                <ReactMarkdown>{content}</ReactMarkdown>
                            </div>
                        )}
                        {actions && (
                            <div className="block-buttons" style={{justifyContent: buttonAlignment}}>
                                <CtaButtons actions={actions} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}


import React from 'react';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';

export default class SectionFaq extends React.Component {
    constructor(props) {
        super(props);
        this.handorgelRef = React.createRef();
    }

    componentDidMount() {
        const handorgelElm = _.get(this.handorgelRef, 'current');
        if (handorgelElm) {
            new handorgel(handorgelElm, {
                multiSelectable: true
            });
        }
    }

    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const background = _.get(section, 'background', 'gray');
        const title = _.get(section, 'title');
        const subtitle = _.get(section, 'subtitle');
        const faqItems = _.get(section, 'faq_items');
        let backgroundColor = _.get(section, 'backgroundColor');
        let titleColor = _.get(section, 'titleColor');
        let textColor = _.get(section, 'textColor');
        
        
        return (
            <section id={sectionId} className={`block faq-block outer`} style={{backgroundColor: backgroundColor}}>
                <div className="inner-small">
                    <div className="block-header">
                        {title && <h2 className="block-title" style={{color: titleColor}}>{title}</h2>}
                        {subtitle && <p className="" style={{color: textColor}}>{subtitle}</p>}
                    </div>
                    {faqItems && (
                        <div className="faq-accordion handorgel" ref={this.handorgelRef}>
                            {_.map(faqItems, (faqItem, index) => (
                                <FaqItem key={index} {...faqItem} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        );
    }
}

function FaqItem(faqItem) {
    const question = _.get(faqItem, 'question');
    const answer = _.get(faqItem, 'answer');
    let backgroundColor = _.get(faqItem, 'backgroundColor');
    let titleColor = _.get(faqItem, 'titleColor');
    let iconColor = _.get(faqItem, 'iconColor');
    let iconBackgroundColor = _.get(faqItem, 'iconBackgroundColor');
    let borderRadius = _.get(faqItem, 'borderRadius');
    
    if(/[a-z]/i.test(borderRadius)) {
        borderRadius
    } else {
        borderRadius += "px";
    }
    
    return (
        <React.Fragment>
            <h3 className="faq-accordion-header handorgel__header" style={{backgroundColor: backgroundColor, borderRadius: borderRadius}}>
                <button className="handorgel__trigger">
                    <span style={{color: titleColor}}>{question}</span>
                    <span className="handorgel__icon icon-plus" style={{color: iconColor, backgroundColor: iconBackgroundColor}} />
                </button>
            </h3>
            <div className="faq-accordion-content handorgel__content">
                <div className="handorgel__content-inner" style={{backgroundColor: backgroundColor, color: titleColor}}>
                    <ReactMarkdown>{answer}</ReactMarkdown>
                </div>
            </div>
        </React.Fragment>
    );
}

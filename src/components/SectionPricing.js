import React from 'react';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';

import CtaButtons from './CtaButtons';
import classNames from '../utils/classNames';

export default function SectionPricing(props) {
    const section = _.get(props, 'section');
    const sectionId = _.get(section, 'section_id');
    const background = _.get(section, 'background', 'gray');
    const title = _.get(section, 'title');
    const subtitle = _.get(section, 'subtitle');
    const pricingPlans = _.get(section, 'pricing_plans');
    let backgroundColor = _.get(section, 'backgroundColor');
    let titleColor = _.get(section, 'titleColor');
    let textColor = _.get(section, 'textColor');

    return (
        <section id={sectionId} className={`block pricing-block outer`} style={{backgroundColor: backgroundColor}}>
            <div className="block-header inner-small">
                {title && <h2 className="block-title" style={{color: titleColor}}>{title}</h2>}
                {subtitle && <p className="" style={{color: textColor}}>{subtitle}</p>}
            </div>
            {pricingPlans && (
                <div className="inner">
                    <div className="grid">
                        {_.map(pricingPlans, (plan, index) => (
                            <PricingPlan key={index} {...plan} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}

function PricingPlan(plan) {
    const highlight = _.get(plan, 'highlight');
    const title = _.get(plan, 'title');
    const subtitle = _.get(plan, 'subtitle');
    const price = _.get(plan, 'price');
    const details = _.get(plan, 'details');
    const actions = _.get(plan, 'actions');
    let backgroundColor = _.get(plan, 'backgroundColor');
    let titleColor = _.get(plan, 'titleColor');
    let textColor = _.get(plan, 'textColor');

    return (
        <div className="cell plan">
            <div className={classNames('card', { highlight: highlight })} style={{backgroundColor: backgroundColor}}>
                <div className="plan-header">
                    {title && <h3 className="plan-title" style={{color: titleColor}}>{title}</h3>}
                    {subtitle && <div className="plan-subtitle" style={{color: textColor}}>{subtitle}</div>}
                    {price && <div className="plan-price" style={{color: titleColor}}>{price}</div>}
                </div>
                {details && (
                    <div className="plan-content" style={{color: textColor}}>
                        <ReactMarkdown>{details}</ReactMarkdown>
                    </div>
                )}
                {actions && (
                    <div className="plan-footer">
                        <CtaButtons actions={actions} />
                    </div>
                )}
            </div>
        </div>
    );
}

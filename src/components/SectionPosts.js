import React from 'react';
import _ from 'lodash';

import BlogPostFooter from './BlogPostFooter';
import Link from '../utils/link';
import withPrefix from '../utils/withPrefix';
import getPostUrl from '../utils/getPostUrl';

export default function SectionPosts(props) {
    const section = _.get(props, 'section');    
    const posts = _.orderBy(_.get(props, 'posts', []), 'date', 'desc');
    const recentPosts = posts.slice(0, 3);
    const sectionId = _.get(section, 'section_id');
    const title = _.get(section, 'title');
    const subtitle = _.get(section, 'subtitle');
    let backgroundColor = _.get(section, 'backgroundColor');
    let titleColor = _.get(section, 'titleColor');
    let textColor = _.get(section, 'textColor');    

    return (
        <section id={sectionId} className={`block posts-block outer`} style={{backgroundColor: backgroundColor}}>
            <div className="block-header inner-small">
                {title && <h2 className="block-title" style={{color: titleColor}}>{title}</h2>}
                {subtitle && <p className="" style={{color: textColor}}>{subtitle}</p>}
            </div>
            <div className="inner">
                <div className="grid post-feed">
                    {_.map(recentPosts, (post, index) => (
                        <RecentPost key={index} {...post} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function RecentPost(post) {
    const title = _.get(post, 'title');
    const postUrl = getPostUrl(post, { withPrefix: true });
    const thumbImage = _.get(post, 'thumb_image');
    const thumbImageAlt = _.get(post, 'thumb_image_alt');
    const excerpt = _.get(post, 'excerpt');
    const backgroundColor = _.get(post, 'backgroundColor');
    let titleColor = _.get(post, 'titleColor');
    let textColor = _.get(post, 'textColor');
    let subTextColor = _.get(post, 'subTextColor');
    
    return (
        <article className="cell post">
            <div className="card" style={{backgroundColor: backgroundColor}}>
                {thumbImage && (
                    <Link className="post-thumbnail" href={postUrl}>
                        <img src={withPrefix(thumbImage)} alt={thumbImageAlt} />
                    </Link>
                )}
                <div className="post-body">
                    <header className="post-header">
                        <h3 className="post-title" style={{color: titleColor}}>
                            <Link href={postUrl}>{title}</Link>
                        </h3>
                    </header>
                    <div className="post-excerpt">
                        <p style={{color: textColor}}>{excerpt}</p>
                    </div>
                    <BlogPostFooter post={post} dateType={'short'} />
                </div>
            </div>
        </article>
    );
}

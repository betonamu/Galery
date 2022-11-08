import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import styles from './Breadcrumbs.module.scss';

type BreadcrumbProps = {
    breadcrumbs: Array<{ url?: string, isActive?: boolean, label: string }>;
    className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({breadcrumbs, className}) => {
    if (!breadcrumbs?.length)
        return <></>

    return (
        <nav>
            <ol className={classNames(styles.breadcrumbs, className)} itemScope
                itemType="https://schema.org/BreadcrumbList">
                {breadcrumbs?.map((breadcrumb, index) => (
                    <li key={index} className={classNames({
                        [styles.item]: true,
                        [styles.itemActive]: breadcrumb?.isActive === true,
                    })} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        {breadcrumb?.url
                            ?
                            <>
                                <Link href={breadcrumb?.url}>
                                    <a itemProp="item">
                                                    <span itemProp="name"
                                                          dangerouslySetInnerHTML={{__html: breadcrumb?.label}}/>
                                    </a>
                                </Link>
                                <meta itemProp="position" content={(index + 1).toString()}/>
                            </>
                            :
                            <>
                                <a itemProp="item">
                                                <span itemProp="name"
                                                      dangerouslySetInnerHTML={{__html: breadcrumb?.label}}/>
                                </a>
                                <meta itemProp="position" content={(index + 1).toString()}/>
                            </>
                        }
                    </li>
                ))}
            </ol>
        </nav>
    )
};

export default Breadcrumbs;

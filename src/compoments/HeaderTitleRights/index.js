import HeaderTitleRight from './HeaderTitleRight';
import classNames from 'classnames/bind';
import Styles from './HeaderTitleRights.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(Styles);
function HeaderTitleRights() {
    return (
        <div className={cx('headerRight')}>
            <ul className={cx('List_Right')}>
                {HeaderTitleRight.map((titles) => {
                    return (
                        <li key={titles.id} className={cx('Title_Right')}>
                            <Link to="/">
                                <span> {titles.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default HeaderTitleRights;

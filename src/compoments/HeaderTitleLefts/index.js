import HeaderTitleLeft from './HeaderTitleLeft';
import classNames from 'classnames/bind';
import Styles from './HeaderTitleLeft.module.scss';
import { Link } from 'react-router-dom';
import './';
import 'tippy.js/dist/tippy.css'; // optional

import Menu from '../Header/menu';
import MenuLever3 from '../Header/MenuLever3';
import WrapLever3 from '../Header/Lever3Wrap';

const cx = classNames.bind(Styles);
function HeaderTitleLefts() {
    return (
        <WrapLever3>
            <div className={cx('headerLeft')}>
                <ul className={cx('List_title')}>
                    {HeaderTitleLeft.map((titles) => {
                        return (
                            <li key={titles.id} className={cx('Title_Left', 'NoWrap')}>
                                <Link to="/">
                                    <Menu data={titles.title} />
                                    <div className={cx('hammodule', 'changColor')}>
                                        <ul>
                                            {titles.data.map((value) => {
                                                return (
                                                    <li key={value.id} className={cx('Title_lever2')}>
                                                        {value.title}
                                                        <MenuLever3 data={value.data} colorHover />
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </WrapLever3>
    );
}

export default HeaderTitleLefts;

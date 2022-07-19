import classNames from 'classnames/bind';
import Styles from './Header.module.scss';
import images from '~/assets/images';
import HeaderTitleLefts from '../HeaderTitleLefts';
import HeaderTitleRights from '../HeaderTitleRights';
import IconHeader from '../Icons';

const cx = classNames.bind(Styles);

function Header() {
    return (
        <div className={cx('Header')}>
            <nav className={cx('navHeader')}>
                <div className={cx('WarpLeft')}>
                    <img className={cx('LogoPage')} src={images.logo} alt="Logo" />

                    <HeaderTitleLefts />
                </div>

                <div className={cx('WarpRight')}>
                    <HeaderTitleRights />
                    <IconHeader />
                </div>
            </nav>
        </div>
    );
}

export default Header;

import classNames from 'classnames/bind';
import Styles from './MenuLever3.module.scss';
const cx = classNames.bind(Styles);
function MenuLever3({ data, colorHover }) {
    const classe = cx('Title_Lever3', {
        colorHover,
    });
    return (
        <div className={classe}>
            <ul>
                {data !== undefined &&
                    data.map((value) => {
                        return <li key={value.id}>{value.title}</li>;
                    })}
            </ul>
        </div>
    );
}

export default MenuLever3;

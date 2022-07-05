import { useState, useEffect } from 'react'
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import background from '~/assets/img/background.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles);

function Register() {
    document.title = 'Đăng ký tài khoản zalo';
    const [values, setValues] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('form');
    }

    const handleChange = (e) => {
        setValues(...values, { [e.target.name]: e.target.values });
    }

    return (
        <div className={cx('wrapper')}>
            <img src={background} alt="" />

            <div className={cx('header')}>
                <h1>
                    <a href="/" className={cx('logo')}></a>
                </h1>

                <h2 className={cx('header-desc')}>
                    Đăng kí tài khoản Zalo <br />
                    để kết nối với ứng dụng Zalo Chat
                </h2>
            </div>

            <div className={cx('body')}>
                <h4 className={cx('body-title')}>
                    Đăng ký tài khoản zalo
                </h4>

                <form action="" className={cx('form')} onSubmit={(e) => handleSubmit(e)}>
                    <div className={cx("input-container")}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input type="email" placeholder='Email' name='email' onChange={(e) => handleChange(e)} />
                    </div>

                    <div className={cx("input-container")}>
                        <FontAwesomeIcon icon={faUser} />
                        <input type="text" placeholder='Tên đăng nhập' name='username' onChange={(e) => handleChange(e)} />
                    </div>


                    <div className={cx("input-container")}>
                        <FontAwesomeIcon icon={faLock} />
                        <input type="password" placeholder='Mật khẩu' name='password' onChange={(e) => handleChange(e)} />
                    </div>

                    <div className={cx("input-container")}>
                        <FontAwesomeIcon icon={faLock} />
                        <input type="password" placeholder='Nhập lại mật khẩu' name='confirmPassword' onChange={(e) => handleChange(e)} />
                    </div>

                    <button className={cx("btn-submit")}>Đăng kí</button>
                </form>
            </div>

            <div className={cx('action-more')}>
                <span>Bạn đã có tài khoản? </span>
                <Link to="/login">Đăng nhập</Link>

            </div>

            <div className={cx('footer')}>
                <p className={cx('select-lang')}>
                    <a href="#" className={cx('active')}>Tiếng Việt</a>
                    <a href="#">English</a>
                </p>

                <p>Dùng tài khoản Zalo để truy cập các ứng dụng của ZA</p>

                <div className={cx('logos')}>
                    <ul>
                        <li>
                            <a href="" className={cx('logo-zalo')}>
                                <i className={cx('logo-zalo')}></i>
                            </a>
                        </li>

                        <li>
                            <a href="" className={cx('logo-zingmp3')}>
                                <i className={cx('logo-zingmp3')}></i>
                            </a>
                        </li>

                        <li>
                            <a href="" className={cx('logo-zingtv')}>
                                <i className={cx('logo-zingtv')}></i>
                            </a>
                        </li>

                        <li>
                            <a href="" className={cx('logo-zing')}>
                                <i className={cx('logo-zing')}></i>
                            </a>
                        </li>

                        <li>
                            <a href="" className={cx('logo-baomoi')}>
                                <i className={cx('logo-baomoi')}></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Register

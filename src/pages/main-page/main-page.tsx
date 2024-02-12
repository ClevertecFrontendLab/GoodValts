import React, { useEffect, useState } from 'react';
import styles from './main-page.module.scss';
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { Button, Image } from 'antd';
import narrowLogo from './assets/narrow-logo.png';
import wideLogo from './assets/wide-logo.png';
import exitIcon from './assets/exit.svg';
import { MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import Card from 'antd/lib/card/Card';
import dataObj from './main-data';

export const MainPage: React.FC = () => {
    const mobileClip = 833.98;
    const defaultFont = '14px';

    const [isOpened, setIsOpened] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const openSider = () => {
        isOpened ? setIsOpened(false) : setIsOpened(true);
    };

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });
    }, []);
    return (
        <Layout className={styles.page}>
            <Layout className={styles.layout}>
                <Sider
                    className={styles.sider}
                    width={width > mobileClip ? (isOpened ? 208 : 64) : isOpened ? 106 : 0}
                    onClick={openSider}
                >
                    <div>
                        <Image
                            className={styles.logo}
                            src={isOpened ? wideLogo : narrowLogo}
                            alt='logo'
                            preview={false}
                        ></Image>
                        <nav className={styles.nav}>
                            {dataObj.sider.nav.map((el) => {
                                return (
                                    <Button className={styles.navItem} key={el.text}>
                                        <el.logo style={{ fontSize: defaultFont }} />
                                        {isOpened && el.text}
                                    </Button>
                                );
                            })}
                        </nav>
                    </div>
                    <div className={styles.exitContainer}>
                        <Button className={styles.exitButton}>
                            <img src={exitIcon} alt='exit' />
                            {isOpened && <p>{dataObj.sider.exit}</p>}
                        </Button>
                    </div>
                    {React.cloneElement(isOpened ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />, {
                        className: styles.siderButton,
                        style: { fontSize: defaultFont },
                        'data-test-id': 'sider-switch',
                    })}
                </Sider>
                <Layout className={styles.pageContent}>
                    <div
                        className={styles.siderButtonMobile}
                        onClick={openSider}
                        data-test-id='sider-switch-mobile'
                        style={{ left: isOpened ? '106px' : '0' }}
                    >
                        {React.cloneElement(
                            isOpened ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />,
                            { style: { fontSize: defaultFont } },
                        )}
                    </div>
                    <Header className={styles.header}>
                        <Typography.Paragraph className={styles.pageName}>
                            {dataObj.header.breadcrumbs}
                        </Typography.Paragraph>
                        <Typography.Title className={styles.headerText}>
                            {dataObj.header.title}
                        </Typography.Title>
                        <Button className={styles.headerButton}>
                            <SettingOutlined style={{ fontSize: defaultFont }} />
                            {width < mobileClip ? '' : dataObj.header.button}
                        </Button>
                    </Header>
                    <Content className={styles.main}>
                        <section>
                            <Typography className={styles.firstArticle}>
                                {dataObj.main.firstArticle.split('\n').map((el) => {
                                    return (
                                        <Typography.Paragraph
                                            key={el}
                                            className={styles.firstArticleText}
                                        >
                                            {el}
                                        </Typography.Paragraph>
                                    );
                                })}
                            </Typography>
                            <Typography className={styles.secondArticle}>
                                <Typography.Paragraph className={styles.secondArticleText}>
                                    {dataObj.main.secondArticle}
                                </Typography.Paragraph>
                            </Typography>
                        </section>
                        <section className={styles.cards}>
                            {dataObj.main.cards.map((el) => {
                                return (
                                    <Card key={el.buttonText} className={styles.card}>
                                        <Typography.Title level={3} className={styles.cardHeader}>
                                            {el.description}
                                        </Typography.Title>
                                        <Button className={styles.cardButton}>
                                            <el.logo />
                                            {el.buttonText}
                                        </Button>
                                    </Card>
                                );
                            })}
                        </section>
                    </Content>
                    <Footer className={styles.footer}>
                        <Button className={styles.feedback}>{dataObj.footer.feedback}</Button>
                        <Card className={styles.download}>
                            <div className={styles.downloadInfo}>
                                <Typography.Link className={styles.downloadInfoLink}>
                                    {dataObj.footer.download.link}
                                </Typography.Link>
                                <Typography.Paragraph className={styles.downloadInfoTitle}>
                                    {dataObj.footer.download.description}
                                </Typography.Paragraph>
                            </div>
                            <div className={styles.downloadButtons}>
                                {dataObj.footer.download.buttons.map((el) => {
                                    return (
                                        <Button className={styles.osButton} key={el.os}>
                                            <el.logo
                                                style={{
                                                    fontSize: defaultFont,
                                                }}
                                            ></el.logo>
                                            {el.os}
                                        </Button>
                                    );
                                })}
                            </div>
                        </Card>
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    );
};
